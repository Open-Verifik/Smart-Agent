import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { NgClass } from '@angular/common';

type Mode = 'json' | 'rows';
type Row = { id: string; key: string; value: string };

const newRow = (): Row => ({
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    key: '',
    value: '',
});

const recordToRows = (rec: Record<string, string>): Row[] => {
    const entries = Object.entries(rec);
    if (entries.length === 0) return [newRow()];
    return entries.map(([key, value]) => ({
        id: crypto.randomUUID?.() ?? `${key}-${Math.random()}`,
        key,
        value,
    }));
};

const rowsToRecord = (rows: Row[]): Record<string, string> => {
    const out: Record<string, string> = {};
    for (const r of rows) {
        const k = r.key.trim();
        if (!k) continue;
        out[k] = r.value;
    }
    return out;
};

const parseStringRecord = (
    text: string
): { ok: true; data: Record<string, string> } | { ok: false; error: string } => {
    try {
        const parsed = JSON.parse(text) as unknown;
        if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
            return { ok: false, error: 'Must be a JSON object (not an array).' };
        }
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
            if (typeof v === 'string') out[k] = v;
            else if (v === null || v === undefined) out[k] = '';
            else if (typeof v === 'object') out[k] = JSON.stringify(v);
            else out[k] = String(v);
        }
        return { ok: true, data: out };
    } catch {
        return { ok: false, error: 'Invalid JSON.' };
    }
};

const prettyStringify = (rec: Record<string, string>): string => JSON.stringify(rec, null, 2);

@Component({
    selector: 'app-human-id-json-key-value-field',
    standalone: true,
    imports: [FormsModule, TranslocoModule, NgClass],
    templateUrl: './human-id-json-key-value-field.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HumanIdJsonKeyValueFieldComponent implements OnChanges {
    @Input({ required: true }) label = '';
    @Input() required = false;
    @Input() hint = '';
    @Input() value: Record<string, string> = {};

    @Output() valueChange = new EventEmitter<Record<string, string>>();

    mode: Mode = 'rows';
    jsonDraft = '';
    rows: Row[] = [];
    jsonError: string | null = null;

    private _cdr = inject(ChangeDetectorRef);
    private _lastSerialized = '';

    ngOnChanges(): void {
        const s = JSON.stringify(this.value);
        if (s === this._lastSerialized) return;
        this._lastSerialized = s;
        this.jsonDraft = prettyStringify(this.value);
        this.rows = recordToRows(this.value);
        this.jsonError = null;
    }

    /** Call before submit so JSON mode drafts are parsed and synced. */
    commitJsonIfNeeded(): Record<string, string> | null {
        if (this.mode === 'rows') {
            const rec = rowsToRecord(this.rows);
            this._lastSerialized = JSON.stringify(rec);
            this.valueChange.emit(rec);
            return rec;
        }
        const result = parseStringRecord(this.jsonDraft);
        if (!result.ok) {
            this.jsonError = (result as { ok: false; error: string }).error;
            this._cdr.markForCheck();
            return null;
        }
        this.jsonError = null;
        this._lastSerialized = JSON.stringify(result.data);
        this.valueChange.emit(result.data);
        this.jsonDraft = prettyStringify(result.data);
        this._cdr.markForCheck();
        return result.data;
    }

    switchToRows(): void {
        if (this.mode === 'rows') return;
        const result = parseStringRecord(this.jsonDraft);
        if (!result.ok) {
            this.jsonError = (result as { ok: false; error: string }).error;
            this._cdr.markForCheck();
            return;
        }
        this.jsonError = null;
        this._lastSerialized = JSON.stringify(result.data);
        this.valueChange.emit(result.data);
        this.rows = recordToRows(result.data);
        this.mode = 'rows';
        this._cdr.markForCheck();
    }

    switchToJson(): void {
        if (this.mode === 'json') return;
        const rec = rowsToRecord(this.rows);
        this.valueChange.emit(rec);
        this._lastSerialized = JSON.stringify(rec);
        this.jsonDraft = prettyStringify(rec);
        this.jsonError = null;
        this.mode = 'json';
        this._cdr.markForCheck();
    }

    applyJson(): void {
        const result = parseStringRecord(this.jsonDraft);
        if (!result.ok) {
            this.jsonError = (result as { ok: false; error: string }).error;
        } else {
            this.jsonError = null;
            this._lastSerialized = JSON.stringify(result.data);
            this.valueChange.emit(result.data);
            this.jsonDraft = prettyStringify(result.data);
        }
        this._cdr.markForCheck();
    }

    onRowChange(id: string, field: 'key' | 'value', next: string): void {
        this.rows = this.rows.map((r) => (r.id === id ? { ...r, [field]: next } : r));
        const rec = rowsToRecord(this.rows);
        this._lastSerialized = JSON.stringify(rec);
        this.valueChange.emit(rec);
    }

    addRow(): void {
        this.rows = [...this.rows, newRow()];
    }

    removeRow(id: string): void {
        const nextRows = this.rows.filter((r) => r.id !== id);
        this.rows = nextRows.length ? nextRows : [newRow()];
        const rec = rowsToRecord(this.rows);
        this._lastSerialized = JSON.stringify(rec);
        this.valueChange.emit(rec);
    }
}
