// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import { AppNotificationsService } from './app-notifications.service';
import { InboxListResponse } from './app-notifications.models';

beforeAll(() => {
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

describe('AppNotificationsService request deduplication & caching', () => {
    let service: AppNotificationsService;
    let httpMock: { get: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        httpMock = {
            get: vi.fn(),
        };

        TestBed.configureTestingModule({
            providers: [
                AppNotificationsService,
                { provide: HttpClient, useValue: httpMock },
            ],
        });

        service = TestBed.inject(AppNotificationsService);
    });

    it('deduplicates concurrent getActiveBanners requests into one HTTP call', () => {
        const mockResponse: InboxListResponse = {
            data: [],
            pagination: { page: 1, perPage: 10, total: 0, pages: 0 },
            meta: { cacheForMs: 60000 },
        };
        httpMock.get.mockReturnValue(of(mockResponse));

        // Call twice simultaneously
        service.getActiveBanners().subscribe();
        service.getActiveBanners().subscribe();

        expect(httpMock.get).toHaveBeenCalledTimes(1);
    });

    it('deduplicates concurrent getActiveModals requests into one HTTP call', () => {
        const mockResponse: InboxListResponse = {
            data: [],
            pagination: { page: 1, perPage: 10, total: 0, pages: 0 },
            meta: { cacheForMs: 60000 },
        };
        httpMock.get.mockReturnValue(of(mockResponse));

        // Call twice simultaneously
        service.getActiveModals().subscribe();
        service.getActiveModals().subscribe();

        expect(httpMock.get).toHaveBeenCalledTimes(1);
    });
});
