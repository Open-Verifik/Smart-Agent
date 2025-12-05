export interface Chat {
    id?: string;
    contactId?: string;
    contact?: any;
    unreadCount?: number;
    muted?: boolean;
    lastMessage?: string;
    lastMessageAt?: string;
}
