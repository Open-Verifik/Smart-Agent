// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { Component, signal } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@jsverse/transloco';
import { of } from 'rxjs';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    DisableWithoutPermissionDirective,
    HasStaffPermissionDirective,
} from './has-staff-permission.directive';
import { StaffPermissionService } from './staff-permission.service';
import { StaffRbacApiService } from './staff-rbac-api.service';

beforeAll(() => {
    if (!globalThis.localStorage) {
        const store = new Map<string, string>();
        Object.defineProperty(globalThis, 'localStorage', {
            configurable: true,
            value: {
                getItem: (k: string) => store.get(k) ?? null,
                setItem: (k: string, v: string) => store.set(k, String(v)),
                removeItem: (k: string) => store.delete(k),
                clear: () => store.clear(),
            },
        });
    }
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

@Component({
    standalone: true,
    imports: [HasStaffPermissionDirective, DisableWithoutPermissionDirective],
    template: `
        <button id="single-create" *hasStaffPermission="'smartReportsBatch.create'">Create Batch</button>
        <button id="any-check" *hasStaffPermission="['billingCredits.create', 'billingUsage.read']; mode: 'any'">Any</button>
        <button id="all-check" *hasStaffPermission="['billingUsage.read', 'billingCredits.create']; mode: 'all'">All</button>
        <button id="lock-btn" [disableWithoutPermission]="targetPermission()" (click)="onActionClick()">Export</button>
    `,
})
class DirectiveHostComponent {
    targetPermission = signal('smartReportsTemplates.export');
    clickedCount = 0;

    onActionClick(): void {
        this.clickedCount += 1;
    }
}

describe('HasStaffPermissionDirective & DisableWithoutPermissionDirective', () => {
    let service: StaffPermissionService;
    let dialogOpenSpy: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        localStorage.clear();
        dialogOpenSpy = vi.fn();

        TestBed.configureTestingModule({
            imports: [DirectiveHostComponent],
            providers: [
                StaffPermissionService,
                {
                    provide: StaffRbacApiService,
                    useValue: { getMyPermissions: () => of(null) },
                },
                {
                    provide: MatDialog,
                    useValue: { open: dialogOpenSpy },
                },
                {
                    provide: MatSnackBar,
                    useValue: { open: vi.fn() },
                },
                {
                    provide: TranslocoService,
                    useValue: { translate: (key: string) => key },
                },
            ],
        });

        service = TestBed.inject(StaffPermissionService);
    });

    afterEach(() => {
        service.clear();
        localStorage.clear();
        vi.restoreAllMocks();
    });

    it('renders and hides structural elements reactively across single, any, and all modes', () => {
        service.hydrateFromSession({
            _id: 'staff-1',
            staff: 'staff-1',
            isStaff: true,
            role: 'viewer',
        });

        const fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
        TestBed.flushEffects();
        fixture.detectChanges();

        const root: HTMLElement = fixture.nativeElement;
        expect(root.querySelector('#single-create')).toBeNull();
        expect(root.querySelector('#any-check')).not.toBeNull();
        expect(root.querySelector('#all-check')).toBeNull();

        // Grant billingCredits.create dynamically and verify all-mode updates
        service.hydrateFromSession({
            _id: 'staff-1',
            staff: 'staff-1',
            isStaff: true,
            role: 'finance',
        });
        fixture.detectChanges();
        TestBed.flushEffects();
        fixture.detectChanges();

        expect(root.querySelector('#all-check')).not.toBeNull();
        expect(root.querySelector('#single-create')).toBeNull();
    });

    it('locks restricted buttons with aria-disabled, data-staff-locked, opens RequestAccessDialog, and unlocks once granted', () => {
        service.hydrateFromSession({
            _id: 'staff-2',
            staff: 'staff-2',
            isStaff: true,
            role: 'operator',
        });

        const fixture = TestBed.createComponent(DirectiveHostComponent);
        fixture.detectChanges();
        TestBed.flushEffects();
        fixture.detectChanges();

        const btn = fixture.nativeElement.querySelector('#lock-btn') as HTMLButtonElement;
        expect(btn.getAttribute('aria-disabled')).toBe('true');
        expect(btn.getAttribute('data-staff-locked')).toBe('true');
        expect(btn.classList.contains('staff-permission-locked')).toBe(true);

        btn.click();
        expect(fixture.componentInstance.clickedCount).toBe(0);
        expect(dialogOpenSpy).toHaveBeenCalledTimes(1);

        // Upgrade role to admin (has smartReportsTemplates.export) -> lock attributes removed
        service.hydrateFromSession({
            _id: 'staff-2',
            staff: 'staff-2',
            isStaff: true,
            role: 'admin',
        });
        fixture.detectChanges();
        TestBed.flushEffects();
        fixture.detectChanges();

        expect(btn.getAttribute('aria-disabled')).toBeNull();
        expect(btn.getAttribute('data-staff-locked')).toBeNull();
        expect(btn.classList.contains('staff-permission-locked')).toBe(false);

        btn.click();
        expect(fixture.componentInstance.clickedCount).toBe(1);
    });
});
