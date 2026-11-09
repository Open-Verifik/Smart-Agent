// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';
import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import { SmartEnrollPreviewComponent } from './smart-enroll-preview.component';
import { SetupService } from '../setup.service';

beforeAll(() => {
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

describe('SmartEnrollPreviewComponent auto-expand on desktop', () => {
    let component: SmartEnrollPreviewComponent;
    let mockDialog: { open: ReturnType<typeof vi.fn> };
    let afterClosedSubject: Subject<unknown>;

    beforeEach(() => {
        TestBed.resetTestingModule();
        afterClosedSubject = new Subject();
        mockDialog = {
            open: vi.fn().mockReturnValue({
                afterClosed: () => afterClosedSubject.asObservable(),
                close: vi.fn(),
            }),
        };

        TestBed.configureTestingModule({
            providers: [
                { provide: MatDialog, useValue: mockDialog },
                { provide: ChangeDetectorRef, useValue: { markForCheck: vi.fn() } },
                { provide: SetupService, useValue: { stepIndex$: of(0), defaultBranding: {} } },
            ],
        });

        component = TestBed.runInInjectionContext(() => new SmartEnrollPreviewComponent());
        component.fullscreenDialogTpl = {} as TemplateRef<unknown>;
    });

    it('auto-expands to modal when desktop is selected outside modal', () => {
        expect(component.deviceType).toBe('tablet');

        component.setDeviceType('desktop');

        expect(component.deviceType).toBe('desktop');
        expect(mockDialog.open).toHaveBeenCalledTimes(1);
        expect(component.isFullscreen).toBe(true);
    });

    it('does NOT open dialog when tablet or mobile is selected', () => {
        component.setDeviceType('mobile');
        expect(component.deviceType).toBe('mobile');
        expect(mockDialog.open).not.toHaveBeenCalled();

        component.setDeviceType('tablet');
        expect(component.deviceType).toBe('tablet');
        expect(mockDialog.open).not.toHaveBeenCalled();
    });

    it('resets deviceType to tablet when modal is closed if it was desktop', () => {
        component.setDeviceType('desktop');
        expect(component.deviceType).toBe('desktop');

        // Dialog closes
        afterClosedSubject.next(true);

        expect(component.isFullscreen).toBe(false);
        expect(component.deviceType).toBe('tablet');
    });

    it('does NOT re-open modal if desktop is selected while already in modal', () => {
        component.toggleFullscreen();
        expect(mockDialog.open).toHaveBeenCalledTimes(1);

        // While dialog is open, user clicks desktop inside modal
        component.setDeviceType('desktop');
        expect(component.deviceType).toBe('desktop');
        // Still called only once!
        expect(mockDialog.open).toHaveBeenCalledTimes(1);
    });
});

