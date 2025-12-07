import { Component, OnInit, ViewChild, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { AgentWalletService } from './services/agent-wallet.service';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  tool_call?: any;
  payment_required?: any;
  data?: any;
  proof?: string;
}

interface AgentIdentity {
  name: string;
  description: string;
  agentCardURI: string;
  capabilities: string[];
  agentAddress: string;
  createdAt: string;
  active: boolean;
}

interface AgentReputation {
  totalFeedbacks: number;
  averageRating: number;
  totalRatings: number;
}

interface AgentFeedback {
  id: string;
  client: string;
  rating: number;
  tags: string[];
  comment: string;
  verified: boolean;
  timestamp: string;
  paymentProof: string;
}

interface AgentInfo {
  identity: AgentIdentity;
  reputation: AgentReputation | null;
  feedbacks?: AgentFeedback[];
}

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  baseUrl = environment.baseUrl;
  messages = signal<ChatMessage[]>([]);
  userInput = signal('');
  isLoading = signal(false);
  walletAddress = signal('');
  walletBalance = signal('0');
  showWalletModal = signal(false);
  showAgentInfoModal = signal(false);
  showFeedbackModal = signal(false);
  agentInfo = signal<AgentInfo | null>(null);
  isLoadingAgentInfo = signal(false);
  isSubmittingFeedback = signal(false);

  // Payment Confirmation Modal State
  showPaymentConfirmationModal = signal(false);
  pendingPayment = signal<any>(null);
  isProcessingPayment = signal(false);
  showPaymentDetails = signal(false);

  // Feedback form state
  feedbackRating = signal(0);
  feedbackTags = signal<string[]>([]);
  feedbackComment = signal('');
  lastPaymentTx = signal<string | null>(null);
  availableTags = ['fast', 'accurate', 'helpful', 'reliable', 'easy-to-use'];

  thinkingSteps = signal<string[]>([]);
  currentThinkingStep = signal('');

  // Backend URLs
  private apiUrl = `${environment.smartAgentUrl}/api/agent/chat`;
  private agentInfoUrl = `${environment.smartAgentUrl}/api/agent/info`;
  agentCardUrl = `${environment.smartAgentUrl}/api/agent/agent-card.json`;

  constructor(
    private http: HttpClient,
    public walletService: AgentWalletService,
  ) {}

  async ngOnInit() {
    this.walletAddress.set(this.walletService.getAddress());
    await this.refreshBalance();
    await this.loadAgentInfo();

    // Welcome message
    const identity = this.agentInfo()?.identity;
    const welcomeMsg = identity
      ? `Hello! I am ${identity.name}. ${identity.description} How can I assist you today?`
      : 'Hello! I am your Verifik AI Agent powered by Gemini. I can help you validate identities using the x402 protocol on Avalanche. How can I assist you today?';

    this.messages.update((msgs) => [
      ...msgs,
      {
        role: 'assistant',
        content: welcomeMsg,
      },
    ]);
  }

  async loadAgentInfo() {
    this.isLoadingAgentInfo.set(true);
    try {
      this.http.get<AgentInfo>(this.agentInfoUrl).subscribe({
        next: (info) => {
          this.agentInfo.set(info);
          this.isLoadingAgentInfo.set(false);
        },
        error: (err) => {
          console.warn('Failed to load agent info:', err);
          this.isLoadingAgentInfo.set(false);
        },
      });
    } catch (error) {
      console.warn('Error loading agent info:', error);
      this.isLoadingAgentInfo.set(false);
    }
  }

  toggleAgentInfoModal() {
    this.showAgentInfoModal.update((show) => !show);
  }

  toggleFeedbackModal() {
    this.showFeedbackModal.update((show) => !show);
    if (!this.showFeedbackModal()) {
      // Reset form when closing
      this.feedbackRating.set(0);
      this.feedbackTags.set([]);
      this.feedbackComment.set('');
    }
  }

  setRating(rating: number) {
    this.feedbackRating.set(rating);
  }

  toggleTag(tag: string) {
    const currentTags = this.feedbackTags();
    if (currentTags.includes(tag)) {
      this.feedbackTags.set(currentTags.filter((t) => t !== tag));
    } else {
      this.feedbackTags.set([...currentTags, tag]);
    }
  }

  async submitFeedback() {
    const rating = this.feedbackRating();
    if (rating < 1 || rating > 5) {
      alert('Please select a rating (1-5 stars)');
      return;
    }

    const agentTokenId = 1; // From config - agent Token ID
    const tags = this.feedbackTags();
    const comment = this.feedbackComment();
    const paymentTxHash = this.lastPaymentTx();

    this.isSubmittingFeedback.set(true);

    try {
      const tx = await this.walletService.submitFeedback(
        agentTokenId,
        rating,
        tags,
        comment,
        paymentTxHash,
      );

      console.log('Feedback transaction sent:', tx.hash);

      this.messages.update((msgs) => [
        ...msgs,
        {
          role: 'system',
          content: `Feedback submitted! Transaction: ${tx.hash}. Waiting for confirmation...`,
        },
      ]);

      await tx.wait();
      console.log('Feedback confirmed!');

      this.messages.update((msgs) => [
        ...msgs,
        {
          role: 'system',
          content: `✅ Thank you for your feedback! Your rating has been recorded on-chain.`,
        },
      ]);

      // Reload agent info to update reputation
      await this.loadAgentInfo();

      // Close modal and reset form
      this.toggleFeedbackModal();
      this.feedbackRating.set(0);
      this.feedbackTags.set([]);
      this.feedbackComment.set('');

      this.scrollToBottom();
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      this.handleError(error);
    } finally {
      this.isSubmittingFeedback.set(false);
    }
  }

  async refreshBalance() {
    const balance = await this.walletService.getBalance();
    this.walletBalance.set(balance);
  }

  async sendMessage() {
    const input = this.userInput();
    if (!input.trim()) return;

    this.messages.update((msgs) => [...msgs, { role: 'user', content: input }]);
    this.userInput.set('');
    this.isLoading.set(true);
    this.scrollToBottom();

    // Start Thinking Simulation
    this.startThinkingSimulation();

    try {
      await this.callAgent(input);
    } catch (error: any) {
      this.handleError(error);
    }
  }

  async callAgent(message: string, paymentTx: string | null = null) {
    const payload = {
      message: message,
      history: this.messages().map((m) => ({ role: m.role, content: m.content })),
      paymentTx: paymentTx,
    };

    this.http.post<any>(this.apiUrl, payload).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        this.thinkingSteps.set([]); // Clear thinking steps
        this.currentThinkingStep.set('');

        this.messages.update((msgs) => [...msgs, response]);
        this.scrollToBottom();

        // If tool executed successfully and we have data, show feedback option
        if (response.data && response.role === 'assistant') {
          // Store the last payment transaction if available
          const paymentMsg = this.messages().find(
            (m) => m.role === 'system' && m.content.includes('TX:'),
          );
          if (paymentMsg) {
            const txMatch = paymentMsg.content.match(/TX: (0x[a-fA-F0-9]+)/);
            if (txMatch) {
              this.lastPaymentTx.set(txMatch[1]);
            }
          }
        }
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  private startThinkingSimulation() {
    const steps = [
      'Analysing request intent...',
      'Identifying necessary tools...',
      'Checking tool requirements...',
      'Consulting knowledge base...',
      'Preparing tool execution...',
    ];
    this.thinkingSteps.set([]);
    this.currentThinkingStep.set('Thinking...');

    let i = 0;
    const interval = setInterval(() => {
      if (!this.isLoading() || i >= steps.length) {
        clearInterval(interval);
        return;
      }
      const step = steps[i];
      this.thinkingSteps.update((s) => [...s, step]);
      this.currentThinkingStep.set(step);
      this.scrollToBottom();
      i++;
    }, 800);
  }

  togglePaymentDetails() {
    this.showPaymentDetails.update((v) => !v);
  }

  confirmPayment(msgIndex: number) {
    const msg = this.messages()[msgIndex];
    if (!msg.payment_required) return;

    this.pendingPayment.set(msg.payment_required);
    this.showPaymentConfirmationModal.set(true);
  }

  cancelPayment() {
    this.showPaymentConfirmationModal.set(false);
    this.pendingPayment.set(null);
  }

  async executePayment() {
    const details = this.pendingPayment();
    if (!details) return;

    this.isProcessingPayment.set(true);

    const amount = details.amount;
    const contractAddress = details.receiver_address;
    const serviceId = details.serviceId || 'cedula-validation';
    const requestId = details.requestId || `req_${Date.now()}`;

    try {
      const tx = await this.walletService.payForService(
        contractAddress,
        serviceId,
        requestId,
        amount,
      );
      console.log('Transaction sent:', tx.hash);

      this.messages.update((msgs) => [
        ...msgs,
        {
          role: 'system',
          content: `Payment sent! TX: ${tx.hash}. Waiting for confirmation...`,
        },
      ]);

      this.showPaymentConfirmationModal.set(false);
      this.pendingPayment.set(null);

      await tx.wait();

      this.lastPaymentTx.set(tx.hash);

      await this.callAgent('Payment complete. Please proceed.', tx.hash);
      await this.refreshBalance();
    } catch (error: any) {
      this.handleError(error);
      this.showPaymentConfirmationModal.set(false);
    } finally {
      this.isProcessingPayment.set(false);
    }
  }

  handleError(error: any) {
    this.isLoading.set(false);
    console.error(error);
    this.messages.update((msgs) => [
      ...msgs,
      {
        role: 'system',
        content: 'Error: ' + (error.message || 'Something went wrong'),
      },
    ]);
    this.scrollToBottom();
  }

  toggleWalletModal() {
    this.showWalletModal.update((show) => !show);
  }

  async copyAddress() {
    try {
      await navigator.clipboard.writeText(this.walletAddress());
      alert('Address copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  async resetWallet() {
    if (
      confirm(
        'Are you sure you want to reset your wallet? This will generate a new address and you will lose access to the current one.',
      )
    ) {
      this.walletService.resetWallet();
      this.walletAddress.set(this.walletService.getAddress());
      await this.refreshBalance();
      this.showWalletModal.set(false);
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      if (this.scrollContainer) {
        this.scrollContainer.nativeElement.scrollTop =
          this.scrollContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
