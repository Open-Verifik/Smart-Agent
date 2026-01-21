import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'subscription-plans',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './subscription-plans.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SubscriptionPlansComponent {
  constructor() {
    // Subscription Plans component
  }
}
