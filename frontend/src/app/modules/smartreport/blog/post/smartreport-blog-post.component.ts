import {
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    OnInit,
    SecurityContext,
    ViewChild,
} from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { marked } from 'marked';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
    SmartReportBlogPost,
    SmartReportBlogService,
} from 'app/modules/smartreport/blog/smartreport-blog.service';
import {
    authorInitials,
    authorPhoto,
    formatBlogDate,
    readingMinutes,
} from 'app/modules/smartreport/blog/smartreport-blog.utils';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SmartReportHeaderComponent } from 'app/modules/smartreport/header/smartreport-header.component';
import { SmartReportFooterComponent } from 'app/modules/smartreport/footer/smartreport-footer.component';
import { SmartReportBlogCardComponent } from 'app/modules/smartreport/blog/card/smartreport-blog-card.component';

interface TocEntry {
    id: string;
    text: string;
}

// Blog article: clone of the Zelf post page (/blog/:slug) with the verifik.co article layout (#1127)
@Component({
    selector: 'smartreport-blog-post',
    templateUrl: './smartreport-blog-post.component.html',
    styleUrls: ['./smartreport-blog-post.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        SmartReportHeaderComponent,
        SmartReportFooterComponent,
        SmartReportBlogCardComponent,
    ],
})
export class SmartReportBlogPostComponent implements OnInit, OnDestroy {
    @ViewChild('content') contentRef: ElementRef<HTMLElement>;

    post: SmartReportBlogPost | null = null;
    html: SafeHtml = '';
    related: SmartReportBlogPost[] = [];
    loading = true;
    toc: TocEntry[] = [];
    activeHeading: string = null;
    progress = 0;
    photoFailed = false;

    private _previousTitle: string;
    private _subscription: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _blog: SmartReportBlogService,
        private _meta: Meta,
        private _title: Title,
        private _sanitizer: DomSanitizer
    ) {}

    get date(): string {
        return formatBlogDate(this.post?.date);
    }

    get minutes(): number {
        return readingMinutes(this.post?.content);
    }

    get photo(): string | null {
        return authorPhoto(this.post?.author);
    }

    get initials(): string {
        return authorInitials(this.post?.author);
    }

    get shareLinks(): { name: string; icon: string; url: string }[] {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(this.post?.title || '');

        return [
            {
                name: 'Facebook',
                icon: 'facebook',
                url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            },
            {
                name: 'X',
                icon: 'x',
                url: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            },
            {
                name: 'LinkedIn',
                icon: 'linkedin',
                url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            },
            {
                name: 'Threads',
                icon: 'threads',
                url: `https://www.threads.net/intent/post?text=${text}%20${url}`,
            },
        ];
    }

    ngOnInit(): void {
        this._previousTitle = this._title.getTitle();
        this._meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });

        this._subscription = this._route.paramMap
            .pipe(
                map((params) => params.get('slug')),
                switchMap((slug) => {
                    this.loading = true;
                    this.toc = [];
                    this.photoFailed = false;

                    return combineLatest([this._blog.getPost(slug), this._blog.getPosts()]);
                })
            )
            .subscribe(([post, posts]) => {
                this.post = post;
                this.html = this._render(post?.content);
                this.related = posts.filter((other) => other.slug !== post?.slug).slice(0, 3);
                this.loading = false;
                this._title.setTitle(post ? `${post.title} | smartREPORT` : 'Blog | smartREPORT');

                if (post?.description) {
                    this._meta.updateTag({ name: 'description', content: post.description });
                }

                window.scrollTo(0, 0);
                this.onContentReady();
            });
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
        this._title.setTitle(this._previousTitle);
        this._meta.removeTag('name="robots"');
        this._meta.removeTag('name="description"');
    }

    /** Builds the table of contents from the rendered h2s and opens off-site links in a new tab, like the Zelf blog. */
    onContentReady(): void {
        // The [innerHTML] binding renders on the next change detection, so read the DOM on the next tick.
        setTimeout(() => this._indexContent());
    }

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

    scrollTo(event: Event, id: string): void {
        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    @HostListener('window:scroll')
    onScroll(): void {
        const root = this.contentRef?.nativeElement;

        if (!root) return;

        const rect = root.getBoundingClientRect();
        const total = rect.height - window.innerHeight;

        this.progress =
            total > 0
                ? Math.min(100, Math.max(0, (-rect.top / total) * 100))
                : rect.top < 0
                  ? 100
                  : 0;

        const current = this.toc
            .filter(
                (entry) =>
                    (document.getElementById(entry.id)?.getBoundingClientRect().top ?? Infinity) <
                    140
            )
            .pop();

        this.activeHeading = current?.id || this.toc[0]?.id || null;
    }

    /** Markdown to sanitized HTML. Angular's sanitizer drops scripts and event handlers from author content. */
    private _render(markdown: string | undefined): SafeHtml {
        if (!markdown?.trim()) return '';

        const html = marked.parse(markdown, { async: false }) as string;

        return this._sanitizer.bypassSecurityTrustHtml(
            this._sanitizer.sanitize(SecurityContext.HTML, html) || ''
        );
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
