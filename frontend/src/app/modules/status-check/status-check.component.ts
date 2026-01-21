import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'status-check',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './status-check.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class StatusCheckComponent {
  constructor() {
    // Status Check component
  }
}
