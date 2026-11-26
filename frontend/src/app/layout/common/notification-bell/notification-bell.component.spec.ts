// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { ElementRef, signal } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { of, Subject } from 'rxjs';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { AppNotificationsService } from 'app/core/notifications/app-notifications.service';
import { InboxItem } from 'app/core/notifications/app-notifications.models';
import { SessionService } from 'app/core/services/session.service';
import { QuickChatService } from 'app/layout/common/quick-chat/quick-chat.service';
import { NotificationBellComponent } from './notification-bell.component';

function makeItem(overrides: Partial<InboxItem> = {}): InboxItem {
    return {
        notificationId: 'n-1',
        code: 'N-1',
        category: 'security',
        priority: 'high',
        interactionMode: 'informational',
        surfaces: ['inbox'],
        publishedAt: '2026-11-25T10:00:00.000Z',
        expiresAt: null,
        content: {
            title: 'Security update',
            summary: 'Please review the latest update.',
            body: '<p>Full body</p>',
        },
        cta: null,
        legal: null,
        receipt: {
            status: 'delivered',
            isUnread: true,
            firstSeenAt: null,
            acknowledgedAt: null,
            acceptedAt: null,
            dismissedAt: null,
        },
        ...overrides,
    };
}

beforeAll(() => {
    const testBed = getTestBed();
    if (!testBed.platform) {
        testBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    }
});

describe('NotificationBellComponent', () => {
    let component: NotificationBellComponent;
    let unreadCountSig: ReturnType<typeof signal<number>>;
    let itemsSig: ReturnType<typeof signal<InboxItem[]>>;
    let notificationsMock: Record<string, any>;

    beforeEach(() => {
        TestBed.resetTestingModule();
        unreadCountSig = signal(2);
        itemsSig = signal<InboxItem[]>([
            makeItem({ notificationId: 'info-1', interactionMode: 'informational' }),
            makeItem({
                notificationId: 'read-1',
                interactionMode: 'informational',
                receipt: {
                    status: 'seen',
                    isUnread: false,
                    firstSeenAt: '2026-11-25T11:00:00.000Z',
                    acknowledgedAt: null,
                    acceptedAt: null,
                    dismissedAt: null,
                },
            }),
            makeItem({ notificationId: 'ack-1', interactionMode: 'acknowledge' }),
        ]);

        notificationsMock = {
            openBell$: new Subject<void>(),
            unreadCount: unreadCountSig,
            hubInboxItems: itemsSig,
            hubInboxLoading: signal(false),
            hubInboxError: signal<string | null>(null),
            refreshHubInbox: vi.fn(() => of(undefined)),
            show: vi.fn((id: string) => {
                const found = itemsSig().find((entry) => entry.notificationId === id) ?? makeItem({ notificationId: id });
                return of({ data: found });
            }),
            markAsSeen: vi.fn((id: string) => {
                itemsSig.update((list) =>
                    list.map((entry) =>
                        entry.notificationId === id
                            ? {
                                  ...entry,
                                  receipt: {
                                      ...entry.receipt,
                                      status: 'seen',
                                      isUnread: false,
                                      firstSeenAt: '2026-11-26T00:00:00.000Z',
                                  },
                              }
                            : entry
                    )
                );
                unreadCountSig.update((c) => Math.max(0, c - 1));
                return of(undefined);
            }),
            markVisibleAsSeen: vi.fn(() => of(undefined)),
            dismissAndForget: vi.fn(() => of(undefined)),
            acknowledgeAndForget: vi.fn(() => of(undefined)),
            acceptAndForget: vi.fn(() => of(undefined)),
        };

        TestBed.configureTestingModule({
            providers: [
                { provide: AppNotificationsService, useValue: notificationsMock },
                { provide: SessionService, useValue: { token: '' } },
                { provide: MatDialog, useValue: { open: vi.fn() } },
                { provide: Router, useValue: { navigateByUrl: vi.fn() } },
                { provide: QuickChatService, useValue: { open: vi.fn() } },
                { provide: TranslocoService, useValue: { translate: (k: string) => k } },
                { provide: DomSanitizer, useValue: { bypassSecurityTrustHtml: (h: string) => h } },
                { provide: ElementRef, useValue: new ElementRef(document.createElement('div')) },
            ],
        });

        component = TestBed.runInInjectionContext(() => new NotificationBellComponent());
    });

    it('marks informational notification as read immediately upon opening detail', () => {
        const item = itemsSig()[0];
        component.opened.set(true);

        component.openDetail(item);

        expect(notificationsMock.markAsSeen).toHaveBeenCalledTimes(1);
        expect(notificationsMock.markAsSeen).toHaveBeenCalledWith('info-1');
        expect(component.detailItem()?.receipt?.isUnread).toBe(false);
        expect(unreadCountSig()).toBe(1);
    });

    it('does not auto-mark acknowledge notifications as read on open', () => {
        const ackItem = itemsSig()[2];
        component.opened.set(true);

        component.openDetail(ackItem);

        expect(notificationsMock.markAsSeen).not.toHaveBeenCalled();
        expect(component.detailItem()?.receipt?.isUnread).toBe(true);
    });

    it('filters list items between all and unread', () => {
        expect(component.filteredItems().map((i) => i.notificationId)).toEqual(['info-1', 'read-1', 'ack-1']);

        component.setFilter('unread');
        expect(component.filteredItems().map((i) => i.notificationId)).toEqual(['info-1', 'ack-1']);
    });

    it('closes image, then detail, then panel on Escape key', () => {
        component.opened.set(true);
        component.openDetail(itemsSig()[0]);
        component.expandedImageSrc.set('https://example.com/pic.png');

        component.onEscape();
        expect(component.expandedImageSrc()).toBeNull();
        expect(component.selectedItem()).not.toBeNull();
        expect(component.opened()).toBe(true);

        component.onEscape();
        expect(component.selectedItem()).toBeNull();
        expect(component.opened()).toBe(true);

        component.onEscape();
        expect(component.opened()).toBe(false);
    });

    it('closePanel closes both detail and panel in one step', () => {
        component.opened.set(true);
        component.openDetail(itemsSig()[0]);

        component.closePanel(false);

        expect(component.opened()).toBe(false);
        expect(component.selectedItem()).toBeNull();
    });
});
