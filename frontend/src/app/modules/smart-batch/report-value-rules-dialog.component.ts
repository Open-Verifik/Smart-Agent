import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslocoModule } from '@jsverse/transloco';
import {
    matchValueRule,
    MAX_VALUE_RULES,
    newRuleId,
    REPORT_RULE_BADGES,
    REPORT_RULE_PRESETS,
    ReportRuleBadge,
    ReportRuleOperator,
    ReportRulePresetId,
    ReportValueRule,
    RULE_OPERATOR_GROUPS,
    RULE_OPERATORS_WITHOUT_VALUE,
    ruleBadgeSvg,
    ruleIconMarkup,
    sanitizeValueRules,
} from './report-value-rules.util';
import { ReportIconPickerDialogComponent, ReportIconPickerResult } from './report-icon-picker-dialog.component';

export type ReportRuleScope = 'value' | 'block';

export interface ReportValueRulesDialogData {
    mode: 'value' | 'shape';
    /** Name of the value or shape being configured. */
    title: string;
    rules: ReportValueRule[];
    /** Value mode: offer "only this value" vs "every value in the block". */
    allowScope?: boolean;
    scope?: ReportRuleScope;
    /** Example values from the preview record, used by the test box. */
    samples?: string[];
    /** Shape mode: data the shape color can follow. */
    fieldOptions?: { path: string; label: string; sample?: string }[];
    field?: string;
    /** Icons already placed on the report, offered as quick choices. */
    reportIcons?: ReportRuleIconChoice[];
}

export interface ReportRuleIconChoice {
    name: string;
    svg: string;
    keepColors?: boolean;
}

export interface ReportValueRulesDialogResult {
    rules: ReportValueRule[];
    scope: ReportRuleScope;
    field?: string;
}

@Component({
    selector: 'report-value-rules-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule],
    template: `
        <div class="flex max-h-[88vh] w-[min(46rem,94vw)] flex-col">
            <div class="flex items-start justify-between gap-3 border-b border-stone-200 px-5 py-4 dark:border-gray-800">
                <div class="min-w-0">
                    <h2 class="flex items-center gap-2 text-base font-semibold text-stone-950 dark:text-white">
                        <span class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 font-mono text-[13px] font-bold italic text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">fx</span>
                        {{ 'reportRules.title' | transloco }}
                    </h2>
                    <p class="mt-0.5 truncate text-xs text-stone-500 dark:text-stone-400">{{ data.title }}</p>
                </div>
                <button mat-icon-button type="button" (click)="close()" [attr.aria-label]="'reportRules.cancel' | transloco">
                    <mat-icon>close</mat-icon>
                </button>
            </div>

            <div class="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                <p class="text-xs text-stone-500 dark:text-stone-400">{{ (isShape ? 'reportRules.hintShape' : 'reportRules.hint') | transloco }}</p>

                @if (isShape) {
                    <label class="mt-3 block text-xs font-medium text-stone-700 dark:text-stone-200">{{ 'reportRules.field' | transloco }}</label>
                    <select
                        class="mt-1 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                        [ngModel]="field()"
                        (ngModelChange)="chooseField($event)"
                    >
                        <option [ngValue]="''">{{ 'reportRules.fieldPick' | transloco }}</option>
                        @for (option of data.fieldOptions || []; track option.path) {
                            <option [ngValue]="option.path">{{ option.label }}{{ option.sample ? ' — ' + option.sample : '' }}</option>
                        }
                    </select>
                    @if (!(data.fieldOptions || []).length) {
                        <p class="mt-1 text-xs text-amber-700 dark:text-amber-300">{{ 'reportRules.noFields' | transloco }}</p>
                    }
                }

                @if (data.allowScope && !isShape) {
                    <div class="mt-3 inline-flex rounded-xl border border-stone-200 p-0.5 text-xs dark:border-gray-700">
                        @for (option of scopes; track option) {
                            <button
                                type="button"
                                class="rounded-lg px-3 py-1.5 font-medium"
                                [ngClass]="scope() === option ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900' : 'text-stone-600 dark:text-stone-300'"
                                (click)="scope.set(option)"
                            >
                                {{ 'reportRules.scope.' + option | transloco }}
                            </button>
                        }
                    </div>
                }

                @if (!isShape) {
                    <p class="mt-4 text-[11px] font-semibold uppercase tracking-wider text-stone-400">{{ 'reportRules.presets' | transloco }}</p>
                    <div class="mt-1.5 flex flex-wrap gap-1.5">
                        @for (preset of presets; track preset.id) {
                            <button
                                type="button"
                                class="inline-flex items-center gap-1 rounded-full border border-stone-200 px-2.5 py-1 text-xs text-stone-700 hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-700 dark:text-stone-200 dark:hover:bg-emerald-950/30"
                                [matTooltip]="'reportRules.preset.' + preset.id + 'Hint' | transloco"
                                (click)="applyPreset(preset.id)"
                            >
                                <mat-icon class="!h-4 !w-4 !text-[16px] text-emerald-600">{{ preset.icon }}</mat-icon>
                                {{ 'reportRules.preset.' + preset.id | transloco }}
                            </button>
                        }
                    </div>
                }

                <div class="mt-4 space-y-2.5">
                    @for (rule of rules(); track rule.id; let index = $index; let first = $first; let last = $last) {
                        <div class="rounded-2xl border border-stone-200 p-3 dark:border-gray-700" [class.ring-2]="testMatchId() === rule.id" [class.ring-emerald-400]="testMatchId() === rule.id">
                            <div class="flex flex-wrap items-center gap-2">
                                <span class="rounded-md bg-stone-100 px-1.5 py-0.5 font-mono text-[11px] font-bold text-stone-600 dark:bg-gray-800 dark:text-stone-300">{{ 'reportRules.if' | transloco }}</span>
                                <select
                                    class="min-w-0 flex-1 rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                    [ngModel]="rule.operator"
                                    (ngModelChange)="patch(index, { operator: $event })"
                                >
                                    @for (group of operatorGroups; track group.group) {
                                        <optgroup [label]="'reportRules.group.' + group.group | transloco">
                                            @for (operator of group.operators; track operator) {
                                                <option [ngValue]="operator">{{ 'reportRules.op.' + operator | transloco }}</option>
                                            }
                                        </optgroup>
                                    }
                                </select>
                                @if (needsValue(rule.operator)) {
                                    <input
                                        type="text"
                                        class="min-w-0 flex-[2] rounded-lg border border-stone-200 px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                        [placeholder]="valuePlaceholder(rule.operator) | transloco"
                                        [ngModel]="rule.value || ''"
                                        (ngModelChange)="patch(index, { value: $event })"
                                    />
                                }
                                @if (rule.operator === 'between') {
                                    <span class="text-xs text-stone-500">{{ 'reportRules.and' | transloco }}</span>
                                    <input
                                        type="text"
                                        class="w-24 rounded-lg border border-stone-200 px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                        [ngModel]="rule.value2 || ''"
                                        (ngModelChange)="patch(index, { value2: $event })"
                                    />
                                }
                                <div class="ml-auto flex items-center">
                                    <button mat-icon-button type="button" class="!h-8 !w-8 !p-1" [disabled]="first" (click)="move(index, -1)" [matTooltip]="'reportRules.moveUp' | transloco">
                                        <mat-icon class="!text-[18px]">arrow_upward</mat-icon>
                                    </button>
                                    <button mat-icon-button type="button" class="!h-8 !w-8 !p-1" [disabled]="last" (click)="move(index, 1)" [matTooltip]="'reportRules.moveDown' | transloco">
                                        <mat-icon class="!text-[18px]">arrow_downward</mat-icon>
                                    </button>
                                    <button mat-icon-button type="button" class="!h-8 !w-8 !p-1" (click)="remove(index)" [matTooltip]="'reportRules.remove' | transloco">
                                        <mat-icon class="!text-[18px] text-red-500">delete</mat-icon>
                                    </button>
                                </div>
                            </div>

                            <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                                <span class="rounded-md bg-emerald-50 px-1.5 py-0.5 font-mono text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">{{ 'reportRules.then' | transloco }}</span>
                                <label class="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300">
                                    {{ (isShape ? 'reportRules.shapeColor' : 'reportRules.textColor') | transloco }}
                                    <input type="color" class="h-7 w-9 cursor-pointer rounded border border-stone-200 bg-transparent p-0.5 dark:border-gray-700" [ngModel]="rule.color || '#111827'" (ngModelChange)="patch(index, { color: $event })" />
                                </label>
                                @if (!isShape) {
                                    <label class="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300">
                                        {{ 'reportRules.background' | transloco }}
                                        <input type="color" class="h-7 w-9 cursor-pointer rounded border border-stone-200 bg-transparent p-0.5 dark:border-gray-700" [ngModel]="rule.backgroundColor || '#ffffff'" (ngModelChange)="patch(index, { backgroundColor: $event })" />
                                        @if (rule.backgroundColor) {
                                            <button type="button" class="text-stone-400 hover:text-stone-700" [matTooltip]="'reportRules.noBackground' | transloco" (click)="patch(index, { backgroundColor: undefined })">
                                                <mat-icon class="!h-4 !w-4 !text-[16px]">format_color_reset</mat-icon>
                                            </button>
                                        }
                                    </label>
                                    <button
                                        type="button"
                                        class="h-7 w-7 rounded-lg border text-sm font-bold"
                                        [ngClass]="rule.bold ? 'border-stone-900 bg-stone-900 text-white dark:border-white dark:bg-white dark:text-stone-900' : 'border-stone-200 text-stone-600 dark:border-gray-700 dark:text-stone-300'"
                                        [matTooltip]="'reportRules.bold' | transloco"
                                        (click)="patch(index, { bold: !rule.bold })"
                                    >
                                        B
                                    </button>
                                    <input
                                        type="text"
                                        class="min-w-40 flex-1 rounded-lg border border-stone-200 px-2 py-1.5 text-xs dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                                        [placeholder]="'reportRules.replaceText' | transloco"
                                        [ngModel]="rule.text || ''"
                                        (ngModelChange)="patch(index, { text: $event })"
                                    />
                                }
                            </div>

                            @if (!isShape) {
                                <div class="mt-2 flex flex-wrap items-center gap-1.5">
                                    <span class="text-xs text-stone-600 dark:text-stone-300">{{ 'reportRules.iconLabel' | transloco }}</span>
                                    <div class="inline-flex items-center gap-0.5 rounded-lg border border-stone-200 p-0.5 dark:border-gray-700">
                                        <button
                                            type="button"
                                            class="flex h-6 w-6 items-center justify-center rounded text-[10px] text-stone-400"
                                            [ngClass]="!rule.badge && !rule.iconSvg ? 'bg-stone-100 dark:bg-gray-800' : ''"
                                            [matTooltip]="'reportRules.noIcon' | transloco"
                                            (click)="clearIcon(index)"
                                        >
                                            —
                                        </button>
                                        @for (badge of badges; track badge) {
                                            <button
                                                type="button"
                                                class="flex h-6 w-6 items-center justify-center rounded text-[15px]"
                                                [ngClass]="!rule.iconSvg && rule.badge === badge ? 'bg-stone-100 ring-1 ring-stone-400 dark:bg-gray-800' : ''"
                                                [matTooltip]="'reportRules.icon.' + badge | transloco"
                                                [innerHTML]="badgeHtml(badge, rule.color)"
                                                (click)="pickBadge(index, badge)"
                                            ></button>
                                        }
                                    </div>
                                    @if (reportIcons.length) {
                                        <div class="inline-flex flex-wrap items-center gap-0.5 rounded-lg border border-stone-200 p-0.5 dark:border-gray-700" [matTooltip]="'reportRules.reportIcons' | transloco">
                                            @for (icon of reportIcons; track icon.svg) {
                                                <button
                                                    type="button"
                                                    class="flex h-6 w-6 items-center justify-center rounded text-[15px]"
                                                    [ngClass]="rule.iconSvg === icon.svg ? 'bg-stone-100 ring-1 ring-stone-400 dark:bg-gray-800' : ''"
                                                    [attr.aria-label]="icon.name"
                                                    [innerHTML]="iconHtml({ iconSvg: icon.svg, iconKeepColors: icon.keepColors, color: rule.color })"
                                                    (click)="pickIcon(index, icon)"
                                                ></button>
                                            }
                                        </div>
                                    }
                                    @if (rule.iconSvg && !isReportIcon(rule.iconSvg)) {
                                        <span
                                            class="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 text-[15px] ring-1 ring-stone-400 dark:bg-gray-800"
                                            [matTooltip]="rule.iconName || ''"
                                            [innerHTML]="iconHtml(rule)"
                                        ></span>
                                    }
                                    <button
                                        type="button"
                                        class="inline-flex h-7 items-center gap-1 rounded-lg border border-dashed border-stone-300 px-2 text-xs font-medium text-stone-600 hover:border-emerald-400 hover:text-emerald-700 dark:border-gray-600 dark:text-stone-300"
                                        (click)="browseIcons(index)"
                                    >
                                        <mat-icon class="!h-4 !w-4 !text-[16px]">add_photo_alternate</mat-icon>
                                        {{ 'reportRules.moreIcons' | transloco }}
                                    </button>
                                    @if (rule.iconSvg) {
                                        <label class="inline-flex items-center gap-1 text-[11px] text-stone-500">
                                            <input type="checkbox" [ngModel]="!!rule.iconKeepColors" (ngModelChange)="patch(index, { iconKeepColors: $event || undefined })" />
                                            {{ 'reportRules.keepIconColors' | transloco }}
                                        </label>
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>

                @if (!rules().length) {
                    <p class="mt-3 rounded-2xl border border-dashed border-stone-300 px-4 py-6 text-center text-sm text-stone-500 dark:border-gray-700">
                        {{ 'reportRules.empty' | transloco }}
                    </p>
                }

                <button mat-stroked-button type="button" class="mt-3 rounded-xl" [disabled]="rules().length >= maxRules" (click)="add()">
                    <mat-icon>add</mat-icon>
                    {{ 'reportRules.add' | transloco }}
                </button>

                <div class="mt-5 rounded-2xl bg-stone-50 p-3 dark:bg-gray-900">
                    <p class="text-[11px] font-semibold uppercase tracking-wider text-stone-400">{{ 'reportRules.test' | transloco }}</p>
                    <div class="mt-1.5 flex flex-wrap items-center gap-2">
                        <input
                            type="text"
                            class="min-w-48 flex-1 rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-sm dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                            [placeholder]="'reportRules.testPlaceholder' | transloco"
                            [ngModel]="testValue()"
                            (ngModelChange)="testValue.set($event)"
                        />
                        <span class="text-stone-400">→</span>
                        @if (testRule(); as rule) {
                            @if (isShape) {
                                <span class="inline-block h-6 w-6 rounded-md border border-stone-200" [style.background-color]="rule.color || '#111827'"></span>
                            } @else {
                                <span
                                    class="inline-block text-sm"
                                    [style.color]="rule.color || null"
                                    [style.background-color]="rule.backgroundColor || null"
                                    [style.font-weight]="rule.bold ? 700 : null"
                                    [style.padding]="rule.backgroundColor ? '0.05em 0.5em' : null"
                                    [style.border-radius]="rule.backgroundColor ? '999px' : null"
                                    ><span [innerHTML]="iconHtml(rule)"></span>{{ rule.text || testValue() }}</span
                                >
                            }
                            <span class="text-xs text-stone-500">{{ 'reportRules.testMatch' | transloco: { n: testRuleIndex() + 1 } }}</span>
                        } @else {
                            <span class="text-sm text-stone-700 dark:text-stone-200">{{ testValue() || '—' }}</span>
                            <span class="text-xs text-stone-500">{{ 'reportRules.testNoMatch' | transloco }}</span>
                        }
                    </div>
                    @if (samples.length > 1) {
                        <div class="mt-2 flex flex-wrap gap-1">
                            @for (sample of samples; track sample) {
                                <button type="button" class="max-w-[14rem] truncate rounded-full bg-white px-2 py-0.5 text-[11px] text-stone-600 ring-1 ring-stone-200 hover:ring-stone-400 dark:bg-gray-950 dark:text-stone-300 dark:ring-gray-700" (click)="testValue.set(sample)">
                                    {{ sample }}
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>

            <div class="flex items-center justify-between gap-2 border-t border-stone-200 bg-stone-50 px-5 py-3 dark:border-gray-800 dark:bg-gray-950/60">
                <button mat-button type="button" color="warn" [disabled]="!rules().length" (click)="rules.set([])">{{ 'reportRules.clear' | transloco }}</button>
                <div class="flex items-center gap-2">
                    <button mat-button type="button" (click)="close()">{{ 'reportRules.cancel' | transloco }}</button>
                    <button mat-flat-button color="primary" type="button" class="rounded-xl" [disabled]="isShape && rules().length > 0 && !field()" (click)="save()">
                        {{ 'reportRules.save' | transloco }}
                    </button>
                </div>
            </div>
        </div>
    `,
})
export class ReportValueRulesDialogComponent {
    private _ref = inject(MatDialogRef<ReportValueRulesDialogComponent, ReportValueRulesDialogResult>);
    private _sanitizer = inject(DomSanitizer);
    private _dialog = inject(MatDialog);
    data = inject<ReportValueRulesDialogData>(MAT_DIALOG_DATA);
    readonly reportIcons = (this.data.reportIcons ?? []).slice(0, 16);

    readonly isShape = this.data.mode === 'shape';
    readonly scopes: ReportRuleScope[] = ['value', 'block'];
    readonly presets = REPORT_RULE_PRESETS;
    readonly operatorGroups = RULE_OPERATOR_GROUPS;
    readonly badges = REPORT_RULE_BADGES;
    readonly maxRules = MAX_VALUE_RULES;
    readonly samples = (this.data.samples ?? []).filter(Boolean).slice(0, 8);

    rules = signal<ReportValueRule[]>(sanitizeValueRules(this.data.rules));
    scope = signal<ReportRuleScope>(this.data.scope ?? 'value');
    field = signal<string>(this.data.field ?? '');
    testValue = signal<string>(this._initialSample());

    testRule = computed(() => matchValueRule(this.rules(), this.testValue()));
    testRuleIndex = computed(() => this.rules().findIndex((rule) => rule.id === this.testRule()?.id));
    testMatchId = computed(() => this.testRule()?.id ?? null);

    private _badgeCache = new Map<string, SafeHtml>();

    needsValue(operator: ReportRuleOperator): boolean {
        return !RULE_OPERATORS_WITHOUT_VALUE.has(operator);
    }

    valuePlaceholder(operator: ReportRuleOperator): string {
        if (operator === 'dateWithinDays' || operator === 'dateOlderThanDays') return 'reportRules.placeholder.days';
        if (['gt', 'gte', 'lt', 'lte', 'between'].includes(operator)) return 'reportRules.placeholder.number';
        return 'reportRules.placeholder.words';
    }

    badgeHtml(badge: ReportRuleBadge | undefined, color: string | undefined): SafeHtml | null {
        return this._trusted(ruleBadgeSvg(badge, color || '#374151'));
    }

    iconHtml(rule: Pick<ReportValueRule, 'badge' | 'color' | 'iconSvg' | 'iconKeepColors'>): SafeHtml | null {
        return this._trusted(ruleIconMarkup({ ...rule, color: rule.color || '#374151' }));
    }

    isReportIcon(svg: string): boolean {
        return this.reportIcons.some((icon) => icon.svg === svg);
    }

    clearIcon(index: number): void {
        this.patch(index, { badge: undefined, iconSvg: undefined, iconName: undefined, iconKeepColors: undefined });
    }

    pickBadge(index: number, badge: ReportRuleBadge): void {
        this.patch(index, { badge, iconSvg: undefined, iconName: undefined, iconKeepColors: undefined });
    }

    pickIcon(index: number, icon: ReportRuleIconChoice): void {
        this.patch(index, { badge: undefined, iconSvg: icon.svg, iconName: icon.name, iconKeepColors: icon.keepColors || undefined });
    }

    /** Library, Iconify search or an uploaded / pasted SVG, through the report's icon picker. */
    browseIcons(index: number): void {
        const current = this.rules()[index];
        this._dialog
            .open<ReportIconPickerDialogComponent, { keepColors: boolean }, ReportIconPickerResult>(ReportIconPickerDialogComponent, {
                data: { keepColors: Boolean(current?.iconKeepColors) },
                autoFocus: false,
                maxWidth: '96vw',
            })
            .afterClosed()
            .subscribe((choice) => {
                if (!choice?.svg) return;
                this.pickIcon(index, { name: choice.name, svg: choice.svg, keepColors: choice.keepColors });
            });
    }

    private _trusted(markup: string): SafeHtml | null {
        if (!markup) return null;
        let safe = this._badgeCache.get(markup);
        if (!safe) {
            if (this._badgeCache.size > 200) this._badgeCache.clear();
            safe = this._sanitizer.bypassSecurityTrustHtml(markup);
            this._badgeCache.set(markup, safe);
        }
        return safe;
    }

    chooseField(path: string): void {
        this.field.set(path);
        const sample = this.data.fieldOptions?.find((option) => option.path === path)?.sample;
        if (sample) this.testValue.set(sample);
    }

    applyPreset(id: ReportRulePresetId): void {
        const preset = this.presets.find((item) => item.id === id);
        if (!preset) return;
        this.rules.update((list) => [...list, ...preset.build()].slice(0, MAX_VALUE_RULES));
    }

    add(): void {
        this.rules.update((list) => [
            ...list,
            { id: newRuleId(), operator: 'contains', value: '', color: '#b91c1c', bold: true },
        ]);
    }

    patch(index: number, change: Partial<ReportValueRule>): void {
        this.rules.update((list) =>
            list.map((rule, position) => {
                if (position !== index) return rule;
                const next: ReportValueRule = { ...rule, ...change };
                for (const key of Object.keys(change) as (keyof ReportValueRule)[]) {
                    if (change[key] === undefined || change[key] === '') delete next[key];
                }
                if (change.operator && !this.needsValue(change.operator)) delete next.value;
                if (change.operator && change.operator !== 'between') delete next.value2;
                return next;
            })
        );
    }

    move(index: number, delta: number): void {
        this.rules.update((list) => {
            const next = [...list];
            const target = index + delta;
            if (target < 0 || target >= next.length) return list;
            [next[index], next[target]] = [next[target], next[index]];
            return next;
        });
    }

    remove(index: number): void {
        this.rules.update((list) => list.filter((_, position) => position !== index));
    }

    save(): void {
        this._ref.close({
            rules: sanitizeValueRules(this.rules()),
            scope: this.scope(),
            ...(this.isShape ? { field: this.field() } : {}),
        });
    }

    close(): void {
        this._ref.close();
    }

    private _initialSample(): string {
        if (this.data.mode === 'shape') {
            return this.data.fieldOptions?.find((option) => option.path === this.data.field)?.sample ?? '';
        }
        return (this.data.samples ?? []).find(Boolean) ?? '';
    }
}
