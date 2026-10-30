import { Component, Input } from '@angular/core';
import { SmartReportBlogPost } from 'app/modules/smartreport/blog/smartreport-blog.service';
import {
    authorInitials,
    authorPhoto,
    formatBlogDate,
} from 'app/modules/smartreport/blog/smartreport-blog.utils';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Blog card from the #1127 mockup: cover, author avatar over its edge, title and "Autor • fecha"
@Component({
    selector: 'smartreport-blog-card',
    templateUrl: './smartreport-blog-card.component.html',
    styleUrls: ['./smartreport-blog-card.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule],
})
export class SmartReportBlogCardComponent {
    @Input() post: SmartReportBlogPost;

    photoFailed = false;

    get photo(): string | null {
        return authorPhoto(this.post.author);
    }

    get initials(): string {
        return authorInitials(this.post.author);
    }

    get date(): string {
        return formatBlogDate(this.post.date);
    }
}
