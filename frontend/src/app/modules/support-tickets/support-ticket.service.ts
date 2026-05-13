import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
    SupportTicketFilters,
    SupportTicketFormData,
    SupportTicketListResponse,
    SupportTicketQueryParams,
    SupportTicketResponse,
    SupportTicketStatus,
    SupportTicketThread,
} from './support-ticket.types';

@Injectable({ providedIn: 'root' })
export class SupportTicketService {
    private readonly _http = inject(HttpWrapperService);

    private get _base(): string {
        return `${environment.apiUrl}/v2/support-tickets`;
    }

    getSupportTickets(filters: SupportTicketFilters = {}): Observable<SupportTicketListResponse> {
        const params = this._buildQueryParams(filters);

        return this._http.sendRequest('get', this._base, params).pipe(
            map((response: SupportTicketListResponse) => response),
            catchError((err) => throwError(() => err)),
        );
    }

    /**
     * Backend MongoORM runs thread population only when `populates` is present on the query
     * (see verifik-backend `parseRelations`).
     */
    getSupportTicket(id: string): Observable<SupportTicketResponse> {
        const params = {
            populates: ['threads.attachments', 'threads.client', 'threads.superAdmin'],
            populateSelects: JSON.stringify({
                'threads.client': '_id name avatar email',
                'threads.superAdmin': '_id name email',
            }),
        };
        return this._http.sendRequest('get', `${this._base}/${id}`, params).pipe(
            map((response: SupportTicketResponse) => response),
            catchError((err) => throwError(() => err)),
        );
    }

    createSupportTicket(data: SupportTicketFormData): Observable<SupportTicketResponse> {
        return this._http.sendRequest('post', `${this._base}/insert`, data).pipe(
            map((response: SupportTicketResponse) => response),
            catchError((err) => throwError(() => err)),
        );
    }

    createThread(
        ticketId: string,
        body: { message: string; attachments?: string[] },
    ): Observable<{ data: SupportTicketThread }> {
        return this._http
            .sendRequest('post', `${this._base}/${ticketId}/thread`, body)
            .pipe(catchError((err) => throwError(() => err)));
    }

    markThreadsAsSeen(threadIds: string[]): Observable<unknown> {
        return this._http
            .sendRequest('put', `${this._base}/threads/seen`, { threadIds })
            .pipe(catchError((err) => throwError(() => err)));
    }

    private _buildQueryParams(filters: SupportTicketFilters): SupportTicketQueryParams {
        const params: SupportTicketQueryParams = {};

        if (filters.search?.trim()) {
            const searchTerm = filters.search.trim();
            if (!isNaN(Number(searchTerm))) {
                params['?like_number'] = searchTerm;
            } else {
                params['?like_title'] = searchTerm;
                params['?like_subject'] = searchTerm;
            }
        }

        if (filters.status) {
            if (Array.isArray(filters.status) && filters.status.length > 0) {
                params['?in_status'] = filters.status as SupportTicketStatus[];
            } else if (typeof filters.status === 'string' && filters.status.trim()) {
                params['?where_status'] = filters.status as SupportTicketStatus;
            }
        }

        if (filters.category?.trim()) {
            params['?where_category'] = filters.category.trim();
        }

        if (filters.page && filters.page > 0) params.page = filters.page;
        if (filters.limit && filters.limit > 0) params.limit = filters.limit;

        if (filters.sortBy?.trim()) {
            const sortDirection = filters.sortOrder === 'asc' ? '' : '-';
            params.sort = `${sortDirection}${filters.sortBy.trim()}`;
        }

        params.countByStatus = true;
        params.populates = ['client', 'assignee'];

        return params;
    }
}
