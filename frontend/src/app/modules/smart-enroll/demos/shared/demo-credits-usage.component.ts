import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { formatCreditsAmount, parseCreditUsage, type CreditUsageInfo } from './human-id-result.util';

@Component({
    selector: 'app-demo-credits-usage',
    standalone: true,
    imports: [TranslocoModule],
    templateUrl: './demo-credits-usage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoCreditsUsageComponent {
    @Input({ required: true }) result: Record<string, unknown> | null = null;
    @Input() notChargedKey = 'smartEnrollDemos.common.creditsNotCharged';

    get usage(): CreditUsageInfo | null {
        return parseCreditUsage(this.result);
    }

    formatAmount(amount: number): string {
        return formatCreditsAmount(amount);
    }
}
