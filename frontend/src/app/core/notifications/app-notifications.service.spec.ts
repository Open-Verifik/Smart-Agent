// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest';
import { AppNotificationsService } from './app-notifications.service';
import { InboxItem, InboxListResponse } from './app-notifications.models';

function buildInboxItem(overrides: Partial<InboxItem> = {}): InboxItem {
    return {
        notificationId: 'notif-1',
        code: 'N-1',
        category: 'maintenance',
        priority: 'normal',
        interactionMode: 'informational',
        surfaces: ['inbox'],
        publishedAt: '2026-11-25T10:00:00.000Z',
        expiresAt: null,
        content: {
            title: 'Scheduled maintenance',
            summary: 'Window starts at 02:00 UTC',
            body: '<p>Details</p>',
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

describe('AppNotificationsService request deduplication & caching', () => {
    let service: AppNotificationsService;
    let httpMock: { get: ReturnType<typeof vi.fn>; put: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        TestBed.resetTestingModule();
        httpMock = {
            get: vi.fn(),
            put: vi.fn(),
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

    it('markAsSeen optimistically marks informational items read, patches detail cache, and syncs server unreadCount', () => {
        const infoItem = buildInboxItem({ notificationId: 'info-1', interactionMode: 'informational' });
        const secondItem = buildInboxItem({ notificationId: 'info-2', interactionMode: 'seen_required' });
        const listResp: InboxListResponse = {
            data: [infoItem, secondItem],
            pagination: { page: 1, perPage: 25, total: 2, pages: 1 },
            meta: { unreadCount: 2, cacheForMs: 60000 },
        };
        httpMock.get
            .mockReturnValueOnce(of(listResp))
            .mockReturnValueOnce(of({ data: infoItem }));
        httpMock.put.mockReturnValue(of({ data: { status: 'seen' }, meta: { unreadCount: 1 } }));

        service.refreshHubInbox(true).subscribe();
        service.show('info-1').subscribe(); // populate _detailCache with isUnread: true

        expect(service.unreadCount()).toBe(2);

        service.markAsSeen('info-1').subscribe();

        expect(httpMock.put).toHaveBeenCalledWith(
            expect.stringMatching(/\/inbox\/info-1\/seen$/),
            null,
            expect.objectContaining({ params: { productScope: 'smart_agent' } })
        );
        expect(service.unreadCount()).toBe(1);
        expect(service.hubInboxItems()[0].receipt?.isUnread).toBe(false);
        expect(service.hubInboxItems()[0].receipt?.status).toBe('seen');

        // Cached detail must also reflect isUnread: false without hitting network again
        let cachedDetail: InboxItem | undefined;
        service.show('info-1').subscribe((res) => (cachedDetail = res.data));
        expect(cachedDetail?.receipt?.isUnread).toBe(false);
    });

    it('markAsSeen rolls back local unread state if the HTTP request fails', () => {
        const infoItem = buildInboxItem({ notificationId: 'info-err', interactionMode: 'informational' });
        httpMock.get.mockReturnValue(
            of({
                data: [infoItem],
                pagination: { page: 1, perPage: 25, total: 1, pages: 1 },
                meta: { unreadCount: 1 },
            })
        );
        httpMock.put.mockReturnValue(throwError(() => new Error('network failed')));

        service.refreshHubInbox(true).subscribe();
        expect(service.unreadCount()).toBe(1);

        let errored = false;
        service.markAsSeen('info-err').subscribe({
            error: () => {
                errored = true;
            },
        });

        expect(errored).toBe(true);
        expect(service.unreadCount()).toBe(1);
        expect(service.hubInboxItems()[0].receipt?.isUnread).toBe(true);
    });

    it('noteSeenLocally does not mark acknowledge or accept notifications as read', () => {
        const ackItem = buildInboxItem({ notificationId: 'ack-1', interactionMode: 'acknowledge' });
        const accItem = buildInboxItem({ notificationId: 'acc-1', interactionMode: 'accept' });
        httpMock.get.mockReturnValue(
            of({
                data: [ackItem, accItem],
                pagination: { page: 1, perPage: 25, total: 2, pages: 1 },
                meta: { unreadCount: 2 },
            })
        );

        service.refreshHubInbox(true).subscribe();

        expect(service.noteSeenLocally('ack-1')).toBe(false);
        expect(service.noteSeenLocally('acc-1')).toBe(false);
        expect(service.unreadCount()).toBe(2);
        expect(service.hubInboxItems().every((item) => item.receipt?.isUnread)).toBe(true);
    });

    it('markVisibleAsSeen marks informational and seen_required items and syncs unreadCount from server', () => {
        const infoItem = buildInboxItem({ notificationId: 'info-1', interactionMode: 'informational' });
        const seenItem = buildInboxItem({ notificationId: 'seen-1', interactionMode: 'seen_required' });
        const ackItem = buildInboxItem({ notificationId: 'ack-1', interactionMode: 'acknowledge' });
        httpMock.get.mockReturnValue(
            of({
                data: [infoItem, seenItem, ackItem],
                pagination: { page: 1, perPage: 25, total: 3, pages: 1 },
                meta: { unreadCount: 3 },
            })
        );
        httpMock.put.mockReturnValue(of({ data: { count: 2, unreadCount: 1 }, meta: { unreadCount: 1 } }));

        service.refreshHubInbox(true).subscribe();
        service.markVisibleAsSeen().subscribe();

        expect(httpMock.put).toHaveBeenCalledWith(
            expect.stringMatching(/\/inbox\/seen$/),
            { notificationIds: ['info-1', 'seen-1'] },
            expect.objectContaining({ params: { productScope: 'smart_agent' } })
        );
        expect(service.unreadCount()).toBe(1);
        expect(service.hubInboxItems().find((i) => i.notificationId === 'info-1')?.receipt?.isUnread).toBe(false);
        expect(service.hubInboxItems().find((i) => i.notificationId === 'seen-1')?.receipt?.isUnread).toBe(false);
        expect(service.hubInboxItems().find((i) => i.notificationId === 'ack-1')?.receipt?.isUnread).toBe(true);
    });
});
