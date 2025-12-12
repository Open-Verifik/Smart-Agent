import { Component, Inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AgentWalletService } from '../services/agent-wallet.service';

export interface AgentFeedbackData {
  agentTokenId?: number;
  paymentTxHash?: string | null;
}

import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-agent-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TranslocoModule,
  ],
  templateUrl: './agent-feedback.component.html',
  styleUrls: ['./agent-feedback.component.scss'],
})
export class AgentFeedbackComponent {
  rating = signal(0);
  comment = signal('');
  availableTags = ['fast', 'accurate', 'helpful', 'reliable', 'easy-to-use'];
  selectedTags = signal<string[]>([]);
  isSubmitting = signal(false);

  constructor(
    private _dialogRef: MatDialogRef<AgentFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgentFeedbackData,
    private _walletService: AgentWalletService,
  ) {}

  setRating(star: number) {
    this.rating.set(star);
  }

  toggleTag(tag: string) {
    const current = this.selectedTags();
    if (current.includes(tag)) {
      this.selectedTags.set(current.filter((t) => t !== tag));
    } else {
      this.selectedTags.set([...current, tag]);
    }
  }

  async submit() {
    if (this.rating() === 0) return;

    this.isSubmitting.set(true);
    try {
      const agentTokenId = this.data.agentTokenId || 1;
      const tx = await this._walletService.submitFeedback(
        agentTokenId,
        this.rating(),
        this.selectedTags(),
        this.comment(),
        this.data.paymentTxHash || null,
      );

      console.log('Feedback transaction sent:', tx.hash);

      // Close dialog immediately with tx hash so parent can show "waiting for confirmation" message
      this._dialogRef.close({ success: true, txHash: tx.hash, tx: tx });
    } catch (error) {
      console.error('Feedback error:', error);
      // We could show error here or let parent handle
      this._dialogRef.close({ success: false, error });
    } finally {
      this.isSubmitting.set(false);
    }
  }

  close() {
    this._dialogRef.close();
  }
}
