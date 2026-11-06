// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import { HttpWrapperService } from './http-wrapper.service';
import { OnboardingService, OnboardingResponse } from './onboarding.service';

beforeAll(() => {
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

describe('OnboardingService performance & cache optimizations', () => {
    let service: OnboardingService;
    let httpMock: { sendRequest: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        httpMock = {
            sendRequest: vi.fn(),
        };

        TestBed.configureTestingModule({
            providers: [
                OnboardingService,
                { provide: HttpWrapperService, useValue: httpMock },
            ],
        });

        service = TestBed.inject(OnboardingService);
    });

    it('syncs completed tasks and sets all completed when all 12 tasks are finished', () => {
        const mockPayload: OnboardingResponse = {
            data: {
                client: 'cli_123',
                isActivated: true,
                totalRewardedAmount: 12,
                tasks: [
                    { taskId: 'test_smartcheck', status: 'COMPLETED', rewarded: true, rewardAmount: 1 },
                    { taskId: 'subscribe_smart_enroll', status: 'COMPLETED', rewarded: true, rewardAmount: 1 },
                ],
            },
        };

        httpMock.sendRequest.mockReturnValue(of(mockPayload));

        service.getOnboarding().subscribe();

        expect(service.isTaskCompleted('test_smartcheck')).toBe(true);
        expect(service.isTaskCompleted('subscribe_smart_enroll')).toBe(true);
        expect(service.areAllTasksCompleted()).toBe(true);
    });

    it('does NOT call backend when updateTaskStatus is called for a completed task', () => {
        service.markTaskCompletedLocally('subscribe_smart_enroll');

        let emitted = false;
        service.updateTaskStatus('subscribe_smart_enroll', 'VISITED').subscribe(() => {
            emitted = true;
        });

        expect(emitted).toBe(true);
        expect(httpMock.sendRequest).not.toHaveBeenCalled();
    });

    it('does NOT call backend repeatedly for the same status in the same session', () => {
        httpMock.sendRequest.mockReturnValue(of({ data: { client: 'cli_1', tasks: [], isActivated: false, totalRewardedAmount: 0 } }));

        service.updateTaskStatus('test_custom_task', 'VISITED').subscribe();
        expect(httpMock.sendRequest).toHaveBeenCalledTimes(1);

        // Second time visiting the same route
        service.updateTaskStatus('test_custom_task', 'VISITED').subscribe();
        expect(httpMock.sendRequest).toHaveBeenCalledTimes(1); // not called again!
    });
});
