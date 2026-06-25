import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    getPromoDiscountAmount,
    ProposalPaymentOption,
    roundUnitPrice,
    unitPricesDiffer,
} from './proposal-payment.util';
import { resolveClientDisplayTiers, resolveEffectiveTier, formatProposalCurrency } from './proposal-display.util';
import {
    buildScopeSummary,
    getDocumentSubject,
    getLatestRevisionDate,
    getRecipientCompany,
    getRecipientEmail,
    ProposalScopeSummary,
    showCommercialNotes as shouldShowCommercialNotes,
    showGeneralitiesSection as shouldShowGeneralitiesSection,
    showScopeSection as shouldShowScopeSection,
    showSlaSection as shouldShowSlaSection,
} from './proposal-document.util';
import {
    getActivePaymentOptions,
    formatUsageCellHint,
    getSelectedLineItems as getSortedSelectedLineItems,
} from './proposal-pricing.util';
import { buildRevisionTimeline } from './proposal-revisions.util';
import {
    CounterOfferLineItem,
    ProposalPublicService,
    ProposalTier,
    ProposalUnitPrices,
    PublicProposal,
} from './proposal.service';

const TIERS: ProposalTier[] = ['starter', 'basic', 'plus', 'business', 'enterprise'];

const PROPOSAL_LANGUAGES = ['en', 'es', 'zh', 'ja', 'pt', 'ko'] as const;

const SLA_RESPONSE_ROW_KEYS = ['critical', 'urgent', 'medium', 'normal'] as const;
const SLA_AVAILABILITY_ROW_KEYS = [
    'smartCheck',
    'smartAccessComm',
    'smartAccessBio',
    'smartEnrollComm',
    'smartEnrollBio',
    'smartEnrollDoc',
    'smartEnrollDataApi',
] as const;
const SLA_COMPENSATION_ROW_KEYS = [
    'dataApiHigh',
    'dataApiLow',
    'emailTelHigh',
    'emailTelLow',
    'biometricsHigh',
    'biometricsLow',
    'docScanHigh',
    'docScanLow',
] as const;
const SLA_BILLING_ROW_KEYS = ['codes'] as const;

type ProposalLanguage = (typeof PROPOSAL_LANGUAGES)[number];

@Component({
    selector: 'app-proposal-viewer',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
    templateUrl: './proposal-viewer.component.html',
    styleUrls: ['./proposal-viewer.component.scss'],
})
export class ProposalViewerComponent implements OnInit, OnDestroy {
    proposal: PublicProposal | null = null;
    previewSummary: PublicProposal['pricingSummary'] | null = null;
    previewPaymentOptions: ProposalPaymentOption[] | null = null;
    tiers = TIERS;
    loading = true;
    error: string | null = null;
    responding = false;
    calculating = false;
    showCounterForm = false;
    counterForm: FormGroup;
    counterDraftPrices: Record<string, number> = {};
    activeLang = 'en';
    shareToken = '';

    readonly availableLanguages = PROPOSAL_LANGUAGES;
    readonly slaResponseRowKeys = SLA_RESPONSE_ROW_KEYS;
    readonly slaAvailabilityRowKeys = SLA_AVAILABILITY_ROW_KEYS;
    readonly slaCompensationRowKeys = SLA_COMPENSATION_ROW_KEYS;
    readonly slaBillingRowKeys = SLA_BILLING_ROW_KEYS;

    readonly flagCodes: Record<ProposalLanguage, string> = {
        en: 'us',
        es: 'es',
        zh: 'cn',
        ja: 'jp',
        pt: 'br',
        ko: 'kr',
    };

    readonly languageLabels: Record<ProposalLanguage, string> = {
        en: 'English',
        es: 'Español',
        zh: '中文',
        ja: '日本語',
        pt: 'Português',
        ko: '한국어',
    };

    constructor(
        private readonly _route: ActivatedRoute,
        private readonly _proposalService: ProposalPublicService,
        private readonly _fb: FormBuilder,
        private readonly _translocoService: TranslocoService
    ) {
        this.counterForm = this._fb.group({
            message: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.shareToken = this._route.snapshot.paramMap.get('token') || '';

        if (!this.shareToken) {
            this.error = 'invalid';
            this.loading = false;
            return;
        }

        this._loadProposal(this.shareToken);
    }

    getRecipientName(): string {
        if (!this.proposal) return '';

        if (this.proposal.client?.name) return this.proposal.client.name;

        return this.proposal.prospect?.name || this.proposal.prospect?.email || '';
    }

    get scopeSummary(): ProposalScopeSummary | null {
        if (!this.proposal) return null;

        return buildScopeSummary(this.proposal);
    }

    getCategoryLabel(category: string | undefined): string {
        if (!category?.trim()) return '';

        const key = `proposal.categoryLabels.${category.trim()}`;
        const translated = this._translocoService.translate(key);

        return translated !== key ? translated : category;
    }

    get formattedScopeCategories(): string {
        const categories = this.scopeSummary?.categories || [];

        if (!categories.length) return '—';

        return categories.map((category) => this.getCategoryLabel(category)).join(', ');
    }

    getRecipientCompany(): string {
        return this.proposal ? getRecipientCompany(this.proposal) : '';
    }

    getRecipientEmail(): string {
        return this.proposal ? getRecipientEmail(this.proposal) : '';
    }

    getDocumentSubject(): string {
        if (!this.proposal) return '';

        const fallback = this._translocoService.translate('proposal.title');

        return getDocumentSubject(this.proposal, fallback);
    }

    getCoverMessage(): string {
        if (!this.proposal) return '';

        if (this.proposal.coverMessage?.trim()) {
            return this.proposal.coverMessage.trim();
        }

        const company = getRecipientCompany(this.proposal);

        if (company) {
            return this._translocoService.translate('proposal.cover.defaultIntroGeneric');
        }

        const name = this.getRecipientName();

        if (name) {
            return this._translocoService.translate('proposal.cover.defaultIntro', { company: name });
        }

        return this._translocoService.translate('proposal.cover.defaultIntroGeneric');
    }

    showAddresseeBlock(): boolean {
        return Boolean(this.getRecipientCompany() || this.getRecipientName() || this.getRecipientEmail());
    }

    getRecipientContactLine(): string {
        const name = this.getRecipientName();
        const company = this.getRecipientCompany();
        const email = this.getRecipientEmail();
        const showName = Boolean(name && name !== company);
        const parts: string[] = [];

        if (showName) {
            parts.push(name);
        }

        if (email) {
            parts.push(email);
        }

        return parts.join(' · ');
    }

    getLatestRevisionDateValue(): string {
        if (!this.proposal) return '';

        return getLatestRevisionDate(this.proposal) || this.proposal.createdAt || '';
    }

    showScopeSection(): boolean {
        return this.proposal ? shouldShowScopeSection(this.proposal) : false;
    }

    showSlaSection(): boolean {
        return this.proposal ? shouldShowSlaSection(this.proposal) : false;
    }

    showGeneralitiesSection(): boolean {
        return this.proposal ? shouldShowGeneralitiesSection(this.proposal) : false;
    }

    showCommercialNotes(): boolean {
        return this.proposal ? shouldShowCommercialNotes(this.proposal) : false;
    }

    getTranslationArray(key: string): string[] {
        const value = this._translocoService.translateObject<string[]>(key);

        return Array.isArray(value) ? value : [];
    }

    getSlaResponseRow(key: string): string[] {
        const value = this._translocoService.translateObject<string[]>(`proposal.sla.responseRows.${key}`);

        return Array.isArray(value) ? value : [];
    }

    getSlaAvailabilityRow(key: string): string[] {
        const value = this._translocoService.translateObject<string[]>(`proposal.sla.availabilityRows.${key}`);

        return Array.isArray(value) ? value : [];
    }

    getSlaCompensationRow(key: string): string[] {
        const value = this._translocoService.translateObject<string[]>(`proposal.sla.compensationRows.${key}`);

        return Array.isArray(value) ? value : [];
    }

    getSlaBillingRow(key: string): string[] {
        const value = this._translocoService.translateObject<string[]>(`proposal.sla.billingRows.${key}`);

        return Array.isArray(value) ? value : [];
    }

    getScopeImplementationBody(): string {
        const company = this.getRecipientCompany() || this.getRecipientName() || 'your organization';

        return this._translocoService.translate('proposal.scope.implementationBody', { company });
    }

    downloadPdf(): void {
        if (!this.shareToken) return;

        window.open(this._proposalService.getPdfUrl(this.shareToken, this.activeLang), '_blank');
    }

    printPdf(): void {
        window.print();
    }

    getEffectiveTier(): ProposalTier {
        if (!this.proposal) return 'starter';
        return resolveEffectiveTier(this.proposal);
    }

    getTierLabel(tier: ProposalTier): string {
        return this._translocoService.translate(`proposal.tiers.${tier}`);
    }

    isTierRecommended(tier: ProposalTier): boolean {
        return tier === this.getEffectiveTier();
    }

    get displayTiers(): ProposalTier[] {
        if (!this.proposal?.pricingSummary) {
            return this.tiers;
        }

        return resolveClientDisplayTiers(this.proposal, this.tiers);
    }

    getSelectedLineItems(): PublicProposal['selectedLineItems'] {
        if (!this.proposal) {
            return [];
        }

        return getSortedSelectedLineItems(this.proposal);
    }

    get activePricingSummary(): PublicProposal['pricingSummary'] {
        return this.previewSummary || this.proposal?.pricingSummary || null;
    }

    get activePaymentOptions(): ProposalPaymentOption[] {
        if (this.previewPaymentOptions?.length) {
            return this.previewPaymentOptions;
        }

        if (!this.proposal) return [];

        return getActivePaymentOptions(this.proposal, {
            isCounterOffer: this.isCounterOfferSubmitted(),
        });
    }

    getPromoDiscount(option: ProposalPaymentOption): number {
        return getPromoDiscountAmount(option);
    }

    getSummaryValue(
        tier: ProposalTier,
        field:
            | 'avgUnitPrice'
            | 'planSubscriptionFee'
            | 'planQueryLimit'
            | 'expectedQueries'
            | 'usageCost'
            | 'quotedMonthlyTotal'
            | 'totalMonthlyEstimate'
    ): number | undefined {
        const row = this.activePricingSummary?.[tier];

        if (!row) return undefined;

        if (field === 'quotedMonthlyTotal') {
            return row.quotedMonthlyTotal ?? row.totalMonthlyEstimate;
        }

        return row[field];
    }

    formatPrice(value?: number): string {
        return formatProposalCurrency(value, this.proposal?.language || this.activeLang);
    }

    getUsageCostLabelKey(): string {
        if (this.proposal?.volumeMode === 'perEndpoint') {
            return 'proposal.table.usageCostPerEndpoint';
        }

        return this.proposal?.usagePricingMode === 'combo'
            ? 'proposal.table.usageCostCombo'
            : 'proposal.table.usageCostAverage';
    }

    isPerEndpointVolume(): boolean {
        return this.proposal?.volumeMode === 'perEndpoint';
    }

    getUsageCellHint(tier: ProposalTier): string {
        if (!this.proposal) return '';

        return formatUsageCellHint(
            getSelectedLineItems(this.proposal),
            tier,
            this.proposal.monthlyVolume || 0,
            this.proposal.usagePricingMode === 'combo' ? 'combo' : 'average',
            (price) => this.formatPrice(price) || '',
            this.proposal.volumeMode === 'perEndpoint' ? 'perEndpoint' : 'global'
        );
    }

    formatDateTime(value?: string): string {
        if (!value) return '';

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) return '';

        const locale = this._translocoService.getActiveLang() || 'en';

        return date.toLocaleString(locale);
    }

    hasExpirationDate(): boolean {
        return Boolean(this.proposal?.expiresAt);
    }

    isForeverExpiration(): boolean {
        return this.proposal?.expirationPreset === 'never';
    }

    get revisionTimeline(): Array<{ revisedAt: string; daysSinceCreated: number }> {
        if (!this.proposal) return [];

        return buildRevisionTimeline(this.proposal.createdAt, this.proposal.pricingRevisions);
    }

    showRevisionHistory(): boolean {
        return Boolean(this.proposal?.createdAt || this.revisionTimeline.length);
    }

    setLanguage(lang: string): void {
        void this._applyLanguage(lang, true);
    }

    ngOnDestroy(): void {
        this._pendingLangLoad?.unsubscribe();
    }

    private _pendingLangLoad?: { unsubscribe: () => void };

    getOurOfferPrice(item: PublicProposal['selectedLineItems'][number], tier: ProposalTier): number | undefined {
        return roundUnitPrice(item.unitPrices?.[tier]);
    }

    getOriginalPrice(item: PublicProposal['selectedLineItems'][number], tier: ProposalTier): number | undefined {
        return roundUnitPrice(item.catalogUnitPrices?.[tier] ?? item.unitPrices?.[tier]);
    }

    getClientCounterPrice(item: PublicProposal['selectedLineItems'][number], tier: ProposalTier): number | undefined {
        const lineItems = this.proposal?.counterOffer?.lineItems || [];
        const match = lineItems.find((row) => String(row.appFeature) === String(item.appFeature));

        return roundUnitPrice(match?.unitPrices?.[tier]);
    }

    hasClientCounterPriceChange(item: PublicProposal['selectedLineItems'][number], tier: ProposalTier): boolean {
        const clientPrice = this.getClientCounterPrice(item, tier);

        if (clientPrice == null) return false;

        return unitPricesDiffer(clientPrice, this.getOurOfferPrice(item, tier));
    }

    getDisplayPrice(item: PublicProposal['selectedLineItems'][number], tier: ProposalTier): number | undefined {
        if (this.showCounterForm && this.isTierRecommended(tier)) {
            const draft = this.counterDraftPrices[this._itemKey(item)];

            if (draft != null) return roundUnitPrice(draft);
        }

        if (this.proposal?.status === 'counter_offer' && this.isTierRecommended(tier)) {
            const clientPrice = this.getClientCounterPrice(item, tier);

            if (clientPrice != null && this.hasClientCounterPriceChange(item, tier)) return clientPrice;
        }

        return this.getOurOfferPrice(item, tier);
    }

    canRespond(): boolean {
        if (!this.proposal) return false;

        return !['expired', 'rejected'].includes(this.proposal.status);
    }

    isAccepted(): boolean {
        return this.proposal?.status === 'accepted';
    }

    isCounterOfferSubmitted(): boolean {
        return this.proposal?.status === 'counter_offer';
    }

    openCounterForm(): void {
        this.showCounterForm = true;
        this._seedCounterDraftPrices();
        this._recalculatePreview();
    }

    closeCounterForm(): void {
        this.showCounterForm = false;
        this.previewSummary = null;
        this.previewPaymentOptions = null;
    }

    accept(): void {
        if (!this.shareToken || this.responding) return;

        this.responding = true;

        this._proposalService.respond(this.shareToken, { action: 'accept' }).subscribe({
            next: (res) => {
                if (this.proposal) {
                    this.proposal.status = 'accepted';
                    this.proposal.acceptedAt = String(res.data?.acceptedAt || new Date().toISOString());
                }

                this.showCounterForm = false;
                this.responding = false;
            },
            error: () => {
                this.responding = false;
            },
        });
    }

    revokeAcceptance(): void {
        if (!this.shareToken || this.responding) return;

        this.responding = true;

        this._proposalService.respond(this.shareToken, { action: 'revoke_acceptance' }).subscribe({
            next: () => {
                if (this.proposal) {
                    this.proposal.status = 'viewed';
                    this.proposal.acceptedAt = undefined;
                }

                this.responding = false;
            },
            error: () => {
                this.responding = false;
            },
        });
    }

    onCounterPriceBlur(item: PublicProposal['selectedLineItems'][number], raw: string): void {
        const parsed = Number.parseFloat(raw);

        if (Number.isNaN(parsed) || parsed < 0) return;

        this.counterDraftPrices[this._itemKey(item)] = Math.round(parsed * 100) / 100;
        this._recalculatePreview();
    }

    getCounterInputValue(item: PublicProposal['selectedLineItems'][number]): string {
        const value = this.counterDraftPrices[this._itemKey(item)];

        return value != null ? String(value) : '';
    }

    submitCounterOffer(): void {
        if (this.counterForm.invalid) return;

        if (!this.shareToken) return;

        this.responding = true;
        const tier = this.getEffectiveTier();
        const lineItems = this._buildCounterLineItems(tier);

        this._proposalService
            .respond(this.shareToken, {
                action: 'counter_offer',
                message: this.counterForm.value.message,
                lineItems,
            })
            .subscribe({
                next: (res) => {
                    if (this.proposal) {
                        this.proposal.status = 'counter_offer';
                        this.proposal.acceptedAt = undefined;
                        this.proposal.counterOffer = res.data?.counterOffer as PublicProposal['counterOffer'];
                    }

                    this.showCounterForm = false;
                    this.previewSummary = null;
                    this.previewPaymentOptions = null;
                    this.responding = false;
                },
                error: () => {
                    this.responding = false;
                },
            });
    }

    private _loadProposal(token: string): void {
        this._proposalService.getByToken(token).subscribe({
            next: (res) => {
                this.proposal = res.data;
                const lang = this._resolveInitialLanguage(token, res.data.language);
                void this._applyLanguage(lang).then(() => {
                    this.loading = false;
                });
            },
            error: () => {
                this.error = 'not_found';
                this.loading = false;
            },
        });
    }

    private _applyLanguage(lang: string, persist = false): Promise<void> {
        if (!this._isSupportedLanguage(lang)) {
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            this._pendingLangLoad?.unsubscribe();
            this._pendingLangLoad = this._translocoService.load(lang).subscribe({
                next: () => {
                    this._translocoService.setActiveLang(lang);
                    this.activeLang = lang;

                    if (persist && this.shareToken) {
                        sessionStorage.setItem(this._sessionKey(this.shareToken), lang);
                    }

                    resolve();
                },
                error: () => resolve(),
            });
        });
    }

    private _resolveInitialLanguage(token: string, proposalLanguage?: string): ProposalLanguage {
        const queryLang = this._route.snapshot.queryParamMap.get('lang');

        if (queryLang && this._isSupportedLanguage(queryLang)) {
            return queryLang;
        }

        const sessionLang = sessionStorage.getItem(this._sessionKey(token));

        if (sessionLang && this._isSupportedLanguage(sessionLang)) {
            return sessionLang;
        }

        if (proposalLanguage && this._isSupportedLanguage(proposalLanguage)) {
            return proposalLanguage;
        }

        return 'en';
    }

    private _sessionKey(token: string): string {
        return `proposal.lang.${token}`;
    }

    private _isSupportedLanguage(value?: string | null): value is ProposalLanguage {
        return Boolean(value) && PROPOSAL_LANGUAGES.includes(value as ProposalLanguage);
    }

    private _itemKey(item: PublicProposal['selectedLineItems'][number]): string {
        return String(item.appFeature || item.serviceName || item.url || '');
    }

    private _seedCounterDraftPrices(): void {
        const tier = this.getEffectiveTier();

        this.counterDraftPrices = {};

        for (const item of this.getSelectedLineItems()) {
            const existing = this.getClientCounterPrice(item, tier);
            const fallback = this.getOurOfferPrice(item, tier);

            if (existing != null) {
                this.counterDraftPrices[this._itemKey(item)] = existing;
            } else if (fallback != null) {
                this.counterDraftPrices[this._itemKey(item)] = fallback;
            }
        }
    }

    private _buildCounterLineItems(tier: ProposalTier): CounterOfferLineItem[] {
        return this.getSelectedLineItems()
            .map((item): CounterOfferLineItem | null => {
                const price = this.counterDraftPrices[this._itemKey(item)];

                if (price == null || !item.appFeature) return null;
                if (!unitPricesDiffer(price, this.getOurOfferPrice(item, tier))) return null;

                return {
                    appFeature: String(item.appFeature),
                    unitPrices: { [tier]: price } as ProposalUnitPrices,
                };
            })
            .filter((item): item is CounterOfferLineItem => item !== null);
    }

    private _recalculatePreview(): void {
        if (!this.shareToken || !this.showCounterForm) return;

        const tier = this.getEffectiveTier();
        const lineItems = this._buildCounterLineItems(tier);

        if (!lineItems.length) return;

        this.calculating = true;

        this._proposalService.calculatePreview(this.shareToken, lineItems).subscribe({
            next: (res) => {
                this.previewSummary = res.data.pricingSummary;
                this.previewPaymentOptions = res.data.paymentOptions || null;
                this.calculating = false;
            },
            error: () => {
                this.calculating = false;
            },
        });
    }
}
