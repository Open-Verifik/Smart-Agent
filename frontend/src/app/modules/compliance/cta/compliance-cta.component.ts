import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { COMPLIANCE_COPY, ComplianceCopy } from 'app/modules/compliance/compliance-copy';
import { ComplianceLocale } from 'app/modules/compliance/compliance-taxonomy';

// Closing band of every Centro de Cumplimiento page (Open-Verifik/app.verifik.co#1129), with a short footer under it
@Component({
    selector: 'compliance-cta',
    templateUrl: './compliance-cta.component.html',
    styleUrls: ['./compliance-cta.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatIconModule],
})
export class ComplianceCtaComponent {
    @Input() locale: ComplianceLocale = 'es';

    readonly year = new Date().getFullYear();

    get copy(): ComplianceCopy {
        return COMPLIANCE_COPY[this.locale];
    }

    get bookingUrl(): string {
        return this.locale === 'en'
            ? 'https://verifik.co/en/book-meeting/'
            : 'https://verifik.co/agendar-sesion/';
    }
}
