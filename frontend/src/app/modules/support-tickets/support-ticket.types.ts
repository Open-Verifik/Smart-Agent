/**
 * Customer-facing support ticket shapes (aligned with verifik-backend + admin panel).
 */

import type { Attachment } from 'app/core/services/attachment.service';

export type SupportTicketCategory =
    | 'billing'
    | 'integration'
    | 'smartCheck'
    | 'smartScan'
    | 'smartEnroll'
    | 'smartAccess'
    | 'other';

export type SupportTicketStatus = 'pending' | 'progress' | 'resolved' | 'cancelled';

export type SupportTicketThreadParticipant = {
    _id: string;
    name?: string;
    email?: string;
};

export interface SupportTicketThread {
    _id: string;
    client: string | SupportTicketThreadParticipant;
    superAdmin?: string | SupportTicketThreadParticipant;
    supportTicket: string;
    message: string;
    /** ObjectIds when unpopulated; full documents when `threads.attachments` is populated. */
    attachments?: (string | Attachment)[];
    seenAt?: string;
    createdAt: string;
    updatedAt: string;
}

export interface SupportTicket {
    _id: string;
    client: string | { _id: string; name?: string; email?: string };
    category: SupportTicketCategory;
    assignee?: string | { _id: string; name?: string };
    number: number;
    status: SupportTicketStatus;
    threads: SupportTicketThread[];
    title: string;
    subject?: string;
    api?: string;
    createdAt: string;
    updatedAt: string;
}

export interface SupportTicketFilters {
    search?: string;
    status?: SupportTicketStatus | SupportTicketStatus[] | '';
    category?: SupportTicketCategory | '';
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export interface SupportTicketListResponse {
    data: SupportTicket[];
    total: number;
    limit: number;
    page: number;
    pages: number;
    counts?: { all: number; open: number; closed: number };
}

export interface SupportTicketResponse {
    data: SupportTicket;
}

export interface SupportTicketFormData {
    title: string;
    category: SupportTicketCategory;
    threads: { message: string; attachments?: string[] }[];
    subject?: string;
    api?: string;
}

export interface SupportTicketQueryParams {
    page?: number;
    limit?: number;
    sort?: string;
    countByStatus?: boolean;
    populates?: string | string[];
    [key: string]: unknown;
}
