import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ViewChild,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import type { FaceCollectionListItem } from '../services/biometrics-demo.types';
import { truncateCode } from './demo-result.utils';

const matchesSearch = (item: FaceCollectionListItem, q: string): boolean => {
    if (!q.trim()) return true;
    const s = q.trim().toLowerCase();
    const hay = [item.name, item.code, item.description ?? ''].join(' ').toLowerCase();
    return hay.includes(s);
};

@Component({
    selector: 'app-collection-single-select',
    standalone: true,
    imports: [FormsModule, NgClass, TranslocoModule],
    templateUrl: './collection-single-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionSingleSelectComponent {
    @Input({ required: true }) items: FaceCollectionListItem[] = [];
    @Input() selectedCode: string | null = null;
    @Input() disabled = false;
    @Input() loading = false;
    @Input() error: string | null = null;
    @Input() labelId = '';

    @Output() selectedCodeChange = new EventEmitter<string>();

    @ViewChild('rootRef') rootRef?: ElementRef<HTMLDivElement>;
    @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

    readonly listId = `collection-single-${Math.random().toString(36).slice(2, 9)}`;
    readonly open = signal(false);
    readonly search = signal('');

    private _transloco = inject(TranslocoService);

    readonly byCode = computed(() => {
        const m = new Map<string, FaceCollectionListItem>();
        for (const it of this.items) m.set(it.code, it);
        return m;
    });

    readonly filtered = computed(() => this.items.filter((it) => matchesSearch(it, this.search())));

    truncateCode = truncateCode;

    get summary(): string {
        const selected = this.selectedCode ? this.byCode().get(this.selectedCode) : undefined;
        if (selected) return selected.name || truncateCode(selected.code);
        return this._transloco.translate('smartEnrollDemos.common.selectCollection');
    }

    toggleOpen(): void {
        if (this.disabled || this.loading) return;
        const next = !this.open();
        this.open.set(next);
        if (next) {
            requestAnimationFrame(() => this.searchInput?.nativeElement.focus());
        } else {
            this.search.set('');
        }
    }

    close(): void {
        this.open.set(false);
        this.search.set('');
    }

    pick(code: string): void {
        this.selectedCodeChange.emit(code);
        this.close();
    }

    @HostListener('document:mousedown', ['$event'])
    onDocumentMouseDown(event: MouseEvent): void {
        if (!this.open()) return;
        if (!this.rootRef?.nativeElement.contains(event.target as Node)) {
            this.close();
        }
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.open()) this.close();
    }
}
