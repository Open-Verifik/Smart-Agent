import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { map } from 'rxjs/operators';
import { UserService } from 'app/core/user/user.service';
import {
    BACKGROUND_CHECK_LIST_PRICE,
    COLOMBIA_IDENTITY_LIST_PRICE,
    discountedOveragePrice,
    resolveDiscountPercent,
} from './smart-enroll-usage.util';

@Component({
    selector: 'usage-overage-explainer',
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule, TranslocoModule],
    templateUrl: './usage-overage-explainer.component.html',
    styleUrls: ['./usage-overage-explainer.component.scss'],
})
export class UsageOverageExplainerComponent {
    private _userService = inject(UserService);

    @Input() nameDiscountPercent: number | null | undefined;
    @Input() backgroundDiscountPercent: number | null | undefined;
    @Input() emphasized = false;

    readonly walletCredits$ = this._userService.user$.pipe(
        map((user) => Math.round((Number(user?.credits) || 0) * 100) / 100)
    );

    get nameDiscount(): number {
        return resolveDiscountPercent(this.nameDiscountPercent);
    }

    get namePrice(): string {
        return discountedOveragePrice(COLOMBIA_IDENTITY_LIST_PRICE, this.nameDiscountPercent).toFixed(2);
    }

    get backgroundPrice(): string {
        return discountedOveragePrice(BACKGROUND_CHECK_LIST_PRICE, this.backgroundDiscountPercent).toFixed(2);
    }
}
