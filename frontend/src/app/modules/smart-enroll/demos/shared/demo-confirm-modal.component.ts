import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild,
    inject,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

export type DemoConfirmModalVariant = 'danger' | 'default';

@Component({
    selector: 'app-demo-confirm-modal',
    standalone: true,
    imports: [NgClass, TranslocoModule],
    templateUrl: './demo-confirm-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoConfirmModalComponent implements OnChanges {
    @Input({ required: true }) open = false;
    @Input({ required: true }) title = '';
    @Input({ required: true }) description = '';
    @Input({ required: true }) confirmLabel = '';
    @Input() cancelLabel = '';
    @Input() variant: DemoConfirmModalVariant = 'danger';

    @Output() confirmed = new EventEmitter<void>();
    @Output() cancelled = new EventEmitter<void>();

    @ViewChild('confirmButton') confirmButton?: ElementRef<HTMLButtonElement>;

    readonly titleId = `demo-confirm-${Math.random().toString(36).slice(2, 9)}`;

    private _transloco = inject(TranslocoService);

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['open']?.currentValue === true) {
            requestAnimationFrame(() => this.confirmButton?.nativeElement.focus());
        }
    }

    get resolvedCancel(): string {
        return this.cancelLabel || this._transloco.translate('smartEnrollDemos.common.cancel');
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.open) {
            this.cancelled.emit();
        }
    }

    onConfirm(): void {
        this.confirmed.emit();
    }

    onCancel(): void {
        this.cancelled.emit();
    }
}
