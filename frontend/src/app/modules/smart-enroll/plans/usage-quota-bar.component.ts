import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { overageCount, remaining, usagePercent, usageTone, type UsageTone } from './smart-enroll-usage.util';

@Component({
    selector: 'usage-quota-bar',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './usage-quota-bar.component.html',
    styleUrls: ['./usage-quota-bar.component.scss'],
})
export class UsageQuotaBarComponent {
    @Input({ required: true }) used = 0;
    @Input({ required: true }) limit = 0;
    @Input({ required: true }) label = '';

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
}
