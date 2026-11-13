import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'environments/environment';

export interface SmartReportBlogPost {
    _id?: string;
    slug: string;
    title: string;
    description: string;
    author: string;
    date: string;
    image?: string;
    imageAlt?: string;
    tags: string[];
    categories: string[];
    content: string;
    faqs: SmartReportBlogFaq[];
}

export interface SmartReportBlogFaq {
    question: string;
    answer: string;
}

const SITE = 'smartreport';
// The Zelf admin stores FAQs as base64 JSON inside an HTML comment at the end of markdownContent.
const FAQ_BLOCK = /\n*<!--(?:ZELF|VERIFIK)_FAQS:([A-Za-z0-9+/=]+)-->\n*/;
const LOCALE = 'es';

// Same API as the Zelf blog (GET /blogs, GET /blogs/:slug), served by verifik-backend (Open-Verifik/app.verifik.co#1127).
// Tags prefixed with "cat:" are categories, as in the Zelf admin.
@Injectable({ providedIn: 'root' })
export class SmartReportBlogService {
    constructor(private _http: HttpClient) {}

    // Read on each call: in production the API host depends on the current hostname (staging vs. ai.verifik.co).
    private get _url(): string {
        return `${environment.apiUrl}/v2/blogs`;
    }

    getPosts(): Observable<SmartReportBlogPost[]> {
        return this._http
            .get<{ data: any[] }>(this._url, { params: { where_site: SITE, where_locale: LOCALE } })
            .pipe(
                map((response) => (response?.data || []).map((record) => this._toPost(record))),
                map((posts) =>
                    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                ),
                catchError(() => of([]))
            );
    }

    getPost(slug: string): Observable<SmartReportBlogPost | null> {
        return this._http
            .get<{
                data: any;
            }>(`${this._url}/${encodeURIComponent(slug)}`, { params: { where_site: SITE, where_locale: LOCALE } })
            .pipe(
                map((response) => (response?.data ? this._toPost(response.data) : null)),
                catchError(() => of(null))
            );
    }

    private _toPost(record: any): SmartReportBlogPost {
        const tags: string[] = record.tags || [];
        const { content, faqs } = this._extractFaqs(record.markdownContent || '');

        return {
            _id: record._id,
            slug: record.slug,
            title: record.title,
            description: record.description || '',
            author: record.author || 'Equipo Verifik',
            date: record.date || record.createdAt || new Date().toISOString(),
            image: record.coverImage || record.image,
            imageAlt: record.imageAlt || '',
            tags: tags.filter((tag) => !tag.startsWith('cat:')),
            categories: tags.filter((tag) => tag.startsWith('cat:')).map((tag) => tag.slice(4)),
            content,
            faqs,
        };
    }

    private _extractFaqs(markdown: string): { content: string; faqs: SmartReportBlogFaq[] } {
        const match = markdown.match(FAQ_BLOCK);

        if (!match) return { content: markdown, faqs: [] };

        let faqs: SmartReportBlogFaq[] = [];

        try {
            const bytes = Uint8Array.from(atob(match[1]), (char) => char.charCodeAt(0));
            const parsed = JSON.parse(new TextDecoder().decode(bytes));

            if (Array.isArray(parsed)) {
                faqs = parsed
                    .map((faq) => ({
                        question: String(faq?.question || '').trim(),
                        answer: String(faq?.answer || '').trim(),
                    }))
                    .filter((faq) => faq.question || faq.answer);
            }
        } catch {
            faqs = [];
        }

        return { content: markdown.replace(FAQ_BLOCK, '\n').replace(/\s+$/, ''), faqs };
    }
}
