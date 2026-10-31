import {
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    SecurityContext,
    ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { marked } from 'marked';
import { ComplianceCardComponent } from 'app/modules/compliance/card/compliance-card.component';
import { ComplianceCtaComponent } from 'app/modules/compliance/cta/compliance-cta.component';
import { ComplianceHeaderComponent } from 'app/modules/compliance/header/compliance-header.component';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
    ComplianceBlogService,
    CompliancePost,
} from 'app/modules/compliance/compliance-blog.service';
import {
    COMPLIANCE_COPY,
    ComplianceCopy,
    complianceHomePath,
    complianceLocale,
    compliancePostPath,
} from 'app/modules/compliance/compliance-copy';
import { applyComplianceMeta, clearComplianceMeta } from 'app/modules/compliance/compliance-seo';
import {
    ComplianceCategory,
    ComplianceCountry,
    ComplianceLocale,
    findCategory,
    findCountry,
} from 'app/modules/compliance/compliance-taxonomy';
import {
    authorInitials,
    authorPhoto,
    flagSrc,
    formatComplianceDate,
    readingMinutes,
} from 'app/modules/compliance/compliance.utils';

interface TocEntry {
    id: string;
    text: string;
}

const RELATED = 3;

// Article page of the Centro de Cumplimiento (Open-Verifik/app.verifik.co#1129): /cumplimiento/:country/:slug and /en/compliance/:country/:slug
@Component({
    selector: 'compliance-post',
    templateUrl: './compliance-post.component.html',
    styleUrls: ['./compliance-post.component.scss'],
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
export class CompliancePostComponent implements OnInit, OnDestroy {
    @ViewChild('content') contentRef: ElementRef<HTMLElement>;

    locale: ComplianceLocale = 'es';
    copy: ComplianceCopy = COMPLIANCE_COPY.es;
    post: CompliancePost = null;
    html: SafeHtml = '';
    related: CompliancePost[] = [];
    alternateUrl: string;
    loading = true;
    toc: TocEntry[] = [];
    activeHeading: string = null;
    photoFailed = false;

    private _previousTitle: string;
    private _subscription: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _blog: ComplianceBlogService,
        private _title: Title,
        private _meta: Meta,
        private _sanitizer: DomSanitizer
    ) {}

    get homePath(): string {
        return complianceHomePath(this.locale);
    }

    get category(): ComplianceCategory | undefined {
        return findCategory(this.post?.category);
    }

    get country(): ComplianceCountry | undefined {
        return findCountry(this.post?.country);
    }

    get flag(): string {
        return flagSrc(this.country.flag);
    }

    get date(): string {
        return formatComplianceDate(this.post?.date, this.locale);
    }

    get minRead(): string {
        return this.copy.minRead(readingMinutes(this.post?.content));
    }

    get author(): string {
        return this.post?.author || this.copy.defaultAuthor;
    }

    get photo(): string | null {
        return this.post?.authorImage || authorPhoto(this.post?.author);
    }

    get initials(): string {
        return authorInitials(this.author);
    }

    get shareLinks(): { name: string; key: string; url: string }[] {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(this.post?.title || '');

        return [
            {
                name: 'LinkedIn',
                key: 'linkedin',
                url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            },
            {
                name: 'X',
                key: 'x',
                url: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            },
            {
                name: 'Facebook',
                key: 'facebook',
                url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            },
        ];
    }

    ngOnInit(): void {
        this.locale = complianceLocale(this._route);
        this.copy = COMPLIANCE_COPY[this.locale];
        this._previousTitle = this._title.getTitle();

        this._subscription = this._route.paramMap
            .pipe(
                switchMap((params) => {
                    this.loading = true;
                    this.toc = [];
                    this.photoFailed = false;

                    return this._blog
                        .getPost(params.get('slug'), this.locale)
                        .pipe(
                            switchMap((post) =>
                                post
                                    ? this._loadExtras(post).pipe(
                                          map((extras) => ({
                                              post,
                                              ...extras,
                                              country: params.get('country'),
                                          }))
                                      )
                                    : of({ post, related: [], alternateUrl: null, country: null })
                            )
                        );
                })
            )
            .subscribe(({ post, related, alternateUrl, country }) => {
                this.post = post;
                this.html = this._render(post?.content);
                this.related = related;
                this.alternateUrl =
                    alternateUrl || complianceHomePath(this.locale === 'es' ? 'en' : 'es');
                this.loading = false;

                applyComplianceMeta(this._title, this._meta, {
                    title: post ? `${post.title} | Verifik` : this.copy.homeTitle,
                    description: post?.description,
                });

                // Keep one address per article: /cumplimiento/<its country>/<slug>
                if (post && country && country !== (post.country || 'latam')) {
                    this._router.navigateByUrl(
                        compliancePostPath(this.locale, post.country, post.slug),
                        { replaceUrl: true }
                    );
                }

                window.scrollTo(0, 0);

                // The article HTML is in the DOM after this change detection pass
                if (post) setTimeout(() => this._indexContent());
            });
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
        this._title.setTitle(this._previousTitle);
        clearComplianceMeta(this._meta);
    }

    scrollTo(event: Event, id: string): void {
        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    @HostListener('window:scroll')
    onScroll(): void {
        const current = this.toc
            .filter(
                (entry) =>
                    (document.getElementById(entry.id)?.getBoundingClientRect().top ?? Infinity) <
                    140
            )
            .pop();

        this.activeHeading = current?.id || this.toc[0]?.id || null;
    }

    private _loadExtras(
        post: CompliancePost
    ): Observable<{ related: CompliancePost[]; alternateUrl: string }> {
        const other: ComplianceLocale = this.locale === 'es' ? 'en' : 'es';

        // Same country first, then the latest posts from any country
        const related$ = forkJoin([
            this._blog.getPosts({
                locale: this.locale,
                country: post.country || undefined,
                limit: RELATED + 1,
            }),
            this._blog.getPosts({ locale: this.locale, limit: RELATED + 1 }),
        ]).pipe(
            map(([sameCountry, latest]) =>
                [...sameCountry, ...latest]
                    .filter(
                        (candidate, index, all) =>
                            candidate.slug !== post.slug &&
                            all.findIndex((item) => item.slug === candidate.slug) === index
                    )
                    .slice(0, RELATED)
            )
        );

        const alternate$ = this._blog
            .getTranslation(post, other)
            .pipe(
                map((translation) =>
                    translation
                        ? compliancePostPath(other, translation.country, translation.slug)
                        : complianceHomePath(other, post.country)
                )
            );

        return forkJoin([related$, alternate$]).pipe(
            map(([related, alternateUrl]) => ({ related, alternateUrl }))
        );
    }

    /** Markdown to sanitized HTML. Angular's sanitizer drops scripts and event handlers from author content. */
    private _render(markdown: string | undefined): SafeHtml {
        if (!markdown) return '';

        const html = marked.parse(markdown, { async: false }) as string;

        return this._sanitizer.bypassSecurityTrustHtml(
            this._sanitizer.sanitize(SecurityContext.HTML, html) || ''
        );
    }

    /** Builds the index from the rendered h2s and opens off-site links in a new tab. */
    private _indexContent(): void {
        const root = this.contentRef?.nativeElement;

        if (!root) return;

        const used = new Set<string>();

        this.toc = Array.from(root.querySelectorAll('h2')).map((heading, index) => {
            let id = this._slugify(heading.textContent) || `seccion-${index + 1}`;

            while (used.has(id)) id = `${id}-${index + 1}`;

            used.add(id);
            heading.id = id;

            return { id, text: heading.textContent.trim() };
        });

        root.querySelectorAll('a[href]').forEach((anchor: HTMLAnchorElement) => {
            if (anchor.hostname && anchor.hostname !== window.location.hostname) {
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
            }
        });

        this.onScroll();
    }

    private _slugify(text: string): string {
        return (text || '')
            .normalize('NFD')
            .replace(/[̀-ͯ]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
}
