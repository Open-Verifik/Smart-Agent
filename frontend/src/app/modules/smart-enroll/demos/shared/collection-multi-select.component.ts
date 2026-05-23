import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import type { FaceCollectionListItem } from '../services/biometrics-demo.types';
import { truncateCode } from './demo-result.utils';

@Component({
    selector: 'app-collection-multi-select',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule],
    templateUrl: './collection-multi-select.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionMultiSelectComponent {
    @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

    @Input({ required: true }) items: FaceCollectionListItem[] = [];
    @Input({ required: true }) selectedIds: string[] = [];
    @Input() disabled = false;
    @Input() loading = false;
    @Input() labelId?: string;
    @Input() emptySlot?: string;

    @Output() selectedIdsChange = new EventEmitter<string[]>();

    open = false;
    search = '';
    listId = `col-multi-${Math.random().toString(36).slice(2, 9)}`;

    truncateCode = truncateCode;

    get filtered(): FaceCollectionListItem[] {
        const q = this.search.trim().toLowerCase();
        if (!q) return this.items;
        return this.items.filter((item) =>
            [item.name, item.code, item.description ?? ''].join(' ').toLowerCase().includes(q)
        );
    }

    get byId(): Map<string, FaceCollectionListItem> {
        return new Map(this.items.map((item) => [item._id, item]));
    }

    toggleOpen(): void {
        if (this.disabled || this.loading) return;
        this.open = !this.open;
        if (this.open) {
            setTimeout(() => this.searchInput?.nativeElement.focus(), 0);
        } else {
            this.search = '';
        }
    }

    close(): void {
        this.open = false;
        this.search = '';
    }

    toggle(id: string): void {
        const next = this.selectedIds.includes(id)
            ? this.selectedIds.filter((x) => x !== id)
            : [...this.selectedIds, id];
        this.selectedIdsChange.emit(next);
    }

    remove(id: string): void {
        this.selectedIdsChange.emit(this.selectedIds.filter((x) => x !== id));
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.open) this.close();
    }

    @HostListener('document:mousedown', ['$event'])
    onDocClick(event: MouseEvent): void {
        if (!this.open) return;
        const target = event.target as Node;
        if (!(event.currentTarget as Document).body.contains(target)) return;
    }
}
