import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe,
  TranslocoService
} from "./chunk-R5W3A6HI.js";
import {
  ActivatedRoute
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-PNPEHISK.js";
import "./chunk-F5M2C4EZ.js";

// src/app/modules/proposal/proposal-payment.util.ts
var roundUnitPrice = (value) => {
  if (value == null || Number.isNaN(value))
    return void 0;
  return Math.round(value * 100) / 100;
};
var unitPricesDiffer = (left, right) => {
  const a = roundUnitPrice(left);
  const b = roundUnitPrice(right);
  if (a == null && b == null)
    return false;
  if (a == null || b == null)
    return true;
  return a !== b;
};
var PAYMENT_OPTION_CATALOG = [
  { type: "monthly", monthsInPeriod: 1, monthsCharged: 1 },
  { type: "quarterly", monthsInPeriod: 3, monthsCharged: 3 },
  { type: "semi_annual", monthsInPeriod: 6, monthsCharged: 5 },
  { type: "annual", monthsInPeriod: 12, monthsCharged: 10 }
];
var getPromoDiscountAmount = (option) => {
  const freeMonths = (option.monthsInPeriod || 0) - (option.monthsCharged || 0);
  if (freeMonths <= 0 || !option.monthsCharged)
    return 0;
  const monthlyRate = option.totalAmount / option.monthsCharged;
  return Math.round(monthlyRate * freeMonths * 100) / 100;
};
var buildPaymentOptionsFromMonthlyTotal = (monthlyTotal, _monthlyVolume, enabledTypes = PAYMENT_OPTION_CATALOG.map((option) => option.type)) => {
  const total = Math.max(0, Number(monthlyTotal) || 0);
  return PAYMENT_OPTION_CATALOG.filter((option) => enabledTypes.includes(option.type)).map((option) => ({
    type: option.type,
    enabled: true,
    monthsInPeriod: option.monthsInPeriod,
    monthsCharged: option.monthsCharged,
    totalAmount: Math.round(total * option.monthsCharged * 100) / 100
  }));
};

// src/app/modules/proposal/proposal-display.util.ts
var ROMANO_PRICE_LANGUAGES = /* @__PURE__ */ new Set(["es", "pt"]);
var resolveProposalPriceLocale = (language) => {
  if (language && ROMANO_PRICE_LANGUAGES.has(language)) {
    return "es-CO";
  }
  return "en-US";
};
var formatProposalCurrency = (value, language) => {
  if (value == null)
    return "\u2014";
  const formatted = new Intl.NumberFormat(resolveProposalPriceLocale(language), {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
  return `$${formatted}`;
};
var PROPOSAL_TIERS = [
  "starter",
  "basic",
  "plus",
  "business",
  "enterprise"
];
var resolveAutoViableTiers = (proposal, tiers = PROPOSAL_TIERS) => {
  const volume = proposal.monthlyVolume || 0;
  const viable = tiers.filter((tier) => {
    const limit = proposal.pricingSummary?.[tier]?.planQueryLimit;
    return limit != null && volume <= limit;
  });
  return viable.length ? viable : tiers;
};
var resolveClientDisplayTiers = (proposal, tiers = PROPOSAL_TIERS) => {
  const configured = (proposal.visibleTiers || []).filter((tier) => tiers.includes(tier));
  if (configured.length) {
    return tiers.filter((tier) => configured.includes(tier));
  }
  return resolveAutoViableTiers(proposal, tiers);
};
var resolveEffectiveTier = (proposal, tiers = PROPOSAL_TIERS) => {
  const preferred = proposal.salesOverrideTier || proposal.recommendedTier || "starter";
  const clientTiers = resolveClientDisplayTiers(proposal, tiers);
  if (clientTiers.includes(preferred)) {
    return preferred;
  }
  return clientTiers[0] || preferred;
};

// src/app/modules/proposal/proposal-pricing.util.ts
var resolveUsageUnitPrice = (prices, mode = "average") => {
  if (!prices.length) {
    return { usageUnitPrice: 0, avgUnitPrice: 0 };
  }
  const sum = prices.reduce((total, price) => total + price, 0);
  const avgUnitPrice = Math.round(sum / prices.length * 100) / 100;
  const usageUnitPrice = mode === "combo" ? Math.round(sum * 100) / 100 : avgUnitPrice;
  return { usageUnitPrice, avgUnitPrice };
};
var getEndpointVolume = (item) => {
  return Math.max(0, Number(item.monthlyVolume) || 0);
};
var formatPerEndpointUsageBreakdown = (items, tier, formatPrice) => {
  const parts = (items || []).filter((item) => item.selected !== false).map((item) => {
    const volume = getEndpointVolume(item);
    const price = roundUnitPrice(item.unitPrices?.[tier]);
    if (!volume || price == null)
      return null;
    return `(${volume.toLocaleString()} \xD7 ${formatPrice(price)})`;
  }).filter((part) => Boolean(part));
  if (!parts.length)
    return "";
  const total = (items || []).filter((item) => item.selected !== false).reduce((sum, item) => {
    const volume = getEndpointVolume(item);
    const price = roundUnitPrice(item.unitPrices?.[tier]) ?? 0;
    return sum + volume * price;
  }, 0);
  return `${parts.join(" + ")} = ${formatPrice(Math.round(total * 100) / 100)}`;
};
var getSelectedUnitPricesForTier = (items, tier) => {
  return (items || []).filter((item) => item.selected !== false).map((item) => roundUnitPrice(item.unitPrices?.[tier])).filter((price) => price != null && price > 0);
};
var formatUsageRateBreakdown = (prices, mode, formatPrice) => {
  if (!prices.length)
    return "";
  const { usageUnitPrice } = resolveUsageUnitPrice(prices, mode);
  const formattedPrices = prices.map(formatPrice);
  if (mode === "combo") {
    return `${formattedPrices.join(" + ")} = ${formatPrice(usageUnitPrice)}`;
  }
  return `(${formattedPrices.join(" + ")}) \xF7 ${prices.length} = ${formatPrice(usageUnitPrice)}`;
};
var formatUsageCellHint = (items, tier, volume, mode, formatPrice, volumeMode = "global") => {
  if (volumeMode === "perEndpoint") {
    return formatPerEndpointUsageBreakdown(items, tier, formatPrice);
  }
  const prices = getSelectedUnitPricesForTier(items, tier);
  if (!prices.length || !volume)
    return "";
  const breakdown = formatUsageRateBreakdown(prices, mode, formatPrice);
  return `${breakdown} \xD7 ${volume.toLocaleString()}`;
};
var DEFAULT_PAYMENT_TYPES = [
  "monthly",
  "quarterly",
  "semi_annual",
  "annual"
];
var getEffectiveTier = (proposal) => {
  return resolveEffectiveTier(proposal);
};
var sortLineItemsByOrder = (items) => {
  return [...items || []].sort((a, b) => {
    const orderA = Number(a.order);
    const orderB = Number(b.order);
    const hasOrderA = Number.isFinite(orderA);
    const hasOrderB = Number.isFinite(orderB);
    if (hasOrderA && hasOrderB && orderA !== orderB) {
      return orderA - orderB;
    }
    if (hasOrderA !== hasOrderB) {
      return hasOrderA ? -1 : 1;
    }
    return String(a.serviceName || "").localeCompare(String(b.serviceName || ""));
  });
};
var getSelectedLineItems = (proposal) => {
  const selected = (proposal.selectedLineItems || []).filter((item) => item.selected !== false);
  return sortLineItemsByOrder(selected);
};
var hasStoredPaymentTotals = (options) => {
  return Boolean(options?.some((option) => (option.totalAmount ?? 0) > 0));
};
var getOurOfferPaymentOptions = (proposal) => {
  if (hasStoredPaymentTotals(proposal.paymentOptions)) {
    return proposal.paymentOptions || [];
  }
  const tier = getEffectiveTier(proposal);
  const row = proposal.pricingSummary?.[tier];
  const monthlyTotal = row?.quotedMonthlyTotal ?? row?.totalMonthlyEstimate;
  if (monthlyTotal == null)
    return proposal.paymentOptions || [];
  return buildPaymentOptionsFromMonthlyTotal(monthlyTotal, proposal.monthlyVolume, proposal.enabledPaymentTypes || DEFAULT_PAYMENT_TYPES);
};
var hasCounterLineItemPrices = (proposal, tier) => {
  const lineItems = proposal.counterOffer?.lineItems || [];
  return lineItems.some((item) => {
    const clientPrice = roundUnitPrice(item.unitPrices?.[tier]);
    if (clientPrice == null)
      return false;
    const ourItem = getSelectedLineItems(proposal).find((row) => String(row.appFeature) === String(item.appFeature));
    const ourPrice = roundUnitPrice(ourItem?.unitPrices?.[tier]);
    return unitPricesDiffer(clientPrice, ourPrice);
  });
};
var computeCounterTierSummary = (proposal, tier) => {
  if (!hasCounterLineItemPrices(proposal, tier))
    return null;
  const volume = proposal.counterOffer?.monthlyVolume ?? proposal.monthlyVolume ?? 0;
  const planRow = proposal.pricingSummary?.[tier];
  if (!planRow || !volume)
    return null;
  const counterByFeature = new Map((proposal.counterOffer?.lineItems || []).map((item) => [
    String(item.appFeature),
    item.unitPrices
  ]));
  const prices = getSelectedLineItems(proposal).map((item) => {
    const clientPrices = counterByFeature.get(String(item.appFeature));
    const clientPrice = roundUnitPrice(clientPrices?.[tier]);
    if (clientPrice != null && clientPrice > 0)
      return clientPrice;
    return roundUnitPrice(item.unitPrices?.[tier]);
  }).filter((price) => price != null && price > 0);
  if (!prices.length)
    return null;
  const volumeMode = proposal.volumeMode === "perEndpoint" ? "perEndpoint" : "global";
  const mode = proposal.usagePricingMode === "combo" ? "combo" : "average";
  if (volumeMode === "perEndpoint") {
    const selected = getSelectedLineItems(proposal);
    let usageCost2 = 0;
    for (const item of selected) {
      const counterPrices = counterByFeature.get(String(item.appFeature));
      const clientPrice = roundUnitPrice(counterPrices?.[tier]);
      const price = clientPrice != null && clientPrice > 0 ? clientPrice : roundUnitPrice(item.unitPrices?.[tier]);
      if (price != null && price > 0) {
        usageCost2 += getEndpointVolume(item) * price;
      }
    }
    usageCost2 = Math.round(usageCost2 * 100) / 100;
    const usageUnitPrice2 = volume > 0 ? Math.round(usageCost2 / volume * 100) / 100 : 0;
    const avgUnitPrice2 = usageUnitPrice2;
    const quotedMonthlyTotal2 = Math.round(Math.max(planRow.planSubscriptionFee ?? 0, usageCost2) * 100) / 100;
    return {
      avgUnitPrice: avgUnitPrice2,
      usageUnitPrice: usageUnitPrice2,
      planSubscriptionFee: planRow.planSubscriptionFee,
      planQueryLimit: planRow.planQueryLimit,
      expectedQueries: volume,
      usageCost: usageCost2,
      quotedMonthlyTotal: quotedMonthlyTotal2,
      totalMonthlyEstimate: quotedMonthlyTotal2
    };
  }
  const { usageUnitPrice, avgUnitPrice } = resolveUsageUnitPrice(prices, mode);
  const usageCost = Math.round(volume * usageUnitPrice * 100) / 100;
  const quotedMonthlyTotal = Math.round(Math.max(planRow.planSubscriptionFee ?? 0, usageCost) * 100) / 100;
  return {
    avgUnitPrice,
    usageUnitPrice,
    planSubscriptionFee: planRow.planSubscriptionFee,
    planQueryLimit: planRow.planQueryLimit,
    expectedQueries: volume,
    usageCost,
    quotedMonthlyTotal,
    totalMonthlyEstimate: quotedMonthlyTotal
  };
};
var resolveCounterTierSummary = (proposal, tier) => {
  const stored = proposal.counterOffer?.pricingSummary?.[tier];
  const storedTotal = stored?.quotedMonthlyTotal ?? stored?.totalMonthlyEstimate;
  if (storedTotal != null && storedTotal > 0) {
    return stored;
  }
  const computed = computeCounterTierSummary(proposal, tier);
  if (computed)
    return computed;
  return stored ?? null;
};
var getCounterMonthlyTotal = (proposal) => {
  const tier = getEffectiveTier(proposal);
  const row = resolveCounterTierSummary(proposal, tier);
  if (!row)
    return void 0;
  return row.quotedMonthlyTotal ?? row.totalMonthlyEstimate;
};
var getCounterPaymentOptions = (proposal) => {
  const tier = getEffectiveTier(proposal);
  const monthlyTotal = getCounterMonthlyTotal(proposal);
  const monthlyVolume = proposal.counterOffer?.monthlyVolume ?? proposal.monthlyVolume;
  const enabledTypes = proposal.enabledPaymentTypes || DEFAULT_PAYMENT_TYPES;
  const stored = proposal.counterOffer?.paymentOptions;
  if (monthlyTotal != null && monthlyTotal > 0) {
    const computed = buildPaymentOptionsFromMonthlyTotal(monthlyTotal, monthlyVolume, enabledTypes);
    if (hasStoredPaymentTotals(stored)) {
      return stored || computed;
    }
    return computed;
  }
  if (stored?.length)
    return stored;
  const ourOfferTotal = proposal.pricingSummary?.[tier]?.quotedMonthlyTotal ?? proposal.pricingSummary?.[tier]?.totalMonthlyEstimate;
  if (ourOfferTotal != null && ourOfferTotal > 0) {
    return buildPaymentOptionsFromMonthlyTotal(ourOfferTotal, monthlyVolume, enabledTypes);
  }
  return getOurOfferPaymentOptions(proposal);
};
var getActivePaymentOptions = (proposal, options) => {
  if (options?.isCounterOffer) {
    return getCounterPaymentOptions(proposal);
  }
  return getOurOfferPaymentOptions(proposal);
};

// src/app/modules/proposal/proposal-document.util.ts
var buildScopeSummary = (proposal) => {
  const items = getSelectedLineItems(proposal);
  return {
    countries: [...new Set(items.map((item) => item.country?.trim()).filter(Boolean))].sort(),
    endpointCount: items.length,
    categories: [...new Set(items.map((item) => item.category?.trim()).filter(Boolean))].sort()
  };
};
var getRecipientCompany = (proposal) => {
  return proposal.prospect?.company?.trim() || "";
};
var getRecipientEmail = (proposal) => {
  return proposal.prospect?.email?.trim() || proposal.client?.email?.trim() || "";
};
var getDocumentSubject = (proposal, fallbackTitle) => {
  return proposal.subject?.trim() || fallbackTitle;
};
var showScopeSection = (proposal) => {
  return proposal.includeScopeSection !== false;
};
var showSlaSection = (proposal) => {
  return proposal.includeSlaSection !== false;
};
var showGeneralitiesSection = (proposal) => {
  return proposal.includeGeneralitiesSection !== false;
};
var showCommercialNotes = (proposal) => {
  return proposal.includeCommercialNotes !== false;
};
var getLatestRevisionDate = (proposal) => {
  const revisions = proposal.pricingRevisions || [];
  if (revisions.length) {
    return revisions[revisions.length - 1].revisedAt;
  }
  return proposal.createdAt;
};

// src/app/modules/proposal/proposal-revisions.util.ts
var diffDaysSince = (from, to) => {
  const start = new Date(from);
  const end = new Date(to);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()))
    return 0;
  return Math.max(0, Math.floor((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)));
};
var buildRevisionTimeline = (createdAt, revisions = []) => {
  if (!createdAt)
    return [];
  return revisions.filter((revision) => revision.revisedAt).map((revision) => ({
    revisedAt: revision.revisedAt,
    daysSinceCreated: diffDaysSince(createdAt, revision.revisedAt)
  }));
};

// src/app/modules/proposal/proposal.service.ts
var ProposalPublicService = class _ProposalPublicService {
  constructor(_http) {
    this._http = _http;
  }
  getByToken(token) {
    return this._http.get(`${environment.apiUrl}/v2/public/proposals/${token}`);
  }
  calculatePreview(token, lineItems) {
    return this._http.post(`${environment.apiUrl}/v2/public/proposals/${token}/calculate`, { lineItems });
  }
  respond(token, body) {
    return this._http.post(`${environment.apiUrl}/v2/public/proposals/${token}/respond`, body);
  }
  getPdfUrl(token, lang) {
    return `${environment.apiUrl}/v2/public/proposals/${token}/pdf?lang=${encodeURIComponent(lang)}`;
  }
  static {
    this.\u0275fac = function ProposalPublicService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProposalPublicService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProposalPublicService, factory: _ProposalPublicService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProposalPublicService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/proposal/proposal-viewer.component.ts
var _c0 = (a0) => ({ date: a0 });
var _c1 = (a0, a1) => ({ days: a0, date: a1 });
var _c2 = (a0) => ({ "dark:bg-zinc-800": a0 });
var _c3 = (a0) => ({ "dark:bg-zinc-900/50": a0 });
var _c4 = (a0) => ({ volume: a0 });
var _c5 = (a0) => ({ tier: a0 });
var _c6 = (a0) => ({ count: a0 });
var _c7 = (a0) => ({ amount: a0 });
function ProposalViewerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "proposal.loading"));
  }
}
function ProposalViewerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "proposal.error"));
  }
}
function ProposalViewerComponent_ng_container_4_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", lang_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.languageLabels[lang_r3], " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_37_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "proposal.cover.version"), ": ", ctx_r1.proposal.documentVersion, " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_37_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "proposal.cover.revised"), ": ", ctx_r1.formatDateTime(ctx_r1.getLatestRevisionDateValue()), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "proposal.cover.subject"), ": ", ctx_r1.getDocumentSubject(), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_div_37_span_1_Template, 3, 4, "span", 5)(2, ProposalViewerComponent_ng_container_4_div_37_span_2_Template, 3, 4, "span", 5)(3, ProposalViewerComponent_ng_container_4_div_37_span_3_Template, 3, 4, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.proposal.documentVersion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getLatestRevisionDateValue());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getDocumentSubject());
  }
}
function ProposalViewerComponent_ng_container_4_section_38_div_1_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRecipientCompany(), " ");
  }
}
function ProposalViewerComponent_ng_container_4_section_38_div_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getRecipientContactLine(), " ");
  }
}
function ProposalViewerComponent_ng_container_4_section_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_section_38_div_1_p_4_Template, 2, 1, "p", 67)(5, ProposalViewerComponent_ng_container_4_section_38_div_1_p_5_Template, 2, 1, "p", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "proposal.preparedFor"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getRecipientCompany());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getRecipientContactLine());
  }
}
function ProposalViewerComponent_ng_container_4_section_38_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mt-5", ctx_r1.showAddresseeBlock());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCoverMessage(), " ");
  }
}
function ProposalViewerComponent_ng_container_4_section_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 63);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_section_38_div_1_Template, 6, 5, "div", 64)(2, ProposalViewerComponent_ng_container_4_section_38_p_2_Template, 2, 3, "p", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddresseeBlock());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getCoverMessage());
  }
}
function ProposalViewerComponent_ng_container_4_section_39_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "proposal.revisions.createdOn", \u0275\u0275pureFunction1(4, _c0, ctx_r1.formatDateTime(ctx_r1.proposal.createdAt))), " ");
  }
}
function ProposalViewerComponent_ng_container_4_section_39_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const revision_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "proposal.revisions.updatedDaysLater", \u0275\u0275pureFunction2(4, _c1, revision_r4.daysSinceCreated, ctx_r1.formatDateTime(revision_r4.revisedAt))), " ");
  }
}
function ProposalViewerComponent_ng_container_4_section_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 72)(1, "h2", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 73);
    \u0275\u0275template(5, ProposalViewerComponent_ng_container_4_section_39_li_5_Template, 3, 6, "li", 5)(6, ProposalViewerComponent_ng_container_4_section_39_li_6_Template, 3, 7, "li", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "proposal.revisions.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.proposal.createdAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.revisionTimeline);
  }
}
function ProposalViewerComponent_ng_container_4_div_40_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "proposal.banners.acceptedOn", \u0275\u0275pureFunction1(4, _c0, ctx_r1.formatDateTime(ctx_r1.proposal.acceptedAt))));
  }
}
function ProposalViewerComponent_ng_container_4_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_div_40_span_4_Template, 3, 6, "span", 5);
    \u0275\u0275text(5, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 77);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "proposal.banners.acceptedTitle"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.proposal.acceptedAt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "proposal.banners.acceptedHint"));
  }
}
function ProposalViewerComponent_ng_container_4_div_41_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "proposal.banners.counterOn", \u0275\u0275pureFunction1(4, _c0, ctx_r1.formatDateTime(ctx_r1.proposal.counterOffer == null ? null : ctx_r1.proposal.counterOffer.submittedAt))));
  }
}
function ProposalViewerComponent_ng_container_4_div_41_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.proposal.counterOffer == null ? null : ctx_r1.proposal.counterOffer.message);
  }
}
function ProposalViewerComponent_ng_container_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_div_41_span_4_Template, 3, 6, "span", 5);
    \u0275\u0275text(5, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ProposalViewerComponent_ng_container_4_div_41_p_6_Template, 2, 1, "p", 79);
    \u0275\u0275elementStart(7, "p", 80);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "proposal.banners.counterTitle"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.proposal.counterOffer == null ? null : ctx_r1.proposal.counterOffer.submittedAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.proposal.counterOffer == null ? null : ctx_r1.proposal.counterOffer.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "proposal.banners.counterHint"));
  }
}
function ProposalViewerComponent_ng_container_4_section_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 82)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 83);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 84);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 85)(11, "div")(12, "p", 23);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 86);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "p", 23);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 86);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "p", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 86);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 87)(31, "h4", 88);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 89);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "a", 90);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scope_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 12, "proposal.sections.scope"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 14, "proposal.scope.intro"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 16, "proposal.scope.sampleTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "proposal.scope.countries"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(scope_r5.countries.join(", ") || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 20, "proposal.scope.endpoints"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 22, scope_r5.endpointCount));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, "proposal.scope.categories"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formattedScopeCategories);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 26, "proposal.scope.implementationTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getScopeImplementationBody());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 28, "proposal.scope.docsLink"), " \u2192 ");
  }
}
function ProposalViewerComponent_ng_container_4_section_43_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const channel_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(channel_r6);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const severity_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(severity_r7);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_li_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const definition_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(definition_r8);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(header_r9);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_39_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r10);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_section_43_tr_39_td_1_Template, 2, 1, "td", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowKey_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSlaResponseRow(rowKey_r11));
  }
}
function ProposalViewerComponent_ng_container_4_section_43_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(header_r12);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_52_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r13);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_section_43_tr_52_td_1_Template, 2, 1, "td", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowKey_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSlaAvailabilityRow(rowKey_r14));
  }
}
function ProposalViewerComponent_ng_container_4_section_43_th_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(header_r15);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_65_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r16);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_section_43_tr_65_td_1_Template, 2, 1, "td", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowKey_r17 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSlaCompensationRow(rowKey_r17));
  }
}
function ProposalViewerComponent_ng_container_4_section_43_th_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const header_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(header_r18);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_85_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r19);
  }
}
function ProposalViewerComponent_ng_container_4_section_43_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_section_43_tr_85_td_1_Template, 2, 1, "td", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rowKey_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getSlaBillingRow(rowKey_r20));
  }
}
function ProposalViewerComponent_ng_container_4_section_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 91)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 92)(5, "div")(6, "h3", 93);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 94);
    \u0275\u0275template(10, ProposalViewerComponent_ng_container_4_section_43_li_10_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "h3", 93);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 95);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "h3", 93);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ul", 94);
    \u0275\u0275template(23, ProposalViewerComponent_ng_container_4_section_43_li_23_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "h3", 93);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 96);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 94);
    \u0275\u0275template(32, ProposalViewerComponent_ng_container_4_section_43_li_32_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 97)(34, "table", 98)(35, "thead", 99)(36, "tr");
    \u0275\u0275template(37, ProposalViewerComponent_ng_container_4_section_43_th_37_Template, 2, 1, "th", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "tbody");
    \u0275\u0275template(39, ProposalViewerComponent_ng_container_4_section_43_tr_39_Template, 2, 1, "tr", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "p", 101);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 102)(44, "h3", 93);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "table", 98)(48, "thead", 99)(49, "tr");
    \u0275\u0275template(50, ProposalViewerComponent_ng_container_4_section_43_th_50_Template, 2, 1, "th", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "tbody");
    \u0275\u0275template(52, ProposalViewerComponent_ng_container_4_section_43_tr_52_Template, 2, 1, "tr", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 102)(54, "h3", 93);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 103);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "table", 104)(61, "thead", 99)(62, "tr");
    \u0275\u0275template(63, ProposalViewerComponent_ng_container_4_section_43_th_63_Template, 2, 1, "th", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "tbody");
    \u0275\u0275template(65, ProposalViewerComponent_ng_container_4_section_43_tr_65_Template, 2, 1, "tr", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "p", 101);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div")(70, "h3", 93);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 103);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 105)(77, "h4", 106);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "table", 98)(81, "thead", 99)(82, "tr");
    \u0275\u0275template(83, ProposalViewerComponent_ng_container_4_section_43_th_83_Template, 2, 1, "th", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "tbody");
    \u0275\u0275template(85, ProposalViewerComponent_ng_container_4_section_43_tr_85_Template, 2, 1, "tr", 49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div")(87, "h3", 93);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 95);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div")(94, "h3", 93);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "p", 95);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "transloco");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 30, "proposal.sections.sla"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 32, "proposal.sla.channelsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.channels"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 34, "proposal.sla.hoursTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 36, "proposal.sla.hours"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 38, "proposal.sla.severityTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.severities"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 40, "proposal.sla.responseTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 42, "proposal.sla.definitionsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.definitions"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.responseHeaders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.slaResponseRowKeys);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 44, "proposal.sla.responseNote"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 46, "proposal.sla.availabilityTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.availabilityHeaders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.slaAvailabilityRowKeys);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 48, "proposal.sla.compensationTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 50, "proposal.sla.compensationIntro"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.compensationHeaders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.slaCompensationRowKeys);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 52, "proposal.sla.compensationDisclaimer"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 54, "proposal.sla.billingTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 56, "proposal.sla.billingIntro"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 58, "proposal.sla.billingTableTitle"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.sla.billingHeaders"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.slaBillingRowKeys);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 60, "proposal.sla.maintenanceTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 62, "proposal.sla.maintenance"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 64, "proposal.sla.adaptationsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 66, "proposal.sla.adaptations"));
  }
}
function ProposalViewerComponent_ng_container_4_th_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "proposal.table.endpointVolume"));
  }
}
function ProposalViewerComponent_ng_container_4_th_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 109);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tier_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-stone-200", ctx_r1.isTierRecommended(tier_r21));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c2, ctx_r1.isTierRecommended(tier_r21)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getTierLabel(tier_r21), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 112);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r22.url);
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 113);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, item_r22.monthlyVolume), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 115)(2, "span", 76);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 23)(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 116)(12, "span", 115);
    \u0275\u0275text(13, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 117);
    \u0275\u0275listener("blur", function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_container_2_Template_input_blur_14_listener($event) {
      \u0275\u0275restoreView(_r23);
      const item_r22 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCounterPriceBlur(item_r22, $event.target.value));
    })("keydown.enter", function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_container_2_Template_input_keydown_enter_14_listener($event) {
      \u0275\u0275restoreView(_r23);
      const item_r22 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCounterPriceBlur(item_r22, $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 118);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r24 = \u0275\u0275nextContext().$implicit;
    const item_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 6, "proposal.table.original"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.getOriginalPrice(item_r22, tier_r24)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 8, "proposal.table.ourOffer"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.getOurOfferPrice(item_r22, tier_r24)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.getCounterInputValue(item_r22));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "proposal.table.yourPrice"));
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 119);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 120);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 121);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r24 = \u0275\u0275nextContext(2).$implicit;
    const item_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.getClientCounterPrice(item_r22, tier_r24)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(5, 5, "proposal.table.original"), ": ", ctx_r1.formatPrice(ctx_r1.getOriginalPrice(item_r22, tier_r24)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(8, 7, "proposal.table.ourOffer"), ": ", ctx_r1.formatPrice(ctx_r1.getOurOfferPrice(item_r22, tier_r24)), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 122);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tier_r24 = \u0275\u0275nextContext(2).$implicit;
    const item_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.getDisplayPrice(item_r22, tier_r24)));
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_ng_container_0_Template, 9, 9, "ng-container", 114)(1, ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_ng_template_1_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const simplePrice_r25 = \u0275\u0275reference(2);
    const tier_r24 = \u0275\u0275nextContext().$implicit;
    const item_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.isCounterOfferSubmitted() && ctx_r1.isTierRecommended(tier_r24) && ctx_r1.hasClientCounterPriceChange(item_r22, tier_r24))("ngIfElse", simplePrice_r25);
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 109);
    \u0275\u0275template(2, ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_container_2_Template, 18, 12, "ng-container", 114)(3, ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_ng_template_3_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r24 = ctx.$implicit;
    const readOnlyCell_r26 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-50", ctx_r1.isTierRecommended(tier_r24));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c3, ctx_r1.isTierRecommended(tier_r24)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCounterForm && ctx_r1.isTierRecommended(tier_r24))("ngIfElse", readOnlyCell_r26);
  }
}
function ProposalViewerComponent_ng_container_4_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108)(1, "td", 46)(2, "p", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_tr_73_p_4_Template, 2, 1, "p", 110);
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ProposalViewerComponent_ng_container_4_tr_73_td_7_Template, 3, 3, "td", 111)(8, ProposalViewerComponent_ng_container_4_tr_73_ng_container_8_Template, 5, 7, "ng-container", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r22.serviceName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r22.url);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.getCategoryLabel(item_r22.category), " \xB7 ", item_r22.country, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPerEndpointVolume());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayTiers);
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_tr_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 127);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r27 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.isTierRecommended(tier_r27));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.getSummaryValue(tier_r27, "planSubscriptionFee")), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 124);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_tfoot_74_tr_1_ng_container_4_Template, 3, 3, "ng-container", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.isPerEndpointVolume() ? 2 : 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "proposal.table.planMinimum"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.displayTiers);
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tier_r28 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getUsageCellHint(tier_r28), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 127)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_span_4_Template, 2, 1, "span", 128)(5, ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_span_5_Template, 2, 0, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r28 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-100", ctx_r1.isTierRecommended(tier_r28));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.getSummaryValue(tier_r28, "usageCost")));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getUsageCellHint(tier_r28));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.calculating && ctx_r1.isTierRecommended(tier_r28));
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 132);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tier_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-stone-200", ctx_r1.isTierRecommended(tier_r29));
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c2, ctx_r1.isTierRecommended(tier_r29)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(ctx_r1.getSummaryValue(tier_r29, "quotedMonthlyTotal")), " ");
  }
}
function ProposalViewerComponent_ng_container_4_tfoot_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot", 123);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_tfoot_74_tr_1_Template, 5, 5, "tr", 5);
    \u0275\u0275elementStart(2, "tr")(3, "td", 124)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 125);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_11_Template, 6, 5, "ng-container", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "tr")(13, "td", 126)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 125);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, ProposalViewerComponent_ng_container_4_tfoot_74_ng_container_20_Template, 3, 6, "ng-container", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.proposal.includePlanMinimum !== false);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r1.isPerEndpointVolume() ? 2 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, ctx_r1.getUsageCostLabelKey()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 13, "proposal.table.usageCostVolumeHint", \u0275\u0275pureFunction1(20, _c4, \u0275\u0275pipeBind1(9, 11, ctx_r1.proposal.monthlyVolume) || "")));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.displayTiers);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("colspan", ctx_r1.isPerEndpointVolume() ? 2 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 16, "proposal.table.quotedTotal"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "proposal.table.quotedTotalHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.displayTiers);
  }
}
function ProposalViewerComponent_ng_container_4_div_75_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const discount_r30 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "proposal.paymentOptions.promoOff", \u0275\u0275pureFunction1(4, _c7, ctx_r1.formatPrice(discount_r30))), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_75_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 108)(1, "td", 137);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 138);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 139);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 140);
    \u0275\u0275template(10, ProposalViewerComponent_ng_container_4_div_75_tr_25_span_10_Template, 3, 6, "span", 141);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "proposal.paymentOptions.types." + option_r31.type), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "proposal.paymentOptions.months", \u0275\u0275pureFunction1(9, _c6, option_r31.monthsInPeriod)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatPrice(option_r31.totalAmount), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getPromoDiscount(option_r31));
  }
}
function ProposalViewerComponent_ng_container_4_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134)(2, "h3", 88);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 135);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 43)(9, "table", 44)(10, "thead", 136)(11, "tr")(12, "th", 46);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 46);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 46);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 46);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, ProposalViewerComponent_ng_container_4_div_75_tr_25_Template, 11, 11, "tr", 49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "proposal.paymentOptions.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, "proposal.paymentOptions.basedOnMonthly", \u0275\u0275pureFunction1(20, _c5, ctx_r1.getTierLabel(ctx_r1.getEffectiveTier()))), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "proposal.paymentOptions.plan"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "proposal.paymentOptions.period"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "proposal.paymentOptions.total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "proposal.paymentOptions.notes"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.activePaymentOptions);
  }
}
function ProposalViewerComponent_ng_container_4_div_76_li_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(note_r32);
  }
}
function ProposalViewerComponent_ng_container_4_div_76_li_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(note_r33);
  }
}
function ProposalViewerComponent_ng_container_4_div_76_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r34);
  }
}
function ProposalViewerComponent_ng_container_4_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143)(1, "div")(2, "h3", 88);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 135);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul", 144);
    \u0275\u0275template(9, ProposalViewerComponent_ng_container_4_div_76_li_9_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "h3", 88);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 135);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ul", 144);
    \u0275\u0275template(18, ProposalViewerComponent_ng_container_4_div_76_li_18_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "h3", 88);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul", 144);
    \u0275\u0275template(24, ProposalViewerComponent_ng_container_4_div_76_li_24_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 8, "proposal.commercial.monthlyOptionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 10, "proposal.commercial.monthlySubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.commercial.monthlyNotes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "proposal.commercial.annualOptionTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "proposal.commercial.annualSubtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.commercial.annualNotes"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "proposal.commercial.additionalsTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.commercial.additionals"));
  }
}
function ProposalViewerComponent_ng_container_4_section_77_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r35);
  }
}
function ProposalViewerComponent_ng_container_4_section_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 145)(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 146);
    \u0275\u0275template(5, ProposalViewerComponent_ng_container_4_section_77_li_5_Template, 2, 1, "li", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "proposal.sections.generalities"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.getTranslationArray("proposal.generalities.items"));
  }
}
function ProposalViewerComponent_ng_container_4_p_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "proposal.validitySection.until"), " ", ctx_r1.formatDateTime(ctx_r1.proposal.expiresAt), ". ");
  }
}
function ProposalViewerComponent_ng_container_4_p_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "proposal.validitySection.noExpiration"), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_84_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 151);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_div_84_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.accept());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.responding);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "proposal.actions.accept"), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_84_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 152);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_div_84_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.revokeAcceptance());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.responding);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "proposal.actions.withdraw"), " ");
  }
}
function ProposalViewerComponent_ng_container_4_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275template(1, ProposalViewerComponent_ng_container_4_div_84_button_1_Template, 3, 4, "button", 148)(2, ProposalViewerComponent_ng_container_4_div_84_button_2_Template, 3, 4, "button", 149);
    \u0275\u0275elementStart(3, "button", 150);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_div_84_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCounterForm());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAccepted() && !ctx_r1.isCounterOfferSubmitted());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAccepted());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, ctx_r1.isCounterOfferSubmitted() ? "proposal.actions.reviseCounter" : "proposal.actions.sendCounter"), " ");
  }
}
function ProposalViewerComponent_ng_container_4_form_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 153);
    \u0275\u0275listener("ngSubmit", function ProposalViewerComponent_ng_container_4_form_85_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitCounterOffer());
    });
    \u0275\u0275elementStart(1, "p", 154);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 135);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "textarea", 155);
    \u0275\u0275pipe(8, "transloco");
    \u0275\u0275elementStart(9, "div", 156)(10, "button", 157);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_form_85_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeCounterForm());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 158);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.counterForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "proposal.counter.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, "proposal.counter.hint", \u0275\u0275pureFunction1(18, _c5, ctx_r1.getTierLabel(ctx_r1.getEffectiveTier()))));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 12, "proposal.counter.placeholder"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 14, "proposal.counter.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.responding || ctx_r1.counterForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, "proposal.counter.submit"), " ");
  }
}
function ProposalViewerComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "article", 9);
    \u0275\u0275element(2, "div", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12)(5, "button", 13);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printPdf());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function ProposalViewerComponent_ng_container_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "label", 15)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 16);
    \u0275\u0275listener("change", function ProposalViewerComponent_ng_container_4_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage($event.target.value));
    });
    \u0275\u0275template(16, ProposalViewerComponent_ng_container_4_option_16_Template, 2, 2, "option", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 18);
    \u0275\u0275element(18, "div", 19);
    \u0275\u0275elementStart(19, "div", 20);
    \u0275\u0275element(20, "img", 21);
    \u0275\u0275pipe(21, "transloco");
    \u0275\u0275elementStart(22, "p", 22);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "header", 24)(29, "a", 25);
    \u0275\u0275element(30, "img", 26);
    \u0275\u0275pipe(31, "transloco");
    \u0275\u0275element(32, "img", 27);
    \u0275\u0275pipe(33, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "h1", 28);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ProposalViewerComponent_ng_container_4_div_37_Template, 4, 3, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ProposalViewerComponent_ng_container_4_section_38_Template, 3, 2, "section", 30)(39, ProposalViewerComponent_ng_container_4_section_39_Template, 7, 5, "section", 31)(40, ProposalViewerComponent_ng_container_4_div_40_Template, 9, 7, "div", 32)(41, ProposalViewerComponent_ng_container_4_div_41_Template, 10, 8, "div", 33)(42, ProposalViewerComponent_ng_container_4_section_42_Template, 39, 30, "section", 34)(43, ProposalViewerComponent_ng_container_4_section_43_Template, 100, 68, "section", 35);
    \u0275\u0275elementStart(44, "section", 36)(45, "p", 37);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 38)(49, "div", 39)(50, "p", 23);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 40);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 41)(57, "p", 23);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 40);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 42)(63, "div", 43)(64, "table", 44)(65, "thead", 45)(66, "tr")(67, "th", 46);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, ProposalViewerComponent_ng_container_4_th_70_Template, 3, 3, "th", 47)(71, ProposalViewerComponent_ng_container_4_th_71_Template, 2, 6, "th", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "tbody");
    \u0275\u0275template(73, ProposalViewerComponent_ng_container_4_tr_73_Template, 9, 6, "tr", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, ProposalViewerComponent_ng_container_4_tfoot_74_Template, 21, 22, "tfoot", 50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(75, ProposalViewerComponent_ng_container_4_div_75_Template, 26, 22, "div", 51)(76, ProposalViewerComponent_ng_container_4_div_76_Template, 25, 18, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(77, ProposalViewerComponent_ng_container_4_section_77_Template, 6, 4, "section", 53);
    \u0275\u0275elementStart(78, "section", 54)(79, "p", 55);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, ProposalViewerComponent_ng_container_4_p_82_Template, 3, 4, "p", 56)(83, ProposalViewerComponent_ng_container_4_p_83_Template, 3, 3, "p", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, ProposalViewerComponent_ng_container_4_div_84_Template, 6, 5, "div", 57)(85, ProposalViewerComponent_ng_container_4_form_85_Template, 16, 20, "form", 58);
    \u0275\u0275elementStart(86, "footer", 59)(87, "p");
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "a", 60);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 38, "proposal.actions.printPdf"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 40, "proposal.actions.downloadPdf"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 42, "proposal.language"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.activeLang);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.availableLanguages);
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275pipeBind1(21, 44, "proposal.brand"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 46, "proposal.footer.legalEntity"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 48, "proposal.footer.email"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275pipeBind1(31, 50, "proposal.brand"));
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", \u0275\u0275pipeBind1(33, 52, "proposal.brand"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 54, "proposal.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.proposal.documentVersion || ctx_r1.getLatestRevisionDateValue() || ctx_r1.getDocumentSubject());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddresseeBlock() || ctx_r1.getCoverMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRevisionHistory());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAccepted());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCounterOfferSubmitted() && !ctx_r1.showCounterForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showScopeSection() && ctx_r1.scopeSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showSlaSection());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 56, "proposal.sections.commercial"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 58, "proposal.volume"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 60, ctx_r1.proposal.monthlyVolume));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 62, "proposal.recommendedPlan"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getTierLabel(ctx_r1.getEffectiveTier()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 64, "proposal.table.service"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isPerEndpointVolume());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.displayTiers);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getSelectedLineItems());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activePricingSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activePaymentOptions.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCommercialNotes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showGeneralitiesSection());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 66, "proposal.sections.validity"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasExpirationDate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isForeverExpiration());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canRespond() && !ctx_r1.showCounterForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showCounterForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 68, "proposal.footer.tagline"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 70, "proposal.footer.website"), " ");
  }
}
var TIERS = ["starter", "basic", "plus", "business", "enterprise"];
var PROPOSAL_LANGUAGES = ["en", "es", "zh", "ja", "pt", "ko"];
var SLA_RESPONSE_ROW_KEYS = ["critical", "urgent", "medium", "normal"];
var SLA_AVAILABILITY_ROW_KEYS = [
  "smartCheck",
  "smartAccessComm",
  "smartAccessBio",
  "smartEnrollComm",
  "smartEnrollBio",
  "smartEnrollDoc",
  "smartEnrollDataApi"
];
var SLA_COMPENSATION_ROW_KEYS = [
  "dataApiHigh",
  "dataApiLow",
  "emailTelHigh",
  "emailTelLow",
  "biometricsHigh",
  "biometricsLow",
  "docScanHigh",
  "docScanLow"
];
var SLA_BILLING_ROW_KEYS = ["codes"];
var ProposalViewerComponent = class _ProposalViewerComponent {
  constructor(_route, _proposalService, _fb, _translocoService) {
    this._route = _route;
    this._proposalService = _proposalService;
    this._fb = _fb;
    this._translocoService = _translocoService;
    this.proposal = null;
    this.previewSummary = null;
    this.previewPaymentOptions = null;
    this.tiers = TIERS;
    this.loading = true;
    this.error = null;
    this.responding = false;
    this.calculating = false;
    this.showCounterForm = false;
    this.counterDraftPrices = {};
    this.activeLang = "en";
    this.shareToken = "";
    this.availableLanguages = PROPOSAL_LANGUAGES;
    this.slaResponseRowKeys = SLA_RESPONSE_ROW_KEYS;
    this.slaAvailabilityRowKeys = SLA_AVAILABILITY_ROW_KEYS;
    this.slaCompensationRowKeys = SLA_COMPENSATION_ROW_KEYS;
    this.slaBillingRowKeys = SLA_BILLING_ROW_KEYS;
    this.flagCodes = {
      en: "us",
      es: "es",
      zh: "cn",
      ja: "jp",
      pt: "br",
      ko: "kr"
    };
    this.languageLabels = {
      en: "English",
      es: "Espa\xF1ol",
      zh: "\u4E2D\u6587",
      ja: "\u65E5\u672C\u8A9E",
      pt: "Portugu\xEAs",
      ko: "\uD55C\uAD6D\uC5B4"
    };
    this.counterForm = this._fb.group({
      message: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.shareToken = this._route.snapshot.paramMap.get("token") || "";
    if (!this.shareToken) {
      this.error = "invalid";
      this.loading = false;
      return;
    }
    this._loadProposal(this.shareToken);
  }
  getRecipientName() {
    if (!this.proposal)
      return "";
    if (this.proposal.client?.name)
      return this.proposal.client.name;
    return this.proposal.prospect?.name || this.proposal.prospect?.email || "";
  }
  get scopeSummary() {
    if (!this.proposal)
      return null;
    return buildScopeSummary(this.proposal);
  }
  getCategoryLabel(category) {
    if (!category?.trim())
      return "";
    const key = `proposal.categoryLabels.${category.trim()}`;
    const translated = this._translocoService.translate(key);
    return translated !== key ? translated : category;
  }
  get formattedScopeCategories() {
    const categories = this.scopeSummary?.categories || [];
    if (!categories.length)
      return "\u2014";
    return categories.map((category) => this.getCategoryLabel(category)).join(", ");
  }
  getRecipientCompany() {
    return this.proposal ? getRecipientCompany(this.proposal) : "";
  }
  getRecipientEmail() {
    return this.proposal ? getRecipientEmail(this.proposal) : "";
  }
  getDocumentSubject() {
    if (!this.proposal)
      return "";
    const fallback = this._translocoService.translate("proposal.title");
    return getDocumentSubject(this.proposal, fallback);
  }
  getCoverMessage() {
    if (!this.proposal)
      return "";
    if (this.proposal.coverMessage?.trim()) {
      return this.proposal.coverMessage.trim();
    }
    const company = getRecipientCompany(this.proposal);
    if (company) {
      return this._translocoService.translate("proposal.cover.defaultIntroGeneric");
    }
    const name = this.getRecipientName();
    if (name) {
      return this._translocoService.translate("proposal.cover.defaultIntro", { company: name });
    }
    return this._translocoService.translate("proposal.cover.defaultIntroGeneric");
  }
  showAddresseeBlock() {
    return Boolean(this.getRecipientCompany() || this.getRecipientName() || this.getRecipientEmail());
  }
  getRecipientContactLine() {
    const name = this.getRecipientName();
    const company = this.getRecipientCompany();
    const email = this.getRecipientEmail();
    const showName = Boolean(name && name !== company);
    const parts = [];
    if (showName) {
      parts.push(name);
    }
    if (email) {
      parts.push(email);
    }
    return parts.join(" \xB7 ");
  }
  getLatestRevisionDateValue() {
    if (!this.proposal)
      return "";
    return getLatestRevisionDate(this.proposal) || this.proposal.createdAt || "";
  }
  showScopeSection() {
    return this.proposal ? showScopeSection(this.proposal) : false;
  }
  showSlaSection() {
    return this.proposal ? showSlaSection(this.proposal) : false;
  }
  showGeneralitiesSection() {
    return this.proposal ? showGeneralitiesSection(this.proposal) : false;
  }
  showCommercialNotes() {
    return this.proposal ? showCommercialNotes(this.proposal) : false;
  }
  getTranslationArray(key) {
    const value = this._translocoService.translateObject(key);
    return Array.isArray(value) ? value : [];
  }
  getSlaResponseRow(key) {
    const value = this._translocoService.translateObject(`proposal.sla.responseRows.${key}`);
    return Array.isArray(value) ? value : [];
  }
  getSlaAvailabilityRow(key) {
    const value = this._translocoService.translateObject(`proposal.sla.availabilityRows.${key}`);
    return Array.isArray(value) ? value : [];
  }
  getSlaCompensationRow(key) {
    const value = this._translocoService.translateObject(`proposal.sla.compensationRows.${key}`);
    return Array.isArray(value) ? value : [];
  }
  getSlaBillingRow(key) {
    const value = this._translocoService.translateObject(`proposal.sla.billingRows.${key}`);
    return Array.isArray(value) ? value : [];
  }
  getScopeImplementationBody() {
    const company = this.getRecipientCompany() || this.getRecipientName() || "your organization";
    return this._translocoService.translate("proposal.scope.implementationBody", { company });
  }
  downloadPdf() {
    if (!this.shareToken)
      return;
    window.open(this._proposalService.getPdfUrl(this.shareToken, this.activeLang), "_blank");
  }
  printPdf() {
    window.print();
  }
  getEffectiveTier() {
    if (!this.proposal)
      return "starter";
    return resolveEffectiveTier(this.proposal);
  }
  getTierLabel(tier) {
    return this._translocoService.translate(`proposal.tiers.${tier}`);
  }
  isTierRecommended(tier) {
    return tier === this.getEffectiveTier();
  }
  get displayTiers() {
    if (!this.proposal?.pricingSummary) {
      return this.tiers;
    }
    return resolveClientDisplayTiers(this.proposal, this.tiers);
  }
  getSelectedLineItems() {
    if (!this.proposal) {
      return [];
    }
    return getSelectedLineItems(this.proposal);
  }
  get activePricingSummary() {
    return this.previewSummary || this.proposal?.pricingSummary || null;
  }
  get activePaymentOptions() {
    if (this.previewPaymentOptions?.length) {
      return this.previewPaymentOptions;
    }
    if (!this.proposal)
      return [];
    return getActivePaymentOptions(this.proposal, {
      isCounterOffer: this.isCounterOfferSubmitted()
    });
  }
  getPromoDiscount(option) {
    return getPromoDiscountAmount(option);
  }
  getSummaryValue(tier, field) {
    const row = this.activePricingSummary?.[tier];
    if (!row)
      return void 0;
    if (field === "quotedMonthlyTotal") {
      return row.quotedMonthlyTotal ?? row.totalMonthlyEstimate;
    }
    return row[field];
  }
  formatPrice(value) {
    return formatProposalCurrency(value, this.proposal?.language || this.activeLang);
  }
  getUsageCostLabelKey() {
    if (this.proposal?.volumeMode === "perEndpoint") {
      return "proposal.table.usageCostPerEndpoint";
    }
    return this.proposal?.usagePricingMode === "combo" ? "proposal.table.usageCostCombo" : "proposal.table.usageCostAverage";
  }
  isPerEndpointVolume() {
    return this.proposal?.volumeMode === "perEndpoint";
  }
  getUsageCellHint(tier) {
    if (!this.proposal)
      return "";
    return formatUsageCellHint(getSelectedLineItems(this.proposal), tier, this.proposal.monthlyVolume || 0, this.proposal.usagePricingMode === "combo" ? "combo" : "average", (price) => this.formatPrice(price) || "", this.proposal.volumeMode === "perEndpoint" ? "perEndpoint" : "global");
  }
  formatDateTime(value) {
    if (!value)
      return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return "";
    const locale = this._translocoService.getActiveLang() || "en";
    return date.toLocaleString(locale);
  }
  hasExpirationDate() {
    return Boolean(this.proposal?.expiresAt);
  }
  isForeverExpiration() {
    return this.proposal?.expirationPreset === "never";
  }
  get revisionTimeline() {
    if (!this.proposal)
      return [];
    return buildRevisionTimeline(this.proposal.createdAt, this.proposal.pricingRevisions);
  }
  showRevisionHistory() {
    return Boolean(this.proposal?.createdAt || this.revisionTimeline.length);
  }
  setLanguage(lang) {
    void this._applyLanguage(lang, true);
  }
  ngOnDestroy() {
    this._pendingLangLoad?.unsubscribe();
  }
  getOurOfferPrice(item, tier) {
    return roundUnitPrice(item.unitPrices?.[tier]);
  }
  getOriginalPrice(item, tier) {
    return roundUnitPrice(item.catalogUnitPrices?.[tier] ?? item.unitPrices?.[tier]);
  }
  getClientCounterPrice(item, tier) {
    const lineItems = this.proposal?.counterOffer?.lineItems || [];
    const match = lineItems.find((row) => String(row.appFeature) === String(item.appFeature));
    return roundUnitPrice(match?.unitPrices?.[tier]);
  }
  hasClientCounterPriceChange(item, tier) {
    const clientPrice = this.getClientCounterPrice(item, tier);
    if (clientPrice == null)
      return false;
    return unitPricesDiffer(clientPrice, this.getOurOfferPrice(item, tier));
  }
  getDisplayPrice(item, tier) {
    if (this.showCounterForm && this.isTierRecommended(tier)) {
      const draft = this.counterDraftPrices[this._itemKey(item)];
      if (draft != null)
        return roundUnitPrice(draft);
    }
    if (this.proposal?.status === "counter_offer" && this.isTierRecommended(tier)) {
      const clientPrice = this.getClientCounterPrice(item, tier);
      if (clientPrice != null && this.hasClientCounterPriceChange(item, tier))
        return clientPrice;
    }
    return this.getOurOfferPrice(item, tier);
  }
  canRespond() {
    if (!this.proposal)
      return false;
    return !["expired", "rejected"].includes(this.proposal.status);
  }
  isAccepted() {
    return this.proposal?.status === "accepted";
  }
  isCounterOfferSubmitted() {
    return this.proposal?.status === "counter_offer";
  }
  openCounterForm() {
    this.showCounterForm = true;
    this._seedCounterDraftPrices();
    this._recalculatePreview();
  }
  closeCounterForm() {
    this.showCounterForm = false;
    this.previewSummary = null;
    this.previewPaymentOptions = null;
  }
  accept() {
    if (!this.shareToken || this.responding)
      return;
    this.responding = true;
    this._proposalService.respond(this.shareToken, { action: "accept" }).subscribe({
      next: (res) => {
        if (this.proposal) {
          this.proposal.status = "accepted";
          this.proposal.acceptedAt = String(res.data?.acceptedAt || (/* @__PURE__ */ new Date()).toISOString());
        }
        this.showCounterForm = false;
        this.responding = false;
      },
      error: () => {
        this.responding = false;
      }
    });
  }
  revokeAcceptance() {
    if (!this.shareToken || this.responding)
      return;
    this.responding = true;
    this._proposalService.respond(this.shareToken, { action: "revoke_acceptance" }).subscribe({
      next: () => {
        if (this.proposal) {
          this.proposal.status = "viewed";
          this.proposal.acceptedAt = void 0;
        }
        this.responding = false;
      },
      error: () => {
        this.responding = false;
      }
    });
  }
  onCounterPriceBlur(item, raw) {
    const parsed = Number.parseFloat(raw);
    if (Number.isNaN(parsed) || parsed < 0)
      return;
    this.counterDraftPrices[this._itemKey(item)] = Math.round(parsed * 100) / 100;
    this._recalculatePreview();
  }
  getCounterInputValue(item) {
    const value = this.counterDraftPrices[this._itemKey(item)];
    return value != null ? String(value) : "";
  }
  submitCounterOffer() {
    if (this.counterForm.invalid)
      return;
    if (!this.shareToken)
      return;
    this.responding = true;
    const tier = this.getEffectiveTier();
    const lineItems = this._buildCounterLineItems(tier);
    this._proposalService.respond(this.shareToken, {
      action: "counter_offer",
      message: this.counterForm.value.message,
      lineItems
    }).subscribe({
      next: (res) => {
        if (this.proposal) {
          this.proposal.status = "counter_offer";
          this.proposal.acceptedAt = void 0;
          this.proposal.counterOffer = res.data?.counterOffer;
        }
        this.showCounterForm = false;
        this.previewSummary = null;
        this.previewPaymentOptions = null;
        this.responding = false;
      },
      error: () => {
        this.responding = false;
      }
    });
  }
  _loadProposal(token) {
    this._proposalService.getByToken(token).subscribe({
      next: (res) => {
        this.proposal = res.data;
        const lang = this._resolveInitialLanguage(token, res.data.language);
        void this._applyLanguage(lang).then(() => {
          this.loading = false;
        });
      },
      error: () => {
        this.error = "not_found";
        this.loading = false;
      }
    });
  }
  _applyLanguage(lang, persist = false) {
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
        error: () => resolve()
      });
    });
  }
  _resolveInitialLanguage(token, proposalLanguage) {
    const queryLang = this._route.snapshot.queryParamMap.get("lang");
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
    return "en";
  }
  _sessionKey(token) {
    return `proposal.lang.${token}`;
  }
  _isSupportedLanguage(value) {
    return Boolean(value) && PROPOSAL_LANGUAGES.includes(value);
  }
  _itemKey(item) {
    return String(item.appFeature || item.serviceName || item.url || "");
  }
  _seedCounterDraftPrices() {
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
  _buildCounterLineItems(tier) {
    return this.getSelectedLineItems().map((item) => {
      const price = this.counterDraftPrices[this._itemKey(item)];
      if (price == null || !item.appFeature)
        return null;
      if (!unitPricesDiffer(price, this.getOurOfferPrice(item, tier)))
        return null;
      return {
        appFeature: String(item.appFeature),
        unitPrices: { [tier]: price }
      };
    }).filter((item) => item !== null);
  }
  _recalculatePreview() {
    if (!this.shareToken || !this.showCounterForm)
      return;
    const tier = this.getEffectiveTier();
    const lineItems = this._buildCounterLineItems(tier);
    if (!lineItems.length)
      return;
    this.calculating = true;
    this._proposalService.calculatePreview(this.shareToken, lineItems).subscribe({
      next: (res) => {
        this.previewSummary = res.data.pricingSummary;
        this.previewPaymentOptions = res.data.paymentOptions || null;
        this.calculating = false;
      },
      error: () => {
        this.calculating = false;
      }
    });
  }
  static {
    this.\u0275fac = function ProposalViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProposalViewerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProposalPublicService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslocoService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProposalViewerComponent, selectors: [["app-proposal-viewer"]], decls: 5, vars: 3, consts: [["readOnlyCell", ""], ["simplePrice", ""], [1, "min-h-screen", "bg-stone-50", "px-4", "py-10", "print:m-0", "print:p-0", "dark:bg-zinc-950"], [1, "mx-auto", "max-w-5xl", "print:mx-0", "print:max-w-none"], ["class", "rounded-2xl border border-stone-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], [4, "ngIf"], [1, "rounded-2xl", "border", "border-stone-200", "bg-white", "p-12", "text-center", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "text-sm", "text-stone-500"], [1, "text-sm", "text-stone-600"], [1, "proposal-letterhead", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "print:overflow-visible", "print:rounded-none", "print:border-0", "print:shadow-none", "dark:border-zinc-800", "dark:bg-zinc-900/70"], ["aria-hidden", "true", 1, "proposal-letterhead__accent", "h-1", "bg-gradient-to-r", "from-verifikBrand-600", "to-verifikBrand-400", "print:hidden"], [1, "px-5", "py-6", "sm:px-8", "sm:py-8", "print:p-0"], [1, "proposal-letterhead__toolbar", "mb-6", "flex", "flex-wrap", "items-center", "justify-end", "gap-3", "print:hidden"], ["type", "button", 1, "rounded-lg", "border", "border-stone-200", "px-3", "py-1.5", "text-xs", "font-medium", "text-stone-700", "dark:border-zinc-700", "dark:text-zinc-200", 3, "click"], ["type", "button", 1, "rounded-lg", "bg-stone-950", "px-3", "py-1.5", "text-xs", "font-medium", "text-white", "dark:bg-white", "dark:text-zinc-950", 3, "click"], ["for", "proposal-language", 1, "flex", "items-center", "gap-2", "text-xs", "text-stone-500"], ["id", "proposal-language", 1, "rounded-lg", "border", "border-stone-200", "bg-white", "px-2", "py-1.5", "text-xs", "text-stone-700", "dark:border-zinc-700", "dark:bg-zinc-900/70", "dark:text-zinc-200", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "proposal-letterhead__print-banner", "hidden", "print:block"], ["aria-hidden", "true", 1, "proposal-letterhead__accent", "proposal-letterhead__accent--print", "h-1"], [1, "border-b", "border-stone-200", "pb-3", "pt-3", "text-center"], ["src", "/images/logo/logo_verifik_brand.svg", 1, "proposal-letterhead__print-logo", "mx-auto", "h-10", "w-auto", "max-w-[160px]", 3, "alt"], [1, "mt-1.5", "text-xs", "text-stone-500"], [1, "text-xs", "text-stone-500"], [1, "proposal-letterhead__header", "mb-8", "text-center", "print:mb-3", "print:pt-3"], ["href", "https://verifik.co", "target", "_blank", "rel", "noopener noreferrer", 1, "proposal-letterhead__logo", "inline-flex", "justify-center", "transition-opacity", "hover:opacity-80", "print:hidden"], ["src", "/images/logo/logo_verifik_brand.svg", 1, "proposal-letterhead__logo-light", "h-10", "w-auto", "max-w-[160px]", "dark:hidden", "print:block", 3, "alt"], ["src", "/images/logo/logo_verifik_brand_on_dark.svg", 1, "proposal-letterhead__logo-dark", "hidden", "h-10", "w-auto", "max-w-[160px]", "dark:block", "print:hidden", 3, "alt"], [1, "mt-5", "text-3xl", "font-semibold", "tracking-tight", "text-stone-900", "print:mt-2", "print:text-2xl", "dark:text-white"], ["class", "proposal-letterhead__metadata mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-stone-500", 4, "ngIf"], ["class", "proposal-letterhead__cover-letter mb-8 text-left print:mb-4", 4, "ngIf"], ["class", "proposal-letterhead__revisions mb-6 rounded-2xl border border-stone-200/90 bg-white p-4 text-sm print:hidden dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], ["class", "proposal-letterhead__banner mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 print:hidden dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200", 4, "ngIf"], ["class", "proposal-letterhead__banner mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900 print:hidden dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200", 4, "ngIf"], ["class", "proposal-letterhead__section proposal-letterhead__scope proposal-letterhead__section--print mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm print:mb-4 print:p-4 print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], ["class", "proposal-letterhead__section proposal-letterhead__sla proposal-letterhead__section--breakable mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm print:mb-4 print:p-4 print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], [1, "proposal-letterhead__section", "proposal-letterhead__commercial", "mb-6"], [1, "mb-4", "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500"], [1, "mb-6", "grid", "gap-4", "sm:grid-cols-2"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "text-2xl", "font-semibold", "text-stone-900", "dark:text-white"], [1, "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "ring-1", "ring-stone-300", "dark:border-zinc-800", "dark:bg-zinc-900/70", "dark:ring-zinc-600"], [1, "proposal-letterhead__pricing", "overflow-hidden", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "shadow-sm", "print:overflow-visible", "print:shadow-none", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "overflow-x-auto"], [1, "min-w-full", "text-left", "text-sm"], [1, "border-b", "border-stone-200", "bg-stone-100/80", "text-xs", "uppercase", "text-stone-600", "dark:border-zinc-800", "dark:bg-zinc-900"], [1, "px-4", "py-3"], ["class", "px-4 py-3", 4, "ngIf"], ["class", "px-4 py-3", 3, "bg-stone-200", "ngClass", 4, "ngFor", "ngForOf"], ["class", "border-b border-stone-100 dark:border-zinc-800", 4, "ngFor", "ngForOf"], ["class", "border-t bg-stone-50 text-xs dark:bg-zinc-900/40", 4, "ngIf"], ["class", "proposal-letterhead__payment mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], ["class", "proposal-letterhead__commercial-notes mt-6 space-y-6 text-sm text-stone-600 dark:text-stone-300", 4, "ngIf"], ["class", "proposal-letterhead__section proposal-letterhead__generalities mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70", 4, "ngIf"], [1, "proposal-letterhead__section", "proposal-letterhead__validity", "mb-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wide", "text-stone-500"], ["class", "mt-3 text-sm text-stone-600 dark:text-stone-300", 4, "ngIf"], ["class", "proposal-letterhead__actions mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center print:hidden", 4, "ngIf"], ["class", "proposal-letterhead__counter-form mt-6 rounded-2xl border border-stone-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/70 print:hidden", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "proposal-letterhead__footer", "mt-10", "border-t", "border-stone-200", "pt-6", "text-center", "text-xs", "text-stone-500", "dark:border-zinc-800"], ["href", "https://verifik.co", "target", "_blank", "rel", "noopener noreferrer", 1, "mt-1", "inline-block", "font-medium", "text-verifikBrand-600", "hover:text-verifikBrand-700", "dark:text-verifikBrand-400", "dark:hover:text-verifikBrand-300"], [3, "value"], [1, "proposal-letterhead__metadata", "mt-4", "flex", "flex-wrap", "justify-center", "gap-x-4", "gap-y-1", "text-xs", "text-stone-500"], [1, "proposal-letterhead__cover-letter", "mb-8", "text-left", "print:mb-4"], ["class", "proposal-letterhead__addressee", 4, "ngIf"], ["class", "proposal-letterhead__cover-message text-sm leading-7 text-stone-600 dark:text-stone-300", 3, "mt-5", 4, "ngIf"], [1, "proposal-letterhead__addressee"], ["class", "mt-2 text-lg font-semibold leading-snug text-stone-900 dark:text-white", 4, "ngIf"], ["class", "mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300", 4, "ngIf"], [1, "mt-2", "text-lg", "font-semibold", "leading-snug", "text-stone-900", "dark:text-white"], [1, "mt-1", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], [1, "proposal-letterhead__cover-message", "text-sm", "leading-7", "text-stone-600", "dark:text-stone-300"], [1, "proposal-letterhead__revisions", "mb-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-4", "text-sm", "print:hidden", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "mt-2", "space-y-1", "text-stone-600", "dark:text-stone-300"], [4, "ngFor", "ngForOf"], [1, "proposal-letterhead__banner", "mb-6", "rounded-2xl", "border", "border-emerald-200", "bg-emerald-50", "p-4", "text-sm", "text-emerald-900", "print:hidden", "dark:border-emerald-900", "dark:bg-emerald-950/40", "dark:text-emerald-200"], [1, "font-medium"], [1, "mt-1", "text-emerald-800", "dark:text-emerald-300"], [1, "proposal-letterhead__banner", "mb-6", "rounded-2xl", "border", "border-orange-200", "bg-orange-50", "p-4", "text-sm", "text-orange-900", "print:hidden", "dark:border-orange-900", "dark:bg-orange-950/40", "dark:text-orange-200"], ["class", "mt-2 text-orange-800 dark:text-orange-100", 4, "ngIf"], [1, "mt-2", "text-orange-800", "dark:text-orange-300"], [1, "mt-2", "text-orange-800", "dark:text-orange-100"], [1, "proposal-letterhead__section", "proposal-letterhead__scope", "proposal-letterhead__section--print", "mb-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "print:mb-4", "print:p-4", "print:shadow-none", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "mt-3", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], [1, "mt-4", "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-4", "grid", "gap-4", "sm:grid-cols-3"], [1, "mt-1", "text-sm", "font-medium", "text-stone-900", "dark:text-white"], [1, "mt-4"], [1, "text-sm", "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "text-sm", "leading-relaxed", "text-stone-600", "dark:text-stone-300"], ["href", "https://docs.verifik.co", "target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "inline-flex", "text-sm", "font-medium", "text-verifikBrand-600", "hover:text-verifikBrand-700", "print:hidden", "dark:text-verifikBrand-400"], [1, "proposal-letterhead__section", "proposal-letterhead__sla", "proposal-letterhead__section--breakable", "mb-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "print:mb-4", "print:p-4", "print:shadow-none", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "mt-4", "space-y-6", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "font-semibold", "text-stone-900", "dark:text-white"], [1, "mt-2", "list-disc", "space-y-1", "pl-5"], [1, "mt-2"], [1, "mt-2", "text-xs", "font-medium", "text-stone-500"], [1, "proposal-letterhead__sla-table", "mt-4", "overflow-x-auto"], [1, "mt-2", "min-w-full", "text-left", "text-xs"], [1, "border-b", "border-stone-200", "bg-stone-50", "text-stone-500", "dark:border-zinc-800", "dark:bg-zinc-900/40"], ["class", "px-3 py-2", 4, "ngFor", "ngForOf"], [1, "mt-3", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "proposal-letterhead__sla-table", "overflow-x-auto"], [1, "mt-2", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mt-3", "min-w-full", "text-left", "text-xs"], [1, "proposal-letterhead__sla-table", "mt-3", "overflow-x-auto"], [1, "text-sm", "font-medium", "text-stone-800", "dark:text-stone-200"], [1, "px-3", "py-2"], [1, "border-b", "border-stone-100", "dark:border-zinc-800"], [1, "px-4", "py-3", 3, "ngClass"], ["class", "mt-0.5 truncate font-mono text-xs text-stone-400", 4, "ngIf"], ["class", "px-4 py-3 tabular-nums text-stone-500", 4, "ngIf"], [1, "mt-0.5", "truncate", "font-mono", "text-xs", "text-stone-400"], [1, "px-4", "py-3", "tabular-nums", "text-stone-500"], [4, "ngIf", "ngIfElse"], [1, "text-xs", "text-stone-400"], [1, "mt-1", "flex", "items-center", "gap-0.5"], ["type", "number", "min", "0", "step", "0.01", 1, "w-20", "rounded-lg", "border", "border-stone-200", "px-2", "py-1", "text-sm", "tabular-nums", "dark:border-zinc-700", "dark:bg-zinc-900/50", 3, "blur", "keydown.enter", "value"], [1, "mt-0.5", "text-xs", "text-stone-400"], [1, "tabular-nums", "font-semibold", "text-orange-700", "dark:text-orange-300"], [1, "text-xs", "text-stone-400", "line-through"], [1, "text-xs", "text-stone-500", "line-through"], [1, "tabular-nums"], [1, "border-t", "bg-stone-50", "text-xs", "dark:bg-zinc-900/40"], [1, "px-4", "py-2", "font-medium", "text-stone-500"], [1, "mt-0.5", "block", "font-normal", "text-stone-400"], [1, "px-4", "py-2", "font-medium", "text-stone-900", "dark:text-white"], [1, "px-4", "py-2", "tabular-nums", "text-stone-500"], ["class", "mt-0.5 block font-normal normal-case tracking-normal text-stone-400", 4, "ngIf"], ["class", "ml-1 text-stone-400", 4, "ngIf"], [1, "mt-0.5", "block", "font-normal", "normal-case", "tracking-normal", "text-stone-400"], [1, "ml-1", "text-stone-400"], [1, "px-4", "py-2", "text-sm", "font-semibold", "tabular-nums", 3, "ngClass"], [1, "proposal-letterhead__payment", "mt-6", "overflow-hidden", "rounded-2xl", "border", "border-stone-200", "bg-white", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "border-b", "border-stone-200", "px-5", "py-4", "dark:border-zinc-800"], [1, "mt-1", "text-xs", "text-stone-500"], [1, "border-b", "border-stone-200", "bg-stone-50", "text-xs", "uppercase", "text-stone-500", "dark:border-zinc-800", "dark:bg-zinc-900/40"], [1, "px-4", "py-3", "font-medium", "text-stone-900", "dark:text-white"], [1, "px-4", "py-3", "text-stone-600", "dark:text-stone-300"], [1, "px-4", "py-3", "font-semibold", "tabular-nums", "text-stone-900", "dark:text-white"], [1, "px-4", "py-3", "text-xs", "text-stone-500", "dark:text-stone-400"], ["class", "inline-flex rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200", 4, "ngIf"], [1, "inline-flex", "rounded-full", "bg-emerald-50", "px-2", "py-1", "font-medium", "text-emerald-800", "dark:bg-emerald-950", "dark:text-emerald-200"], [1, "proposal-letterhead__commercial-notes", "mt-6", "space-y-6", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "mt-3", "list-disc", "space-y-2", "pl-5"], [1, "proposal-letterhead__section", "proposal-letterhead__generalities", "mb-6", "rounded-2xl", "border", "border-stone-200/90", "bg-white", "p-5", "shadow-sm", "dark:border-zinc-800", "dark:bg-zinc-900/70"], [1, "mt-3", "list-disc", "space-y-2", "pl-5", "text-sm", "text-stone-600", "dark:text-stone-300"], [1, "proposal-letterhead__actions", "mt-8", "flex", "flex-col", "items-center", "gap-4", "sm:flex-row", "sm:justify-center", "print:hidden"], ["type", "button", "class", "min-w-[160px] rounded-xl bg-stone-950 px-6 py-3 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-zinc-950", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "min-w-[160px] rounded-xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 disabled:opacity-50 dark:border-zinc-600 dark:text-zinc-200", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "min-w-[160px]", "rounded-xl", "border", "border-stone-300", "px-6", "py-3", "text-sm", "font-medium", "text-stone-800", "dark:border-zinc-600", "dark:text-zinc-200", 3, "click"], ["type", "button", 1, "min-w-[160px]", "rounded-xl", "bg-stone-950", "px-6", "py-3", "text-sm", "font-medium", "text-white", "disabled:opacity-50", "dark:bg-white", "dark:text-zinc-950", 3, "click", "disabled"], ["type", "button", 1, "min-w-[160px]", "rounded-xl", "border", "border-stone-300", "px-6", "py-3", "text-sm", "font-medium", "text-stone-800", "disabled:opacity-50", "dark:border-zinc-600", "dark:text-zinc-200", 3, "click", "disabled"], [1, "proposal-letterhead__counter-form", "mt-6", "rounded-2xl", "border", "border-stone-200", "bg-white", "p-5", "dark:border-zinc-800", "dark:bg-zinc-900/70", "print:hidden", 3, "ngSubmit", "formGroup"], [1, "text-sm", "font-medium", "text-stone-900", "dark:text-white"], ["formControlName", "message", "rows", "4", 1, "mt-3", "w-full", "rounded-xl", "border", "border-stone-200", "px-4", "py-2.5", "text-sm", "dark:border-zinc-700", "dark:bg-zinc-900/50", 3, "placeholder"], [1, "mt-4", "flex", "justify-end", "gap-2"], ["type", "button", 1, "rounded-xl", "border", "border-stone-300", "px-4", "py-2", "text-sm", "text-stone-700", "dark:border-zinc-600", "dark:text-zinc-200", 3, "click"], ["type", "submit", 1, "rounded-xl", "bg-stone-950", "px-4", "py-2", "text-sm", "text-white", "disabled:opacity-50", "dark:bg-white", "dark:text-zinc-950", 3, "disabled"]], template: function ProposalViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, ProposalViewerComponent_div_2_Template, 4, 3, "div", 4)(3, ProposalViewerComponent_div_3_Template, 4, 3, "div", 4)(4, ProposalViewerComponent_ng_container_4_Template, 93, 72, "ng-container", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.proposal && !ctx.loading);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslocoModule, TranslocoPipe], styles: ["\n\n.proposal-letterhead__scope[_ngcontent-%COMP%], \n.proposal-letterhead__validity[_ngcontent-%COMP%], \n.proposal-letterhead__generalities[_ngcontent-%COMP%], \n.proposal-letterhead__commercial-notes[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n.proposal-letterhead__sla[_ngcontent-%COMP%], \n.proposal-letterhead__section--breakable[_ngcontent-%COMP%] {\n  break-inside: auto;\n  page-break-inside: auto;\n}\n.proposal-letterhead__sla-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n.proposal-letterhead__pricing[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n.proposal-letterhead__payment[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n.proposal-letterhead__print-banner[_ngcontent-%COMP%] {\n  display: none;\n}\n.proposal-letterhead__accent[_ngcontent-%COMP%] {\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.proposal-letterhead__cover-letter[_ngcontent-%COMP%] {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n@media print {\n  @page {\n    margin: 0 10mm 10mm;\n    size: auto;\n  }\n  [_nghost-%COMP%] {\n    display: block;\n    margin: 0 !important;\n    padding: 0 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .min-h-screen[_ngcontent-%COMP%], \n   .mx-auto.max-w-5xl[_ngcontent-%COMP%] {\n    min-height: auto !important;\n    max-width: none !important;\n    background: #fff !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n  .proposal-letterhead[_ngcontent-%COMP%] {\n    border: none !important;\n    box-shadow: none !important;\n    background: #fff !important;\n    border-radius: 0 !important;\n    overflow: visible !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .proposal-letterhead__accent--print[_ngcontent-%COMP%] {\n    display: block !important;\n    height: 4px !important;\n    margin: 0 !important;\n    background:\n      linear-gradient(\n        to right,\n        #2b3af0,\n        #5b69ff) !important;\n  }\n  .proposal-letterhead__print-banner[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n    break-after: avoid;\n    page-break-after: avoid;\n  }\n  .proposal-letterhead__print-logo[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .proposal-letterhead__logo-dark[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .proposal-letterhead__logo-light[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .proposal-letterhead__header[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    break-after: avoid;\n    page-break-after: avoid;\n    padding-top: 0 !important;\n  }\n  .proposal-letterhead__metadata[_ngcontent-%COMP%] {\n    margin-top: 0.5rem !important;\n  }\n  .proposal-letterhead__cover-letter[_ngcontent-%COMP%] {\n    margin-top: 0.75rem !important;\n    margin-bottom: 0.75rem !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__section--print[_ngcontent-%COMP%], \n   .proposal-letterhead__scope[_ngcontent-%COMP%], \n   .proposal-letterhead__validity[_ngcontent-%COMP%], \n   .proposal-letterhead__generalities[_ngcontent-%COMP%], \n   .proposal-letterhead__commercial-notes[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__sla[_ngcontent-%COMP%], \n   .proposal-letterhead__section--breakable[_ngcontent-%COMP%], \n   .proposal-letterhead__commercial[_ngcontent-%COMP%] {\n    break-inside: auto !important;\n    page-break-inside: auto !important;\n  }\n  .proposal-letterhead__sla-table[_ngcontent-%COMP%], \n   .proposal-letterhead__pricing[_ngcontent-%COMP%], \n   .proposal-letterhead__payment[_ngcontent-%COMP%] {\n    break-inside: auto !important;\n    page-break-inside: auto !important;\n    overflow: visible !important;\n  }\n  .proposal-letterhead__sla-table[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n   .proposal-letterhead__section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n    break-after: avoid;\n    page-break-after: avoid;\n  }\n  .proposal-letterhead__sla-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], \n   .proposal-letterhead__pricing[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], \n   .proposal-letterhead__payment[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10px;\n  }\n  .proposal-letterhead__sla-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n   .proposal-letterhead__pricing[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], \n   .proposal-letterhead__payment[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: table-header-group;\n  }\n  .proposal-letterhead__sla-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .proposal-letterhead__pricing[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n   .proposal-letterhead__payment[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__sla[_ngcontent-%COMP%]   .space-y-6[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    break-inside: auto;\n    page-break-inside: auto;\n  }\n  .overflow-x-auto[_ngcontent-%COMP%] {\n    overflow: visible !important;\n  }\n  .dark\\:bg-zinc-900\\/70[_ngcontent-%COMP%], \n   .dark\\:bg-zinc-900[_ngcontent-%COMP%], \n   .dark\\:bg-zinc-950[_ngcontent-%COMP%], \n   .dark\\:text-white[_ngcontent-%COMP%], \n   .dark\\:text-stone-300[_ngcontent-%COMP%], \n   .dark\\:border-zinc-800[_ngcontent-%COMP%] {\n    background: #fff !important;\n    color: #1c1917 !important;\n    border-color: #e7e5e4 !important;\n  }\n  .print\\:hidden[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .hidden.print\\:block[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=proposal-viewer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProposalViewerComponent, [{
    type: Component,
    args: [{ selector: "app-proposal-viewer", standalone: true, imports: [CommonModule, ReactiveFormsModule, TranslocoModule], template: `<div class="min-h-screen bg-stone-50 px-4 py-10 print:m-0 print:p-0 dark:bg-zinc-950">\r
    <div class="mx-auto max-w-5xl print:mx-0 print:max-w-none">\r
        <div *ngIf="loading" class="rounded-2xl border border-stone-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/70">\r
            <p class="text-sm text-stone-500">{{ 'proposal.loading' | transloco }}</p>\r
        </div>\r
\r
        <div *ngIf="error && !loading" class="rounded-2xl border border-stone-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900/70">\r
            <p class="text-sm text-stone-600">{{ 'proposal.error' | transloco }}</p>\r
        </div>\r
\r
        <ng-container *ngIf="proposal && !loading">\r
            <article class="proposal-letterhead overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm print:overflow-visible print:rounded-none print:border-0 print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70">\r
                <div class="proposal-letterhead__accent h-1 bg-gradient-to-r from-verifikBrand-600 to-verifikBrand-400 print:hidden" aria-hidden="true"></div>\r
\r
                <div class="px-5 py-6 sm:px-8 sm:py-8 print:p-0">\r
                    <div class="proposal-letterhead__toolbar mb-6 flex flex-wrap items-center justify-end gap-3 print:hidden">\r
                        <button\r
                            type="button"\r
                            class="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700 dark:border-zinc-700 dark:text-zinc-200"\r
                            (click)="printPdf()"\r
                        >\r
                            {{ 'proposal.actions.printPdf' | transloco }}\r
                        </button>\r
                        <button\r
                            type="button"\r
                            class="rounded-lg bg-stone-950 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-zinc-950"\r
                            (click)="downloadPdf()"\r
                        >\r
                            {{ 'proposal.actions.downloadPdf' | transloco }}\r
                        </button>\r
                        <label class="flex items-center gap-2 text-xs text-stone-500" for="proposal-language">\r
                            <span>{{ 'proposal.language' | transloco }}</span>\r
                            <select\r
                                id="proposal-language"\r
                                class="rounded-lg border border-stone-200 bg-white px-2 py-1.5 text-xs text-stone-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"\r
                                [value]="activeLang"\r
                                (change)="setLanguage($any($event.target).value)"\r
                            >\r
                                <option *ngFor="let lang of availableLanguages" [value]="lang">\r
                                    {{ languageLabels[lang] }}\r
                                </option>\r
                            </select>\r
                        </label>\r
                    </div>\r
\r
                    <div class="proposal-letterhead__print-banner hidden print:block">\r
                        <div class="proposal-letterhead__accent proposal-letterhead__accent--print h-1" aria-hidden="true"></div>\r
                        <div class="border-b border-stone-200 pb-3 pt-3 text-center">\r
                            <img\r
                                class="proposal-letterhead__print-logo mx-auto h-10 w-auto max-w-[160px]"\r
                                src="/images/logo/logo_verifik_brand.svg"\r
                                [alt]="'proposal.brand' | transloco"\r
                            />\r
                            <p class="mt-1.5 text-xs text-stone-500">\r
                                {{ 'proposal.footer.legalEntity' | transloco }}\r
                            </p>\r
                            <p class="text-xs text-stone-500">\r
                                {{ 'proposal.footer.email' | transloco }}\r
                            </p>\r
                        </div>\r
                    </div>\r
\r
                    <header class="proposal-letterhead__header mb-8 text-center print:mb-3 print:pt-3">\r
                        <a\r
                            class="proposal-letterhead__logo inline-flex justify-center transition-opacity hover:opacity-80 print:hidden"\r
                            href="https://verifik.co"\r
                            target="_blank"\r
                            rel="noopener noreferrer"\r
                        >\r
                            <img\r
                                class="proposal-letterhead__logo-light h-10 w-auto max-w-[160px] dark:hidden print:block"\r
                                src="/images/logo/logo_verifik_brand.svg"\r
                                [alt]="'proposal.brand' | transloco"\r
                            />\r
                            <img\r
                                class="proposal-letterhead__logo-dark hidden h-10 w-auto max-w-[160px] dark:block print:hidden"\r
                                src="/images/logo/logo_verifik_brand_on_dark.svg"\r
                                [alt]="'proposal.brand' | transloco"\r
                            />\r
                        </a>\r
                        <h1 class="mt-5 text-3xl font-semibold tracking-tight text-stone-900 print:mt-2 print:text-2xl dark:text-white">\r
                            {{ 'proposal.title' | transloco }}\r
                        </h1>\r
\r
                        <div\r
                            *ngIf="proposal.documentVersion || getLatestRevisionDateValue() || getDocumentSubject()"\r
                            class="proposal-letterhead__metadata mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-stone-500"\r
                        >\r
                            <span *ngIf="proposal.documentVersion">\r
                                {{ 'proposal.cover.version' | transloco }}: {{ proposal.documentVersion }}\r
                            </span>\r
                            <span *ngIf="getLatestRevisionDateValue()">\r
                                {{ 'proposal.cover.revised' | transloco }}: {{ formatDateTime(getLatestRevisionDateValue()) }}\r
                            </span>\r
                            <span *ngIf="getDocumentSubject()">\r
                                {{ 'proposal.cover.subject' | transloco }}: {{ getDocumentSubject() }}\r
                            </span>\r
                        </div>\r
                    </header>\r
\r
                    <section\r
                        *ngIf="showAddresseeBlock() || getCoverMessage()"\r
                        class="proposal-letterhead__cover-letter mb-8 text-left print:mb-4"\r
                    >\r
                        <div *ngIf="showAddresseeBlock()" class="proposal-letterhead__addressee">\r
                            <p class="text-xs font-semibold uppercase tracking-wide text-stone-500">\r
                                {{ 'proposal.preparedFor' | transloco }}\r
                            </p>\r
                            <p\r
                                *ngIf="getRecipientCompany()"\r
                                class="mt-2 text-lg font-semibold leading-snug text-stone-900 dark:text-white"\r
                            >\r
                                {{ getRecipientCompany() }}\r
                            </p>\r
                            <p\r
                                *ngIf="getRecipientContactLine()"\r
                                class="mt-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300"\r
                            >\r
                                {{ getRecipientContactLine() }}\r
                            </p>\r
                        </div>\r
\r
                        <p\r
                            *ngIf="getCoverMessage()"\r
                            class="proposal-letterhead__cover-message text-sm leading-7 text-stone-600 dark:text-stone-300"\r
                            [class.mt-5]="showAddresseeBlock()"\r
                        >\r
                            {{ getCoverMessage() }}\r
                        </p>\r
                    </section>\r
\r
            <section *ngIf="showRevisionHistory()" class="proposal-letterhead__revisions mb-6 rounded-2xl border border-stone-200/90 bg-white p-4 text-sm print:hidden dark:border-zinc-800 dark:bg-zinc-900/70">\r
                <h2 class="text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.revisions.title' | transloco }}</h2>\r
                <ul class="mt-2 space-y-1 text-stone-600 dark:text-stone-300">\r
                    <li *ngIf="proposal.createdAt">\r
                        {{ 'proposal.revisions.createdOn' | transloco: { date: formatDateTime(proposal.createdAt) } }}\r
                    </li>\r
                    <li *ngFor="let revision of revisionTimeline">\r
                        {{ 'proposal.revisions.updatedDaysLater' | transloco: {\r
                            days: revision.daysSinceCreated,\r
                            date: formatDateTime(revision.revisedAt)\r
                        } }}\r
                    </li>\r
                </ul>\r
            </section>\r
\r
            <div *ngIf="isAccepted()" class="proposal-letterhead__banner mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 print:hidden dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200">\r
                <p class="font-medium">\r
                    {{ 'proposal.banners.acceptedTitle' | transloco }}<span *ngIf="proposal.acceptedAt">{{ 'proposal.banners.acceptedOn' | transloco: { date: formatDateTime(proposal.acceptedAt) } }}</span>.\r
                </p>\r
                <p class="mt-1 text-emerald-800 dark:text-emerald-300">{{ 'proposal.banners.acceptedHint' | transloco }}</p>\r
            </div>\r
\r
            <div *ngIf="isCounterOfferSubmitted() && !showCounterForm" class="proposal-letterhead__banner mb-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900 print:hidden dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200">\r
                <p class="font-medium">\r
                    {{ 'proposal.banners.counterTitle' | transloco }}<span *ngIf="proposal.counterOffer?.submittedAt">{{ 'proposal.banners.counterOn' | transloco: { date: formatDateTime(proposal.counterOffer?.submittedAt) } }}</span>.\r
                </p>\r
                <p *ngIf="proposal.counterOffer?.message" class="mt-2 text-orange-800 dark:text-orange-100">{{ proposal.counterOffer?.message }}</p>\r
                <p class="mt-2 text-orange-800 dark:text-orange-300">{{ 'proposal.banners.counterHint' | transloco }}</p>\r
            </div>\r
\r
            <section\r
                *ngIf="showScopeSection() && scopeSummary as scope"\r
                class="proposal-letterhead__section proposal-letterhead__scope proposal-letterhead__section--print mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm print:mb-4 print:p-4 print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70"\r
            >\r
                <p class="text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.sections.scope' | transloco }}</p>\r
                <p class="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{{ 'proposal.scope.intro' | transloco }}</p>\r
                <h3 class="mt-4 text-sm font-semibold text-stone-900 dark:text-white">{{ 'proposal.scope.sampleTitle' | transloco }}</h3>\r
                <div class="mt-4 grid gap-4 sm:grid-cols-3">\r
                    <div>\r
                        <p class="text-xs text-stone-500">{{ 'proposal.scope.countries' | transloco }}</p>\r
                        <p class="mt-1 text-sm font-medium text-stone-900 dark:text-white">{{ scope.countries.join(', ') || '\u2014' }}</p>\r
                    </div>\r
                    <div>\r
                        <p class="text-xs text-stone-500">{{ 'proposal.scope.endpoints' | transloco }}</p>\r
                        <p class="mt-1 text-sm font-medium text-stone-900 dark:text-white">{{ scope.endpointCount | number }}</p>\r
                    </div>\r
                    <div>\r
                        <p class="text-xs text-stone-500">{{ 'proposal.scope.categories' | transloco }}</p>\r
                        <p class="mt-1 text-sm font-medium text-stone-900 dark:text-white">{{ formattedScopeCategories }}</p>\r
                    </div>\r
                </div>\r
                <div class="mt-4">\r
                    <h4 class="text-sm font-semibold text-stone-900 dark:text-white">{{ 'proposal.scope.implementationTitle' | transloco }}</h4>\r
                    <p class="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">{{ getScopeImplementationBody() }}</p>\r
                </div>\r
                <a\r
                    class="mt-4 inline-flex text-sm font-medium text-verifikBrand-600 hover:text-verifikBrand-700 print:hidden dark:text-verifikBrand-400"\r
                    href="https://docs.verifik.co"\r
                    target="_blank"\r
                    rel="noopener noreferrer"\r
                >\r
                    {{ 'proposal.scope.docsLink' | transloco }} \u2192\r
                </a>\r
            </section>\r
\r
            <section\r
                *ngIf="showSlaSection()"\r
                class="proposal-letterhead__section proposal-letterhead__sla proposal-letterhead__section--breakable mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm print:mb-4 print:p-4 print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70"\r
            >\r
                <p class="text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.sections.sla' | transloco }}</p>\r
\r
                <div class="mt-4 space-y-6 text-sm text-stone-600 dark:text-stone-300">\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.channelsTitle' | transloco }}</h3>\r
                        <ul class="mt-2 list-disc space-y-1 pl-5">\r
                            <li *ngFor="let channel of getTranslationArray('proposal.sla.channels')">{{ channel }}</li>\r
                        </ul>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.hoursTitle' | transloco }}</h3>\r
                        <p class="mt-2">{{ 'proposal.sla.hours' | transloco }}</p>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.severityTitle' | transloco }}</h3>\r
                        <ul class="mt-2 list-disc space-y-1 pl-5">\r
                            <li *ngFor="let severity of getTranslationArray('proposal.sla.severities')">{{ severity }}</li>\r
                        </ul>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.responseTitle' | transloco }}</h3>\r
                        <p class="mt-2 text-xs font-medium text-stone-500">{{ 'proposal.sla.definitionsTitle' | transloco }}</p>\r
                        <ul class="mt-2 list-disc space-y-1 pl-5">\r
                            <li *ngFor="let definition of getTranslationArray('proposal.sla.definitions')">{{ definition }}</li>\r
                        </ul>\r
                        <div class="proposal-letterhead__sla-table mt-4 overflow-x-auto">\r
                            <table class="mt-2 min-w-full text-left text-xs">\r
                                <thead class="border-b border-stone-200 bg-stone-50 text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/40">\r
                                    <tr>\r
                                        <th *ngFor="let header of getTranslationArray('proposal.sla.responseHeaders')" class="px-3 py-2">{{ header }}</th>\r
                                    </tr>\r
                                </thead>\r
                                <tbody>\r
                                    <tr *ngFor="let rowKey of slaResponseRowKeys" class="border-b border-stone-100 dark:border-zinc-800">\r
                                        <td *ngFor="let cell of getSlaResponseRow(rowKey)" class="px-3 py-2">{{ cell }}</td>\r
                                    </tr>\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                        <p class="mt-3 text-sm text-stone-600 dark:text-stone-300">{{ 'proposal.sla.responseNote' | transloco }}</p>\r
                    </div>\r
\r
                    <div class="proposal-letterhead__sla-table overflow-x-auto">\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.availabilityTitle' | transloco }}</h3>\r
                        <table class="mt-2 min-w-full text-left text-xs">\r
                            <thead class="border-b border-stone-200 bg-stone-50 text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/40">\r
                                <tr>\r
                                    <th *ngFor="let header of getTranslationArray('proposal.sla.availabilityHeaders')" class="px-3 py-2">{{ header }}</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                <tr *ngFor="let rowKey of slaAvailabilityRowKeys" class="border-b border-stone-100 dark:border-zinc-800">\r
                                    <td *ngFor="let cell of getSlaAvailabilityRow(rowKey)" class="px-3 py-2">{{ cell }}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                    </div>\r
\r
                    <div class="proposal-letterhead__sla-table overflow-x-auto">\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.compensationTitle' | transloco }}</h3>\r
                        <p class="mt-2 text-sm text-stone-600 dark:text-stone-300">{{ 'proposal.sla.compensationIntro' | transloco }}</p>\r
                        <table class="mt-3 min-w-full text-left text-xs">\r
                            <thead class="border-b border-stone-200 bg-stone-50 text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/40">\r
                                <tr>\r
                                    <th *ngFor="let header of getTranslationArray('proposal.sla.compensationHeaders')" class="px-3 py-2">{{ header }}</th>\r
                                </tr>\r
                            </thead>\r
                            <tbody>\r
                                <tr *ngFor="let rowKey of slaCompensationRowKeys" class="border-b border-stone-100 dark:border-zinc-800">\r
                                    <td *ngFor="let cell of getSlaCompensationRow(rowKey)" class="px-3 py-2">{{ cell }}</td>\r
                                </tr>\r
                            </tbody>\r
                        </table>\r
                        <p class="mt-3 text-sm text-stone-600 dark:text-stone-300">{{ 'proposal.sla.compensationDisclaimer' | transloco }}</p>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.billingTitle' | transloco }}</h3>\r
                        <p class="mt-2 text-sm text-stone-600 dark:text-stone-300">{{ 'proposal.sla.billingIntro' | transloco }}</p>\r
                        <div class="proposal-letterhead__sla-table mt-3 overflow-x-auto">\r
                            <h4 class="text-sm font-medium text-stone-800 dark:text-stone-200">{{ 'proposal.sla.billingTableTitle' | transloco }}</h4>\r
                            <table class="mt-2 min-w-full text-left text-xs">\r
                                <thead class="border-b border-stone-200 bg-stone-50 text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/40">\r
                                    <tr>\r
                                        <th *ngFor="let header of getTranslationArray('proposal.sla.billingHeaders')" class="px-3 py-2">{{ header }}</th>\r
                                    </tr>\r
                                </thead>\r
                                <tbody>\r
                                    <tr *ngFor="let rowKey of slaBillingRowKeys" class="border-b border-stone-100 dark:border-zinc-800">\r
                                        <td *ngFor="let cell of getSlaBillingRow(rowKey)" class="px-3 py-2">{{ cell }}</td>\r
                                    </tr>\r
                                </tbody>\r
                            </table>\r
                        </div>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.maintenanceTitle' | transloco }}</h3>\r
                        <p class="mt-2">{{ 'proposal.sla.maintenance' | transloco }}</p>\r
                    </div>\r
\r
                    <div>\r
                        <h3 class="font-semibold text-stone-900 dark:text-white">{{ 'proposal.sla.adaptationsTitle' | transloco }}</h3>\r
                        <p class="mt-2">{{ 'proposal.sla.adaptations' | transloco }}</p>\r
                    </div>\r
                </div>\r
            </section>\r
\r
            <section class="proposal-letterhead__section proposal-letterhead__commercial mb-6">\r
                <p class="mb-4 text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.sections.commercial' | transloco }}</p>\r
\r
            <div class="mb-6 grid gap-4 sm:grid-cols-2">\r
                <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">\r
                    <p class="text-xs text-stone-500">{{ 'proposal.volume' | transloco }}</p>\r
                    <p class="text-2xl font-semibold text-stone-900 dark:text-white">{{ proposal.monthlyVolume | number }}</p>\r
                </div>\r
                <div class="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm ring-1 ring-stone-300 dark:border-zinc-800 dark:bg-zinc-900/70 dark:ring-zinc-600">\r
                    <p class="text-xs text-stone-500">{{ 'proposal.recommendedPlan' | transloco }}</p>\r
                    <p class="text-2xl font-semibold text-stone-900 dark:text-white">{{ getTierLabel(getEffectiveTier()) }}</p>\r
                </div>\r
            </div>\r
\r
            <div class="proposal-letterhead__pricing overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm print:overflow-visible print:shadow-none dark:border-zinc-800 dark:bg-zinc-900/70">\r
                <div class="overflow-x-auto">\r
                    <table class="min-w-full text-left text-sm">\r
                        <thead class="border-b border-stone-200 bg-stone-100/80 text-xs uppercase text-stone-600 dark:border-zinc-800 dark:bg-zinc-900">\r
                            <tr>\r
                                <th class="px-4 py-3">{{ 'proposal.table.service' | transloco }}</th>\r
                                <th *ngIf="isPerEndpointVolume()" class="px-4 py-3">{{ 'proposal.table.endpointVolume' | transloco }}</th>\r
                                <th class="px-4 py-3" *ngFor="let tier of displayTiers" [class.bg-stone-200]="isTierRecommended(tier)" [ngClass]="{'dark:bg-zinc-800': isTierRecommended(tier)}">\r
                                    {{ getTierLabel(tier) }}\r
                                </th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr *ngFor="let item of getSelectedLineItems()" class="border-b border-stone-100 dark:border-zinc-800">\r
                                <td class="px-4 py-3">\r
                                    <p class="font-medium">{{ item.serviceName }}</p>\r
                                    <p *ngIf="item.url" class="mt-0.5 truncate font-mono text-xs text-stone-400">{{ item.url }}</p>\r
                                    <p class="text-xs text-stone-500">{{ getCategoryLabel(item.category) }} \xB7 {{ item.country }}</p>\r
                                </td>\r
                                <td *ngIf="isPerEndpointVolume()" class="px-4 py-3 tabular-nums text-stone-500">\r
                                    {{ item.monthlyVolume | number }}\r
                                </td>\r
                                <ng-container *ngFor="let tier of displayTiers">\r
                                    <td class="px-4 py-3" [class.bg-stone-50]="isTierRecommended(tier)" [ngClass]="{'dark:bg-zinc-900/50': isTierRecommended(tier)}">\r
                                        <ng-container *ngIf="showCounterForm && isTierRecommended(tier); else readOnlyCell">\r
                                            <p class="text-xs text-stone-400">\r
                                                <span class="font-medium">{{ 'proposal.table.original' | transloco }}:</span>\r
                                                {{ formatPrice(getOriginalPrice(item, tier)) }}\r
                                            </p>\r
                                            <p class="text-xs text-stone-500">\r
                                                <span class="font-medium">{{ 'proposal.table.ourOffer' | transloco }}:</span>\r
                                                {{ formatPrice(getOurOfferPrice(item, tier)) }}\r
                                            </p>\r
                                            <div class="mt-1 flex items-center gap-0.5">\r
                                                <span class="text-xs text-stone-400">$</span>\r
                                                <input\r
                                                    type="number"\r
                                                    min="0"\r
                                                    step="0.01"\r
                                                    class="w-20 rounded-lg border border-stone-200 px-2 py-1 text-sm tabular-nums dark:border-zinc-700 dark:bg-zinc-900/50"\r
                                                    [value]="getCounterInputValue(item)"\r
                                                    (blur)="onCounterPriceBlur(item, $any($event.target).value)"\r
                                                    (keydown.enter)="onCounterPriceBlur(item, $any($event.target).value)"\r
                                                />\r
                                            </div>\r
                                            <p class="mt-0.5 text-xs text-stone-400">{{ 'proposal.table.yourPrice' | transloco }}</p>\r
                                        </ng-container>\r
                                        <ng-template #readOnlyCell>\r
                                            <ng-container *ngIf="isCounterOfferSubmitted() && isTierRecommended(tier) && hasClientCounterPriceChange(item, tier); else simplePrice">\r
                                                <p class="tabular-nums font-semibold text-orange-700 dark:text-orange-300">\r
                                                    {{ formatPrice(getClientCounterPrice(item, tier)) }}\r
                                                </p>\r
                                                <p class="text-xs text-stone-400 line-through">\r
                                                    {{ 'proposal.table.original' | transloco }}: {{ formatPrice(getOriginalPrice(item, tier)) }}\r
                                                </p>\r
                                                <p class="text-xs text-stone-500 line-through">\r
                                                    {{ 'proposal.table.ourOffer' | transloco }}: {{ formatPrice(getOurOfferPrice(item, tier)) }}\r
                                                </p>\r
                                            </ng-container>\r
                                            <ng-template #simplePrice>\r
                                                <p class="tabular-nums">{{ formatPrice(getDisplayPrice(item, tier)) }}</p>\r
                                            </ng-template>\r
                                        </ng-template>\r
                                    </td>\r
                                </ng-container>\r
                            </tr>\r
                        </tbody>\r
                        <tfoot *ngIf="activePricingSummary" class="border-t bg-stone-50 text-xs dark:bg-zinc-900/40">\r
                            <tr *ngIf="proposal.includePlanMinimum !== false">\r
                                <td [attr.colspan]="isPerEndpointVolume() ? 2 : 1" class="px-4 py-2 font-medium text-stone-500">{{ 'proposal.table.planMinimum' | transloco }}</td>\r
                                <ng-container *ngFor="let tier of displayTiers">\r
                                    <td class="px-4 py-2 tabular-nums text-stone-500" [class.bg-stone-100]="isTierRecommended(tier)">\r
                                        {{ formatPrice(getSummaryValue(tier, 'planSubscriptionFee')) }}\r
                                    </td>\r
                                </ng-container>\r
                            </tr>\r
                            <tr>\r
                                <td [attr.colspan]="isPerEndpointVolume() ? 2 : 1" class="px-4 py-2 font-medium text-stone-500">\r
                                    <span>{{ getUsageCostLabelKey() | transloco }}</span>\r
                                    <span class="mt-0.5 block font-normal text-stone-400">{{\r
                                        'proposal.table.usageCostVolumeHint' | transloco: { volume: (proposal.monthlyVolume | number) || '' }\r
                                    }}</span>\r
                                </td>\r
                                <ng-container *ngFor="let tier of displayTiers">\r
                                    <td class="px-4 py-2 tabular-nums text-stone-500" [class.bg-stone-100]="isTierRecommended(tier)">\r
                                        <span>{{ formatPrice(getSummaryValue(tier, 'usageCost')) }}</span>\r
                                        <span *ngIf="getUsageCellHint(tier)" class="mt-0.5 block font-normal normal-case tracking-normal text-stone-400">\r
                                            {{ getUsageCellHint(tier) }}\r
                                        </span>\r
                                        <span *ngIf="calculating && isTierRecommended(tier)" class="ml-1 text-stone-400">\u2026</span>\r
                                    </td>\r
                                </ng-container>\r
                            </tr>\r
                            <tr>\r
                                <td [attr.colspan]="isPerEndpointVolume() ? 2 : 1" class="px-4 py-2 font-medium text-stone-900 dark:text-white">\r
                                    <span>{{ 'proposal.table.quotedTotal' | transloco }}</span>\r
                                    <span class="mt-0.5 block font-normal text-stone-400">{{ 'proposal.table.quotedTotalHint' | transloco }}</span>\r
                                </td>\r
                                <ng-container *ngFor="let tier of displayTiers">\r
                                    <td class="px-4 py-2 text-sm font-semibold tabular-nums" [class.bg-stone-200]="isTierRecommended(tier)" [ngClass]="{'dark:bg-zinc-800': isTierRecommended(tier)}">\r
                                        {{ formatPrice(getSummaryValue(tier, 'quotedMonthlyTotal')) }}\r
                                    </td>\r
                                </ng-container>\r
                            </tr>\r
                        </tfoot>\r
                    </table>\r
                </div>\r
            </div>\r
\r
            <div\r
                *ngIf="activePaymentOptions.length"\r
                class="proposal-letterhead__payment mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/70"\r
            >\r
                <div class="border-b border-stone-200 px-5 py-4 dark:border-zinc-800">\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">\r
                        {{ 'proposal.paymentOptions.title' | transloco }}\r
                    </h3>\r
                    <p class="mt-1 text-xs text-stone-500">\r
                        {{ 'proposal.paymentOptions.basedOnMonthly' | transloco: { tier: getTierLabel(getEffectiveTier()) } }}\r
                    </p>\r
                </div>\r
                <div class="overflow-x-auto">\r
                    <table class="min-w-full text-left text-sm">\r
                        <thead class="border-b border-stone-200 bg-stone-50 text-xs uppercase text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/40">\r
                            <tr>\r
                                <th class="px-4 py-3">{{ 'proposal.paymentOptions.plan' | transloco }}</th>\r
                                <th class="px-4 py-3">{{ 'proposal.paymentOptions.period' | transloco }}</th>\r
                                <th class="px-4 py-3">{{ 'proposal.paymentOptions.total' | transloco }}</th>\r
                                <th class="px-4 py-3">{{ 'proposal.paymentOptions.notes' | transloco }}</th>\r
                            </tr>\r
                        </thead>\r
                        <tbody>\r
                            <tr *ngFor="let option of activePaymentOptions" class="border-b border-stone-100 dark:border-zinc-800">\r
                                <td class="px-4 py-3 font-medium text-stone-900 dark:text-white">\r
                                    {{ ('proposal.paymentOptions.types.' + option.type) | transloco }}\r
                                </td>\r
                                <td class="px-4 py-3 text-stone-600 dark:text-stone-300">\r
                                    {{ 'proposal.paymentOptions.months' | transloco: { count: option.monthsInPeriod } }}\r
                                </td>\r
                                <td class="px-4 py-3 font-semibold tabular-nums text-stone-900 dark:text-white">\r
                                    {{ formatPrice(option.totalAmount) }}\r
                                </td>\r
                                <td class="px-4 py-3 text-xs text-stone-500 dark:text-stone-400">\r
                                    <span\r
                                        *ngIf="getPromoDiscount(option) as discount"\r
                                        class="inline-flex rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"\r
                                    >\r
                                        {{ 'proposal.paymentOptions.promoOff' | transloco: { amount: formatPrice(discount) } }}\r
                                    </span>\r
                                </td>\r
                            </tr>\r
                        </tbody>\r
                    </table>\r
                </div>\r
            </div>\r
\r
            <div\r
                *ngIf="showCommercialNotes()"\r
                class="proposal-letterhead__commercial-notes mt-6 space-y-6 text-sm text-stone-600 dark:text-stone-300"\r
            >\r
                <div>\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">{{ 'proposal.commercial.monthlyOptionTitle' | transloco }}</h3>\r
                    <p class="mt-1 text-xs text-stone-500">{{ 'proposal.commercial.monthlySubtitle' | transloco }}</p>\r
                    <ul class="mt-3 list-disc space-y-2 pl-5">\r
                        <li *ngFor="let note of getTranslationArray('proposal.commercial.monthlyNotes')">{{ note }}</li>\r
                    </ul>\r
                </div>\r
                <div>\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">{{ 'proposal.commercial.annualOptionTitle' | transloco }}</h3>\r
                    <p class="mt-1 text-xs text-stone-500">{{ 'proposal.commercial.annualSubtitle' | transloco }}</p>\r
                    <ul class="mt-3 list-disc space-y-2 pl-5">\r
                        <li *ngFor="let note of getTranslationArray('proposal.commercial.annualNotes')">{{ note }}</li>\r
                    </ul>\r
                </div>\r
                <div>\r
                    <h3 class="text-sm font-semibold text-stone-900 dark:text-white">{{ 'proposal.commercial.additionalsTitle' | transloco }}</h3>\r
                    <ul class="mt-3 list-disc space-y-2 pl-5">\r
                        <li *ngFor="let item of getTranslationArray('proposal.commercial.additionals')">{{ item }}</li>\r
                    </ul>\r
                </div>\r
            </div>\r
            </section>\r
\r
            <section\r
                *ngIf="showGeneralitiesSection()"\r
                class="proposal-letterhead__section proposal-letterhead__generalities mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"\r
            >\r
                <p class="text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.sections.generalities' | transloco }}</p>\r
                <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-stone-600 dark:text-stone-300">\r
                    <li *ngFor="let item of getTranslationArray('proposal.generalities.items')">{{ item }}</li>\r
                </ul>\r
            </section>\r
\r
            <section\r
                class="proposal-letterhead__section proposal-letterhead__validity mb-6 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70"\r
            >\r
                <p class="text-xs font-semibold uppercase tracking-wide text-stone-500">{{ 'proposal.sections.validity' | transloco }}</p>\r
                <p *ngIf="hasExpirationDate()" class="mt-3 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ 'proposal.validitySection.until' | transloco }} {{ formatDateTime(proposal.expiresAt!) }}.\r
                </p>\r
                <p *ngIf="isForeverExpiration()" class="mt-3 text-sm text-stone-600 dark:text-stone-300">\r
                    {{ 'proposal.validitySection.noExpiration' | transloco }}\r
                </p>\r
            </section>\r
\r
            <div *ngIf="canRespond() && !showCounterForm" class="proposal-letterhead__actions mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center print:hidden">\r
                <button\r
                    *ngIf="!isAccepted() && !isCounterOfferSubmitted()"\r
                    type="button"\r
                    class="min-w-[160px] rounded-xl bg-stone-950 px-6 py-3 text-sm font-medium text-white disabled:opacity-50 dark:bg-white dark:text-zinc-950"\r
                    [disabled]="responding"\r
                    (click)="accept()"\r
                >\r
                    {{ 'proposal.actions.accept' | transloco }}\r
                </button>\r
                <button\r
                    *ngIf="isAccepted()"\r
                    type="button"\r
                    class="min-w-[160px] rounded-xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 disabled:opacity-50 dark:border-zinc-600 dark:text-zinc-200"\r
                    [disabled]="responding"\r
                    (click)="revokeAcceptance()"\r
                >\r
                    {{ 'proposal.actions.withdraw' | transloco }}\r
                </button>\r
                <button\r
                    type="button"\r
                    class="min-w-[160px] rounded-xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 dark:border-zinc-600 dark:text-zinc-200"\r
                    (click)="openCounterForm()"\r
                >\r
                    {{ (isCounterOfferSubmitted() ? 'proposal.actions.reviseCounter' : 'proposal.actions.sendCounter') | transloco }}\r
                </button>\r
            </div>\r
\r
            <form *ngIf="showCounterForm" [formGroup]="counterForm" class="proposal-letterhead__counter-form mt-6 rounded-2xl border border-stone-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/70 print:hidden" (ngSubmit)="submitCounterOffer()">\r
                <p class="text-sm font-medium text-stone-900 dark:text-white">{{ 'proposal.counter.title' | transloco }}</p>\r
                <p class="mt-1 text-xs text-stone-500">{{ 'proposal.counter.hint' | transloco: { tier: getTierLabel(getEffectiveTier()) } }}</p>\r
                <textarea formControlName="message" rows="4" class="mt-3 w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm dark:border-zinc-700 dark:bg-zinc-900/50" [placeholder]="'proposal.counter.placeholder' | transloco"></textarea>\r
                <div class="mt-4 flex justify-end gap-2">\r
                    <button type="button" class="rounded-xl border border-stone-300 px-4 py-2 text-sm text-stone-700 dark:border-zinc-600 dark:text-zinc-200" (click)="closeCounterForm()">\r
                        {{ 'proposal.counter.cancel' | transloco }}\r
                    </button>\r
                    <button type="submit" class="rounded-xl bg-stone-950 px-4 py-2 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-zinc-950" [disabled]="responding || counterForm.invalid">\r
                        {{ 'proposal.counter.submit' | transloco }}\r
                    </button>\r
                </div>\r
            </form>\r
\r
                    <footer class="proposal-letterhead__footer mt-10 border-t border-stone-200 pt-6 text-center text-xs text-stone-500 dark:border-zinc-800">\r
                        <p>{{ 'proposal.footer.tagline' | transloco }}</p>\r
                        <a\r
                            class="mt-1 inline-block font-medium text-verifikBrand-600 hover:text-verifikBrand-700 dark:text-verifikBrand-400 dark:hover:text-verifikBrand-300"\r
                            href="https://verifik.co"\r
                            target="_blank"\r
                            rel="noopener noreferrer"\r
                        >\r
                            {{ 'proposal.footer.website' | transloco }}\r
                        </a>\r
                    </footer>\r
                </div>\r
            </article>\r
        </ng-container>\r
    </div>\r
</div>\r
`, styles: ["/* src/app/modules/proposal/proposal-viewer.component.scss */\n.proposal-letterhead__scope,\n.proposal-letterhead__validity,\n.proposal-letterhead__generalities,\n.proposal-letterhead__commercial-notes {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n.proposal-letterhead__sla,\n.proposal-letterhead__section--breakable {\n  break-inside: auto;\n  page-break-inside: auto;\n}\n.proposal-letterhead__sla-table tr,\n.proposal-letterhead__pricing tr,\n.proposal-letterhead__payment tr {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n.proposal-letterhead__print-banner {\n  display: none;\n}\n.proposal-letterhead__accent {\n  -webkit-print-color-adjust: exact;\n  print-color-adjust: exact;\n}\n.proposal-letterhead__cover-letter {\n  break-inside: avoid;\n  page-break-inside: avoid;\n}\n@media print {\n  @page {\n    margin: 0 10mm 10mm;\n    size: auto;\n  }\n  :host {\n    display: block;\n    margin: 0 !important;\n    padding: 0 !important;\n    -webkit-print-color-adjust: exact;\n    print-color-adjust: exact;\n  }\n  .min-h-screen,\n  .mx-auto.max-w-5xl {\n    min-height: auto !important;\n    max-width: none !important;\n    background: #fff !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n  .proposal-letterhead {\n    border: none !important;\n    box-shadow: none !important;\n    background: #fff !important;\n    border-radius: 0 !important;\n    overflow: visible !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  .proposal-letterhead__accent--print {\n    display: block !important;\n    height: 4px !important;\n    margin: 0 !important;\n    background:\n      linear-gradient(\n        to right,\n        #2b3af0,\n        #5b69ff) !important;\n  }\n  .proposal-letterhead__print-banner {\n    display: block !important;\n    margin: 0 !important;\n    padding: 0 !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n    break-after: avoid;\n    page-break-after: avoid;\n  }\n  .proposal-letterhead__print-logo {\n    display: block !important;\n  }\n  .proposal-letterhead__logo-dark {\n    display: none !important;\n  }\n  .proposal-letterhead__logo-light {\n    display: none !important;\n  }\n  .proposal-letterhead__header {\n    break-inside: avoid;\n    page-break-inside: avoid;\n    break-after: avoid;\n    page-break-after: avoid;\n    padding-top: 0 !important;\n  }\n  .proposal-letterhead__metadata {\n    margin-top: 0.5rem !important;\n  }\n  .proposal-letterhead__cover-letter {\n    margin-top: 0.75rem !important;\n    margin-bottom: 0.75rem !important;\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__section--print,\n  .proposal-letterhead__scope,\n  .proposal-letterhead__validity,\n  .proposal-letterhead__generalities,\n  .proposal-letterhead__commercial-notes {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__sla,\n  .proposal-letterhead__section--breakable,\n  .proposal-letterhead__commercial {\n    break-inside: auto !important;\n    page-break-inside: auto !important;\n  }\n  .proposal-letterhead__sla-table,\n  .proposal-letterhead__pricing,\n  .proposal-letterhead__payment {\n    break-inside: auto !important;\n    page-break-inside: auto !important;\n    overflow: visible !important;\n  }\n  .proposal-letterhead__sla-table h3,\n  .proposal-letterhead__section > p:first-child {\n    break-after: avoid;\n    page-break-after: avoid;\n  }\n  .proposal-letterhead__sla-table table,\n  .proposal-letterhead__pricing table,\n  .proposal-letterhead__payment table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 10px;\n  }\n  .proposal-letterhead__sla-table thead,\n  .proposal-letterhead__pricing thead,\n  .proposal-letterhead__payment thead {\n    display: table-header-group;\n  }\n  .proposal-letterhead__sla-table tr,\n  .proposal-letterhead__pricing tr,\n  .proposal-letterhead__payment tr {\n    break-inside: avoid;\n    page-break-inside: avoid;\n  }\n  .proposal-letterhead__sla .space-y-6 > div {\n    break-inside: auto;\n    page-break-inside: auto;\n  }\n  .overflow-x-auto {\n    overflow: visible !important;\n  }\n  .dark\\:bg-zinc-900\\/70,\n  .dark\\:bg-zinc-900,\n  .dark\\:bg-zinc-950,\n  .dark\\:text-white,\n  .dark\\:text-stone-300,\n  .dark\\:border-zinc-800 {\n    background: #fff !important;\n    color: #1c1917 !important;\n    border-color: #e7e5e4 !important;\n  }\n  .print\\:hidden {\n    display: none !important;\n  }\n  .hidden.print\\:block {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=proposal-viewer.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ProposalPublicService }, { type: FormBuilder }, { type: TranslocoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProposalViewerComponent, { className: "ProposalViewerComponent", filePath: "src/app/modules/proposal/proposal-viewer.component.ts", lineNumber: 74 });
})();
export {
  ProposalViewerComponent
};
//# sourceMappingURL=chunk-VWICOP5Q.js.map
