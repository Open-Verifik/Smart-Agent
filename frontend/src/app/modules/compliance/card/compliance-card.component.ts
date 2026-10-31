import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CompliancePost } from 'app/modules/compliance/compliance-blog.service';
import { COMPLIANCE_COPY, compliancePostPath } from 'app/modules/compliance/compliance-copy';
import {
    ComplianceCategory,
    ComplianceCountry,
    ComplianceLocale,
    findCategory,
    findCountry,
} from 'app/modules/compliance/compliance-taxonomy';
import {
    flagSrc,
    formatComplianceDate,
    readingMinutes,
} from 'app/modules/compliance/compliance.utils';

export type ComplianceCardVariant = 'hero' | 'side' | 'grid' | 'list';

// Article card of the Centro de Cumplimiento (Open-Verifik/app.verifik.co#1129). `hero` and `side` are the featured block,
// `grid` and `list` the two views of the latest posts.
@Component({
    selector: 'compliance-card',
    templateUrl: './compliance-card.component.html',
    styleUrls: ['./compliance-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterLink],
})
export class ComplianceCardComponent {
    @Input() post: CompliancePost;
    @Input() locale: ComplianceLocale = 'es';
    @Input() variant: ComplianceCardVariant = 'grid';

    get link(): string {
        return compliancePostPath(this.locale, this.post.country, this.post.slug);
    }

    get category(): ComplianceCategory | undefined {
        return findCategory(this.post.category);
    }

    get country(): ComplianceCountry | undefined {
        return findCountry(this.post.country);
    }

    get flag(): string {
        return flagSrc(this.country.flag);
    }

    get date(): string {
        return formatComplianceDate(this.post.date, this.locale);
    }

    get minRead(): string {
        return COMPLIANCE_COPY[this.locale].minRead(readingMinutes(this.post.content));
    }

    get author(): string {
        return this.post.author || COMPLIANCE_COPY[this.locale].defaultAuthor;
    }
}
