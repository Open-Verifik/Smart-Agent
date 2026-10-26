import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FleetChannel } from '../smart-fleet.service';

/** Tinted tile behind a channel icon when the button is not selected. */
export function fleetChannelTone(channel: FleetChannel): string {
    const tones: Record<FleetChannel, string> = {
        email: 'bg-sky-100 text-sky-700 dark:bg-sky-400/25 dark:text-sky-100',
        webhook: 'bg-violet-100 text-violet-700 dark:bg-violet-400/25 dark:text-violet-100',
        inApp: 'bg-amber-100 text-amber-800 dark:bg-amber-400/25 dark:text-amber-100',
        sms: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-400/25 dark:text-indigo-100',
        whatsapp: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-400/25 dark:text-emerald-100',
    };

    return tones[channel];
}

@Component({
    selector: 'fleet-channel-icon',
    standalone: true,
    imports: [CommonModule],
    template: `
        <svg
            *ngIf="channel === 'email'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
        </svg>
        <svg
            *ngIf="channel === 'webhook'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <circle cx="6" cy="12" r="2.25" />
            <circle cx="18" cy="6" r="2.25" />
            <circle cx="18" cy="18" r="2.25" />
            <path d="M8.2 12H12a4 4 0 0 0 4-4V8.2M12 12a4 4 0 0 1 4 4v1.8" />
        </svg>
        <svg
            *ngIf="channel === 'inApp'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <path d="M6 16h12l-1.1-2a6 6 0 1 0-9.8 0L6 16z" />
            <path d="M10 16a2 2 0 0 0 4 0" />
        </svg>
        <svg
            *ngIf="channel === 'sms'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.75"
            aria-hidden="true"
        >
            <path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        </svg>
        <svg
            *ngIf="channel === 'whatsapp'"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path
                d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 1 0 20.5 3.5zM12 20.4a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.1.8.8-3-.2-.3A9.1 9.1 0 1 1 12 20.4zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.2-.7.9-.9 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.4c.1-.2.1-.3 0-.5s-.6-1.4-.8-2-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c-.1-.2-.3-.2-.6-.3z"
            />
        </svg>
    `,
})
export class FleetChannelIconComponent {
    @Input({ required: true }) channel!: FleetChannel;
}
