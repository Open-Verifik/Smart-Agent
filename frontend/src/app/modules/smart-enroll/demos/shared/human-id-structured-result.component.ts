import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { formatDisplayValue, isPlainObject, truncateMiddle } from './human-id-result.util';
import { DemoResultActionsComponent } from './demo-result-actions.component';
import { DemoCreditsUsageComponent } from './demo-credits-usage.component';

const IPFS_DETAIL_KEYS = [
    'IpfsHash',
    'url',
    'PinSize',
    'Timestamp',
    'MimeType',
    'Name',
    'name',
    'pinned',
    'ID',
    'GroupId',
    'NumberOfFiles',
    'web3',
] as const;

@Component({
    selector: 'app-human-id-structured-result',
    standalone: true,
    imports: [JsonPipe, TranslocoModule, DemoResultActionsComponent, DemoCreditsUsageComponent],
    templateUrl: './human-id-structured-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanIdStructuredResultComponent {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Input({ required: true }) successTitle = '';
    @Input() successDescription = '';
    @Input() zelfQrPngDataUrl: string | null = null;
    @Input() createAnotherLabel = '';

    @Output() createAnother = new EventEmitter<void>();
    @Output() backToDemos = new EventEmitter<void>();

    copiedField: string | null = null;
    showFullZelfProof = false;
    qrLoadFailed = false;

    get parsed() {
        if (!this.result) return null;
        const innerData = isPlainObject(this.result['data']) ? (this.result['data'] as Record<string, unknown>) : null;
        const zelfProof = typeof innerData?.['zelfProof'] === 'string' ? innerData['zelfProof'] : '';
        const ipfs = isPlainObject(innerData?.['ipfs']) ? (innerData['ipfs'] as Record<string, unknown>) : null;
        return { zelfProof, ipfs };
    }

    get ipfsGatewayUrl(): string {
        const url = this.parsed?.ipfs?.['url'];
        return typeof url === 'string' ? url : '';
    }

    get qrSrc(): string {
        if (!this.ipfsGatewayUrl || this.qrLoadFailed) return '';
        return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.ipfsGatewayUrl)}`;
    }

    formatValue(v: unknown, yes: string, no: string): string {
        return formatDisplayValue(v, yes, no);
    }

    truncateMiddle(s: string): string {
        return truncateMiddle(s);
    }

    ipfsKeys(): string[] {
        if (!this.parsed?.ipfs) return [];
        return IPFS_DETAIL_KEYS.filter((k) => this.parsed!.ipfs![k] !== undefined);
    }

    async copyText(text: string, fieldId: string): Promise<void> {
        try {
            await navigator.clipboard.writeText(text);
            this.copiedField = fieldId;
            setTimeout(() => (this.copiedField = null), 2000);
        } catch {
            this.copiedField = null;
        }
    }

    onQrError(): void {
        this.qrLoadFailed = true;
    }
}
