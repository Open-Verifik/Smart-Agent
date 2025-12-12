import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PaymentConfirmationData {
  amount: string;
  currentBalance: string;
  endpoint?: string;
  details?: string;
  receiver: string;
}

import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, TranslocoModule],
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss'],
})
export class PaymentConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<PaymentConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PaymentConfirmationData,
  ) {}

  get newBalance(): number {
    const current = parseFloat(this.data.currentBalance || '0');
    const cost = parseFloat(this.data.amount || '0');
    return current - cost;
  }

  confirm() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }
}
