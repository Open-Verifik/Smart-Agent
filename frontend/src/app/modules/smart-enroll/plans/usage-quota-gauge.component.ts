import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { overageCount, remaining, usagePercent, usageTone, type UsageTone } from './smart-enroll-usage.util';

@Component({
    selector: 'usage-quota-gauge',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './usage-quota-gauge.component.html',
    styleUrls: ['./usage-quota-gauge.component.scss'],
})
export class UsageQuotaGaugeComponent {
    @Input({ required: true }) used = 0;
    @Input({ required: true }) limit = 0;
    @Input({ required: true }) label = '';
    @Input() hint = '';

    get percent(): number {
        return usagePercent(this.used, this.limit);
    }

    get left(): number {
        return remaining(this.used, this.limit);
    }

    get over(): number {
        return overageCount(this.used, this.limit);
    }

    get tone(): UsageTone {
        return usageTone(this.used, this.limit);
    }

    get dashArray(): string {
        return `${this.percent} 100`;
    }
}
