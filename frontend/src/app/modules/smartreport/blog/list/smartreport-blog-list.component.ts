import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import {
    SmartReportBlogPost,
    SmartReportBlogService,
} from 'app/modules/smartreport/blog/smartreport-blog.service';
import { CommonModule } from '@angular/common';
import { SmartReportHeaderComponent } from 'app/modules/smartreport/header/smartreport-header.component';
import { SmartReportFooterComponent } from 'app/modules/smartreport/footer/smartreport-footer.component';
import { SmartReportBlogCardComponent } from 'app/modules/smartreport/blog/card/smartreport-blog-card.component';

const PAGE_SIZE = 9;

// Blog listing: clone of the Zelf blog (/blog) with the Verifik design from #1127
@Component({
    selector: 'smartreport-blog-list',
    templateUrl: './smartreport-blog-list.component.html',
    styleUrls: ['./smartreport-blog-list.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        SmartReportHeaderComponent,
        SmartReportFooterComponent,
        SmartReportBlogCardComponent,
    ],
})
export class SmartReportBlogListComponent implements OnInit, OnDestroy {
    posts: SmartReportBlogPost[] = [];
    loading = true;
    visibleCount = PAGE_SIZE;
    placeholders = Array.from({ length: 3 });

    private _previousTitle: string;
    private _subscription: Subscription;

    constructor(
        private _blog: SmartReportBlogService,
        private _meta: Meta,
        private _title: Title
    ) {}

    ngOnInit(): void {
        this._previousTitle = this._title.getTitle();
        this._title.setTitle('Blog | smartREPORT');
        this._meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });

        this._subscription = this._blog.getPosts().subscribe((posts) => {
            this.posts = posts;
            this.loading = false;
        });
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
        this._title.setTitle(this._previousTitle);
        this._meta.removeTag('name="robots"');
    }

    loadMore(): void {
        this.visibleCount = Math.min(this.visibleCount + PAGE_SIZE, this.posts.length);
    }
}
