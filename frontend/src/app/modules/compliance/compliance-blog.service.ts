import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { BlogFaq, extractBlogFaqs } from 'app/modules/compliance/compliance.utils';
import { ComplianceLocale } from 'app/modules/compliance/compliance-taxonomy';

export interface CompliancePost {
    _id?: string;
    slug: string;
    canonicalSlug: string;
    locale: ComplianceLocale;
    title: string;
    description: string;
    author: string;
    authorTitle: string;
    authorImage: string;
    authorBio: string;
    date: string;
    image?: string;
    imageAlt?: string;
    country: string;
    category: string;
    topics: string[];
    tags: string[];
    featured: boolean;
    content: string;
    faqs: BlogFaq[];
}

export interface CompliancePostQuery {
    locale: ComplianceLocale;
    country?: string;
    category?: string;
    topics?: string[];
    q?: string;
    featured?: boolean;
    page?: number;
    limit?: number;
}

const SITE = 'compliance';

// Blogs API of verifik-backend (GET /v2/blogs, /v2/blogs/count, /v2/blogs/:slug) on its own "compliance"
// site, with the country/category/topic filters (Open-Verifik/app.verifik.co#1129).
@Injectable({ providedIn: 'root' })
export class ComplianceBlogService {
    constructor(private _http: HttpClient) {}

    // Read on each call: in production the API host depends on the current hostname (staging vs. ai.verifik.co).
    private get _url(): string {
        return `${environment.apiUrl}/v2/blogs`;
    }

    getPosts(query: CompliancePostQuery): Observable<CompliancePost[]> {
        return this._http.get<{ data: any[] }>(this._url, { params: this._params(query) }).pipe(
            map((response) => (response?.data || []).map((record) => this._toPost(record))),
            catchError(() => of([]))
        );
    }

    countPosts(query: CompliancePostQuery): Observable<number> {
        return this._http
            .get<{ data: { total: number } }>(`${this._url}/count`, { params: this._params(query) })
            .pipe(
                map((response) => response?.data?.total || 0),
                catchError(() => of(0))
            );
    }

    getPost(slug: string, locale: ComplianceLocale): Observable<CompliancePost | null> {
        return this._http
            .get<{
                data: any;
            }>(`${this._url}/${encodeURIComponent(slug)}`, { params: { where_site: SITE, where_locale: locale } })
            .pipe(
                map((response) => (response?.data ? this._toPost(response.data) : null)),
                catchError(() => of(null))
            );
    }

    /** The same article in the other language: both versions share `canonicalSlug`. */
    getTranslation(
        post: CompliancePost,
        locale: ComplianceLocale
    ): Observable<CompliancePost | null> {
        const params = {
            where_site: SITE,
            where_locale: locale,
            where_canonicalSlug: post.canonicalSlug || post.slug,
            limit: '1',
        };

        return this._http.get<{ data: any[] }>(this._url, { params }).pipe(
            map((response) => (response?.data?.[0] ? this._toPost(response.data[0]) : null)),
            catchError(() => of(null))
        );
    }

    private _params(query: CompliancePostQuery): HttpParams {
        let params = new HttpParams().set('where_site', SITE).set('where_locale', query.locale);

        if (query.country) params = params.set('where_country', query.country);
        if (query.category) params = params.set('where_category', query.category);
        if (query.topics?.length) params = params.set('where_topics', query.topics.join(','));
        if (query.q) params = params.set('q', query.q);
        if (query.featured !== undefined)
            params = params.set('where_featured', String(query.featured));
        if (query.limit) params = params.set('limit', String(query.limit));
        if (query.page) params = params.set('page', String(query.page));

        return params;
    }

    private _toPost(record: any): CompliancePost {
        const { content, faqs } = extractBlogFaqs(record.markdownContent || '');

        return {
            _id: record._id,
            slug: record.slug,
            canonicalSlug: record.canonicalSlug || record.slug,
            locale: record.locale === 'en' ? 'en' : 'es',
            title: record.title,
            description: record.description || '',
            author: record.author || '',
            authorTitle: record.authorTitle || '',
            authorImage: record.authorImage || '',
            authorBio: record.authorBio || '',
            date: record.date || record.createdAt || new Date().toISOString(),
            image: record.coverImage || record.image,
            imageAlt: record.imageAlt || '',
            country: record.country || '',
            category: record.category || '',
            topics: record.topics || [],
            tags: (record.tags || []).filter((tag: string) => !tag.startsWith('cat:')),
            featured: record.featured === true,
            content,
            faqs,
        };
    }
}
