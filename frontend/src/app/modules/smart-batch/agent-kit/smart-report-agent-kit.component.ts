import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    QueryList,
    ViewChildren,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { StaffPermissionService } from 'app/core/permissions';
import {
    SmartReportKitContext,
    buildSmartReportAiPrompt,
    buildSmartReportCurlSnippet,
    buildSmartReportJsSnippet,
    buildSmartReportMcpSnippet,
    buildSmartReportPythonSnippet,
    buildSmartReportWebhookSnippet,
} from './smart-report-kit-builders.util';

export type SmartReportKitTab = 'prompt' | 'mcp' | 'webhook' | 'curl' | 'js' | 'python';

const TAB_ORDER: SmartReportKitTab[] = ['prompt', 'mcp', 'webhook', 'curl', 'js', 'python'];

@Component({
    selector: 'smart-report-agent-kit',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, TranslocoModule],
    templateUrl: './smart-report-agent-kit.component.html',
    styleUrls: ['./smart-report-agent-kit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartReportAgentKitComponent {
    private static _nextInstanceId = 0;
    private readonly _permService = inject(StaffPermissionService);

    readonly instanceId = `sr-kit-${++SmartReportAgentKitComponent._nextInstanceId}`;
    context = input.required<SmartReportKitContext>();
    compact = input(false);

    @ViewChildren('tabButton') tabButtons?: QueryList<ElementRef<HTMLButtonElement>>;

    activeTab = signal<SmartReportKitTab>('prompt');
    copiedKey = signal<string | null>(null);

    readonly tabs: Array<{ id: SmartReportKitTab; labelKey?: string; label?: string }> = [
        { id: 'prompt', labelKey: 'smartReportKit.tabPrompt' },
        { id: 'mcp', labelKey: 'smartReportKit.tabMcp' },
        { id: 'webhook', labelKey: 'smartReportKit.tabWebhook' },
        { id: 'curl', labelKey: 'smartReportKit.tabCurl' },
        { id: 'js', label: 'JavaScript' },
        { id: 'python', label: 'Python' },
    ];

    effectiveContext = computed<SmartReportKitContext>(() => {
        const ctx = this.context();
        if (ctx.costCenter) return ctx;
        const teamDefault = this._permService.team()?.defaultCostCenter;
        const derivedCeco =
            typeof teamDefault === 'object' && teamDefault
                ? teamDefault.code || null
                : typeof teamDefault === 'string' && teamDefault
                  ? teamDefault
                  : null;
        return derivedCeco ? { ...ctx, costCenter: derivedCeco } : ctx;
    });

    activeTabDomId = computed(() => `${this.instanceId}-tab-${this.activeTab()}`);

    activeSnippet = computed(() => {
        const kitContext = this.effectiveContext();
        switch (this.activeTab()) {
            case 'prompt':
                return buildSmartReportAiPrompt(kitContext);
            case 'mcp':
                return buildSmartReportMcpSnippet(kitContext);
            case 'webhook':
                return buildSmartReportWebhookSnippet(kitContext);
            case 'curl':
                return buildSmartReportCurlSnippet(kitContext);
            case 'js':
                return buildSmartReportJsSnippet(kitContext);
            case 'python':
                return buildSmartReportPythonSnippet(kitContext);
        }
    });

    docsBaseUrl = computed(() =>
        (this.context().docsBaseUrl || 'https://docs.verifik.co').replace(/\/+$/, '')
    );

    selectTab(tab: SmartReportKitTab, element?: HTMLElement): void {
        this.activeTab.set(tab);
        element?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }

    onTabKeydown(event: KeyboardEvent, currentIndex: number): void {
        let nextIndex: number | null = null;
        if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % TAB_ORDER.length;
        else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + TAB_ORDER.length) % TAB_ORDER.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = TAB_ORDER.length - 1;

        if (nextIndex === null) return;
        event.preventDefault();

        const nextTab = TAB_ORDER[nextIndex];
        this.activeTab.set(nextTab);
        const tabButtonElement = this.tabButtons?.get(nextIndex)?.nativeElement;
        if (tabButtonElement) {
            tabButtonElement.focus();
            tabButtonElement.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
    }

    async copyValue(key: string, value: string | null | undefined): Promise<void> {
        if (!value || typeof navigator === 'undefined' || !navigator.clipboard) return;
        try {
            await navigator.clipboard.writeText(value);
            this.copiedKey.set(key);
            setTimeout(() => {
                if (this.copiedKey() === key) {
                    this.copiedKey.set(null);
                }
            }, 2000);
        } catch {
            // Clipboard permission denied — ignore gracefully.
        }
    }
}
