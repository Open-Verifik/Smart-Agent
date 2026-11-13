import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ComplianceCardComponent } from 'app/modules/compliance/card/compliance-card.component';
import { ComplianceCtaComponent } from 'app/modules/compliance/cta/compliance-cta.component';
import { ComplianceHeaderComponent } from 'app/modules/compliance/header/compliance-header.component';
import { combineLatest, EMPTY, forkJoin, Observable, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
    ComplianceBlogService,
    CompliancePost,
    CompliancePostQuery,
} from 'app/modules/compliance/compliance-blog.service';
import {
    COMPLIANCE_COPY,
    ComplianceCopy,
    complianceHomePath,
    complianceLocale,
} from 'app/modules/compliance/compliance-copy';
import { applyComplianceMeta, clearComplianceMeta } from 'app/modules/compliance/compliance-seo';
import {
    COMPLIANCE_CATEGORIES,
    ComplianceCountry,
    ComplianceLocale,
    findCountry,
    findTopic,
} from 'app/modules/compliance/compliance-taxonomy';

const PAGE_SIZE = 10;
const FEATURED = 3;

// Landing of the Centro de Cumplimiento (Open-Verifik/app.verifik.co#1129): featured posts, then the latest ones with the topic
// filter, grid/list views and pages. Country, topics, search and page live in the URL so they can be shared.
@Component({
    selector: 'compliance-home',
    templateUrl: './compliance-home.component.html',
    styleUrls: ['./compliance-home.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatIconModule,
        ComplianceHeaderComponent,
        ComplianceCardComponent,
        ComplianceCtaComponent,
    ],
})
export class ComplianceHomeComponent implements OnInit, OnDestroy {
    @ViewChild('results') resultsRef: ElementRef<HTMLElement>;

    readonly categories = COMPLIANCE_CATEGORIES;

    locale: ComplianceLocale = 'es';
    copy: ComplianceCopy = COMPLIANCE_COPY.es;
    country: ComplianceCountry = null;
    query = '';
    topics: string[] = [];
    page = 1;
    featured: CompliancePost[] = [];
    posts: CompliancePost[] = [];
    total = 0;
    loading = true;
    view: 'grid' | 'list' = 'grid';
    filterOpen = false;
    collapsed = new Set<string>();

    private _previousTitle: string;
    private _subscription: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _blog: ComplianceBlogService,
        private _title: Title,
        private _meta: Meta
    ) {}

    get homePath(): string {
        return complianceHomePath(this.locale, this.country?.key);
    }

    get alternateUrl(): string {
        return complianceHomePath(this.locale === 'es' ? 'en' : 'es', this.country?.key);
    }

    get pageCount(): number {
        return Math.ceil(this.total / PAGE_SIZE);
    }

    /** Page numbers with `null` for the gaps: 1 … 4 5 6 … 20 */
    get pageItems(): (number | null)[] {
        const count = this.pageCount;

        if (count <= 7) return Array.from({ length: count }, (_, index) => index + 1);

        const near = [1, count, this.page - 1, this.page, this.page + 1].filter(
            (page) => page >= 1 && page <= count
        );
        const pages = Array.from(new Set(near)).sort((a, b) => a - b);

        return pages.reduce<(number | null)[]>((items, page, index) => {
            if (index > 0 && page - pages[index - 1] > 1) items.push(null);
            items.push(page);

            return items;
        }, []);
    }

    ngOnInit(): void {
        this.locale = complianceLocale(this._route);
        this.copy = COMPLIANCE_COPY[this.locale];
        this._previousTitle = this._title.getTitle();

        this._subscription = combineLatest([this._route.paramMap, this._route.queryParamMap])
            .pipe(
                switchMap(([params, query]) => {
                    const countryKey = params.get('country');

                    this.country = countryKey ? findCountry(countryKey) || null : null;

                    if (countryKey && !this.country) {
                        this._router.navigate([complianceHomePath(this.locale)], {
                            replaceUrl: true,
                        });

                        return EMPTY;
                    }

                    this.query = (query.get('q') || '').trim();
                    this.topics = (query.get('topics') || '')
                        .split(',')
                        .filter((key) => !!findTopic(key));
                    this.page = Math.max(1, Math.floor(Number(query.get('page'))) || 1);
                    this.filterOpen = this.filterOpen || this.topics.length > 0;
                    this.loading = true;
                    this._applyMeta();

                    return this._load();
                })
            )
            .subscribe(([featured, posts, total]) => {
                this.featured = featured;
                this.posts = posts;
                this.total = total;
                this.loading = false;
            });
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
        this._title.setTitle(this._previousTitle);
        clearComplianceMeta(this._meta);
    }

    topicLabel(key: string): string {
        return findTopic(key)?.label[this.locale] || key;
    }

    isSelected(key: string): boolean {
        return this.topics.includes(key);
    }

    toggleTopic(key: string): void {
        const topics = this.isSelected(key)
            ? this.topics.filter((topic) => topic !== key)
            : [...this.topics, key];

        this._setQuery({ topics: topics.length ? topics.join(',') : null, page: null });
    }

    clearTopics(): void {
        this._setQuery({ topics: null, page: null });
    }

    toggleGroup(key: string): void {
        if (this.collapsed.has(key)) {
            this.collapsed.delete(key);
        } else {
            this.collapsed.add(key);
        }
    }

    goToPage(page: number): void {
        if (page < 1 || page > this.pageCount || page === this.page) return;

        this._setQuery({ page: page > 1 ? page : null });
        this.resultsRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    private _setQuery(queryParams: Record<string, string | number | null>): void {
        this._router.navigate([], {
            relativeTo: this._route,
            queryParams,
            queryParamsHandling: 'merge',
        });
    }

    private _applyMeta(): void {
        const title = this.country
            ? `${this.copy.hubName} ${this.country.label[this.locale]} | Verifik`
            : this.copy.homeTitle;

        applyComplianceMeta(this._title, this._meta, {
            title,
            description: this.copy.homeDescription,
        });
    }

    private _load(): Observable<[CompliancePost[], CompliancePost[], number]> {
        const base: CompliancePostQuery = { locale: this.locale, country: this.country?.key };
        const filtered: CompliancePostQuery = { ...base, topics: this.topics, q: this.query };
        const showFeatured = this.page === 1 && !this.topics.length && !this.query;

        // Featured posts first, topped up with the latest ones so the block is never half empty
        const featured$ = showFeatured
            ? forkJoin([
                  this._blog.getPosts({ ...base, featured: true, limit: FEATURED }),
                  this._blog.getPosts({ ...base, limit: FEATURED }),
              ]).pipe(
                  map(([picked, latest]) =>
                      [
                          ...picked,
                          ...latest.filter(
                              (post) => !picked.some((other) => other.slug === post.slug)
                          ),
                      ].slice(0, FEATURED)
                  )
              )
            : of([]);

        return forkJoin([
            featured$,
            this._blog.getPosts({ ...filtered, page: this.page, limit: PAGE_SIZE }),
            this._blog.countPosts(filtered),
        ]);
    }
}
