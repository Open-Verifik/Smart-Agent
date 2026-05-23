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
import type { PersonListItem } from '../services/biometrics-demo.types';
import { truncateId } from './demo-result.utils';

const matchesSearch = (item: PersonListItem, q: string): boolean => {
    if (!q.trim()) return true;
    const s = q.trim().toLowerCase();
    const hay = [item.name, item._id].join(' ').toLowerCase();
    return hay.includes(s);
};

@Component({
    selector: 'app-person-single-select',
    standalone: true,
    imports: [FormsModule, NgClass, TranslocoModule],
    templateUrl: './person-single-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonSingleSelectComponent {
    @Input({ required: true }) items: PersonListItem[] = [];
    @Input() selectedId: string | null = null;
    @Input() disabled = false;
    @Input() loading = false;
    @Input() error: string | null = null;
    @Input() labelId = '';

    @Output() selectedIdChange = new EventEmitter<string>();

    @ViewChild('rootRef') rootRef?: ElementRef<HTMLDivElement>;
    @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

    readonly listId = `person-single-${Math.random().toString(36).slice(2, 9)}`;
    readonly open = signal(false);
    readonly search = signal('');

    private _transloco = inject(TranslocoService);

    readonly byId = computed(() => {
        const m = new Map<string, PersonListItem>();
        for (const it of this.items) m.set(it._id, it);
        return m;
    });

    readonly filtered = computed(() => this.items.filter((it) => matchesSearch(it, this.search())));

    truncateId = truncateId;

    get summary(): string {
        const selected = this.selectedId ? this.byId().get(this.selectedId) : undefined;
        if (selected) return selected.name || truncateId(selected._id);
        return this._transloco.translate('smartEnrollDemos.common.selectPerson');
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

    pick(id: string): void {
        this.selectedIdChange.emit(id);
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
