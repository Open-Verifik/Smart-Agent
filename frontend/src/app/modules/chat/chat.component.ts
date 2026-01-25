import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import { MarkdownPipe } from '../../shared/pipes/markdown.pipe';
import { AgentErc8004Component } from './agent-erc8004/agent-erc8004.component';
import { AgentFeedbackComponent } from './agent-feedback/agent-feedback.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { AgentWalletService } from './services/agent-wallet.service';

// --- Interfaces ---
interface ToolCall {
    tool: string;
    args: Record<string, any>;
}

interface PaymentRequired {
    price: string;
    priceUsd: number;
    wallet: string;
    details: string;
    receiver_address: string;
    amount: string;
    endpoint?: string;
    toolName?: string;
    requestId?: string;
    serviceId?: string;
    priceVka?: number;
    vkaContract?: string;
}

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    tool_call?: ToolCall;
    payment_required?: PaymentRequired;
    data?: any;
    proof?: string;
    images?: string[];
}

interface ConversationSummary {
    id: string;
    title: string;
    updated_at: string;
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
        TranslocoModule,
        MatDialogModule,
        MarkdownPipe,
        AgentErc8004Component,
    ],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
})
export class ChatComponent implements OnInit {
    protected readonly window = window; // Expose window for template
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    baseUrl = environment.baseUrl;
    protected readonly smartAgentUrl = environment.smartAgentUrl;
    protected readonly tokenTicker = environment.tokenTicker || 'VKA';
    private apiUrl = `${environment.smartAgentUrl}/api/agent`;

    // --- Signals ---
    messages = signal<ChatMessage[]>([]);
    userInput = signal('');
    isLoading = signal(false);

    // Wallet & Auth
    walletAddress = signal('');
    walletBalance = signal('0');
    tokenBalance = signal('0');
    showWalletModal = signal(false);
    chatMode = signal<'x402' | 'credits'>('x402');

    // Agent Info
    showAgentInfoModal = signal(false);
    agentInfo = signal<AgentInfo | null>(null);
    isLoadingAgentInfo = signal(false);
    agentCardUrl = `${this.apiUrl}/agent-card.json`;

    // Feedback & Payment
    showPaymentConfirmationModal = signal(false);
    pendingPayment = signal<any>(null);
    isProcessingPayment = signal(false);
    showPaymentDetails = signal(false);
    lastPaymentTx = signal<string | null>(null);

    // Thinking Simulation
    thinkingSteps = signal<string[]>([]);
    currentThinkingStep = signal('');

    // --- Conversation Management ---
    conversations = signal<ConversationSummary[]>([]);
    currentConversationId = signal<string | null>(null);
    isSidebarOpen = signal<boolean>(this.getInitialSidebarState());

    private getInitialSidebarState(): boolean {
        const saved = localStorage.getItem('isSidebarOpen');
        if (saved !== null) {
            return saved === 'true';
        }
        return window.innerWidth >= 1024; // Default open on desktop
    }
    isRenamingId = signal<string | null>(null); // ID of conversation being renamed
    renameInput = signal('');

    constructor(
        private http: HttpClient,
        public walletService: AgentWalletService,
        private _matDialog: MatDialog
    ) {}

    async ngOnInit() {
        this.walletAddress.set(this.walletService.getAddress());
        await this.refreshBalance();

        // Check for Wallet Change
        const currentWallet = this.walletAddress();
        const lastWallet = localStorage.getItem('lastWalletAddress');

        if (currentWallet !== lastWallet) {
            console.log('Wallet changed, clearing session.');
            localStorage.removeItem('currentConversationId');
            localStorage.setItem('lastWalletAddress', currentWallet || '');
            this.currentConversationId.set(null);
        }

        // Load initial data
        this.loadAgentInfo();

        // Determine Mode Smartly based on Balances
        // Determine Mode Smartly based on Balances & Preference
        const savedMode = localStorage.getItem('chatMode') as 'x402' | 'credits';
        const hasWallet = !!this.walletService.getAddress();
        const hasCredits = !!localStorage.getItem('accessToken');
        const walletBalance = parseFloat(this.walletBalance() || '0');

        if (
            savedMode &&
            ((savedMode === 'x402' && hasWallet) || (savedMode === 'credits' && hasCredits))
        ) {
            this.chatMode.set(savedMode);
        } else {
            // Fallback if no preference or preference is invalid for current auth state
            if (hasCredits && !hasWallet) {
                this.setChatMode('credits');
            } else if (hasWallet && hasCredits) {
                if (walletBalance < 0.01) {
                    this.setChatMode('credits');
                } else {
                    this.setChatMode('x402');
                }
            } else if (hasWallet) {
                this.setChatMode('x402');
            }
        }

        // Now load conversations with correct mode/wallet
        this.loadConversations(); // This filters by wallet address

        // Restore Session
        const savedId = localStorage.getItem('currentConversationId');
        if (savedId) {
            // Only select if it exists in the loaded conversations?
            // Issue: loadConversations is async.
            // We can trust the backend to enforce access control?
            // If not, relying on the 'lastWalletAddress' check above is the primary frontend defense.
            this.selectConversation(savedId);
        } else {
            this.startNewChat(false);
        }
    }

    // --- Conversations Logic ---

    loadConversations() {
        const params: any = {};

        // Strictly filter based on ACTIVE MODE to match creation logic
        if (this.chatMode() === 'x402' && this.walletAddress()) {
            params.walletAddress = this.walletAddress();
        } else if (this.chatMode() === 'credits') {
            // Use User ID as identifier
            params.walletAddress = this.getUserId();
        }

        this.http.get<ConversationSummary[]>(`${this.apiUrl}/conversations`, { params }).subscribe({
            next: (list) => this.conversations.set(list),
            error: (err) => console.error('Failed to load conversations', err),
        });
    }

    selectConversation(id: string) {
        this.currentConversationId.set(id);
        localStorage.setItem('currentConversationId', id);
        this.isLoading.set(true);

        // Determine identity for strict access control
        let walletAddress = '';
        if (this.chatMode() === 'x402') {
            walletAddress = this.walletAddress();
        } else {
            walletAddress = this.getUserId();
        }

        const params = { walletAddress };

        this.http.get<any>(`${this.apiUrl}/history/${id}`, { params }).subscribe({
            next: (data) => {
                this.messages.set(data.messages || []);
                this.isLoading.set(false);
                this.scrollToBottom();
            },
            error: (err) => {
                console.error('Failed to load history', err);
                // If 404 or 403, clean up
                if (err.status === 403 || err.status === 404) {
                    localStorage.removeItem('currentConversationId');
                    this.currentConversationId.set(null);
                    this.messages.set([]);
                    // Optionally show error toast?
                }
                this.isLoading.set(false);
            },
        });
    }

    startNewChat(clearStorage = true) {
        if (clearStorage) {
            localStorage.removeItem('currentConversationId');
        }

        // Reset UI State immediately
        this.currentConversationId.set(null);
        this.userInput.set('');
        this.pendingAttachments.set([]);
        this.thinkingSteps.set([]);
        this.currentThinkingStep.set('');
        this.isLoading.set(false);
        this.messages.set([]);

        // Welcome message
        const identity = this.agentInfo()?.identity;
        const welcomeMsg = identity
            ? `Hello! I am ${identity.name}. ${identity.description} How can I assist you today?`
            : 'Hello! I am your Verifik AI Agent powered by Gemini. I can help you validate identities using the x402 protocol on Avalanche. How can I assist you today?';

        // We show welcome message temporarily.
        this.messages.set([{ role: 'assistant', content: welcomeMsg }]);

        // Persist immediately if this is a user action (clearStorage usually implies reset/new)
        if (clearStorage) {
            const payload = {
                mode: this.chatMode(),
                walletAddress:
                    this.chatMode() === 'credits' ? this.getUserId() : this.walletAddress(),
            };
            this.http.post<any>(`${this.apiUrl}/conversations`, payload).subscribe({
                next: (conv) => {
                    // Set the new ID
                    this.currentConversationId.set(conv.id);
                    localStorage.setItem('currentConversationId', conv.id);
                    // Refresh list so it appears in sidebar
                    this.loadConversations();
                },
                error: (err) => console.error('Failed to create new chat', err),
            });
        }
    }

    startRenaming(conv: ConversationSummary, event: Event) {
        event.stopPropagation();
        this.isRenamingId.set(conv.id);
        this.renameInput.set(conv.title);
    }

    saveRename(conv: ConversationSummary) {
        const newTitle = this.renameInput().trim();
        if (!newTitle || newTitle === conv.title) {
            this.isRenamingId.set(null);
            return;
        }

        // Auth
        let walletAddress = '';
        if (this.chatMode() === 'x402') {
            walletAddress = this.walletAddress();
        } else {
            walletAddress = this.getUserId();
        }

        this.http
            .patch(`${this.apiUrl}/conversations/${conv.id}`, { title: newTitle, walletAddress })
            .subscribe({
                next: () => {
                    // Update local list
                    this.conversations.update((list) =>
                        list.map((c) => (c.id === conv.id ? { ...c, title: newTitle } : c))
                    );
                    this.isRenamingId.set(null);
                },
                error: (err) => console.error('Rename failed', err),
            });
    }

    deleteConversation(conv: ConversationSummary, event: Event) {
        event.stopPropagation();

        const dialogRef = this._matDialog.open(DeleteConfirmationComponent, {
            panelClass: 'delete-confirmation-dialog',
            backdropClass: 'backdrop-blur-sm',
            width: '400px',
            maxWidth: '90vw',
        });

        dialogRef.afterClosed().subscribe((confirmed) => {
            if (!confirmed) return;

            // Auth
            let walletAddress = '';
            if (this.chatMode() === 'x402') {
                walletAddress = this.walletAddress();
            } else {
                walletAddress = this.getUserId();
            }

            this.http
                .delete(`${this.apiUrl}/conversations/${conv.id}`, { params: { walletAddress } })
                .subscribe({
                    next: () => {
                        this.conversations.update((list) => list.filter((c) => c.id !== conv.id));
                        if (this.currentConversationId() === conv.id) {
                            this.startNewChat();
                        }
                    },
                    error: (err) => console.error('Delete failed', err),
                });
        });
    }

    toggleSidebar() {
        this.isSidebarOpen.update((v) => {
            const newState = !v;
            localStorage.setItem('isSidebarOpen', String(newState));
            return newState;
        });
    }

    // --- Existing Logic ---

    async loadAgentInfo() {
        this.isLoadingAgentInfo.set(true);
        try {
            this.http.get<AgentInfo>(`${this.apiUrl}/info`).subscribe({
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

    openAuthModal() {
        this._matDialog.open(AuthModalComponent, {
            panelClass: 'auth-modal-dialog',
            width: '400px',
            maxWidth: '100vw',
        });
    }

    // --- Chat & Sending ---

    setChatMode(mode: 'x402' | 'credits') {
        this.chatMode.set(mode);
        localStorage.setItem('chatMode', mode);

        // When switching modes, we must reset the view because the identity changes
        this.currentConversationId.set(null);
        localStorage.removeItem('currentConversationId');
        this.messages.set([]);

        this.refreshBalance();
        this.loadConversations(); // Refresh list for new identity
        this.startNewChat(false); // Reset UI to welcome message
    }

    // Image Attachments
    pendingAttachments = signal<string[]>([]); // Base64 strings

    async onPaste(event: ClipboardEvent) {
        const items = event.clipboardData?.items;
        if (items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].type.indexOf('image') !== -1) {
                    const blob = items[i].getAsFile();
                    if (blob) {
                        const base64 = await this.fileToBase64(blob);
                        this.pendingAttachments.update((current) => [...current, base64]);
                    }
                }
            }
        }
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            Array.from(input.files).forEach(async (file) => {
                const base64 = await this.fileToBase64(file);
                this.pendingAttachments.update((current) => [...current, base64]);
            });
        }
        input.value = ''; // Reset input
    }

    removeAttachment(index: number) {
        this.pendingAttachments.update((current) => current.filter((_, i) => i !== index));
    }

    private fileToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    }

    async sendMessage() {
        const input = this.userInput();
        const images = this.pendingAttachments();

        if (!input.trim() && images.length === 0) return;

        // Check Auth
        const isCredits = this.chatMode() === 'credits';
        const hasWallet = !!this.walletService.getAddress();
        const hasCredits = !!localStorage.getItem('accessToken');

        if (!hasWallet && !hasCredits) {
            this.openAuthModal();
            return;
        }
        if (!isCredits && !hasWallet) {
            this.openAuthModal();
            return;
        }
        if (isCredits && !hasCredits) {
            this.openAuthModal();
            return;
        }

        // Creating a message object to display immediately
        const userMsg: ChatMessage = {
            role: 'user',
            content: input,
            // For display, we might want to show images?
            // Since backend returns URLs later, for now let's show them as data imgs if we wanted.
            // But preserving current structure, we'll wait for backend response or just not show images in USER bubble immediately
            // unless we extend ChatMessage interface.
            // Let's extend ChatMessage interface first? Added `images?: string[]` to interface below.
            images: images,
        };

        this.messages.update((msgs) => [...msgs, userMsg]);

        this.userInput.set('');
        this.pendingAttachments.set([]); // Clear attachments
        this.isLoading.set(true);
        this.scrollToBottom();

        this.startThinkingSimulation();

        try {
            await this.callAgent(input, null, null, images);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async callAgent(
        message: string,
        paymentTx: string | null = null,
        paymentAmount: string | null = null,
        images: string[] = [],
        pendingToolCall: any = null
    ) {
        const isCredits = this.chatMode() === 'credits';
        const userToken = isCredits ? localStorage.getItem('accessToken') : null;

        const payload = {
            message: message,
            conversationId: this.currentConversationId(),
            paymentTx: isCredits ? null : paymentTx,
            paymentWallet: isCredits ? this.getUserId() : this.walletAddress(),
            paymentAmount: isCredits ? null : paymentAmount,
            mode: this.chatMode(),
            userToken: userToken,
            images: images,
            pendingToolCall: pendingToolCall,
        };

        this.http.post<any>(`${this.apiUrl}/chat`, payload).subscribe({
            next: (response) => {
                this.isLoading.set(false);
                this.thinkingSteps.set([]);
                this.currentThinkingStep.set('');

                if (response.conversationId && !this.currentConversationId()) {
                    this.currentConversationId.set(response.conversationId);
                    localStorage.setItem('currentConversationId', response.conversationId);
                    this.loadConversations();
                }

                const msg: ChatMessage = {
                    role: response.role,
                    content: response.content,
                    tool_call: response.tool_call,
                    payment_required: response.payment_required,
                    data: response.data,
                    proof: response.proof,
                    images: response.images, // Backend should return image URLs if any were processed/saved
                };

                this.messages.update((msgs) => [...msgs, msg]);
                this.scrollToBottom();

                if (msg.data && msg.role === 'assistant') {
                    const paymentMsg = this.messages().find(
                        (m) => m.role === 'system' && m.content.includes('TX:')
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

    // --- Helpers & Other Modals (Same as before) ---

    private startThinkingSimulation() {
        const steps = [
            'agentThinking.steps.analysing',
            'agentThinking.steps.identifying',
            'agentThinking.steps.checking',
            'agentThinking.steps.consulting',
            'agentThinking.steps.preparing',
        ];
        this.thinkingSteps.set([]);
        this.currentThinkingStep.set('agentThinking.header');

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

    openFeedbackModal() {
        const dialogRef = this._matDialog.open(AgentFeedbackComponent, {
            panelClass: 'agent-feedback-dialog',
            backdropClass: 'backdrop-blur-sm',
            data: {
                agentTokenId: 1,
                paymentTxHash: this.lastPaymentTx(),
            },
        });

        dialogRef.afterClosed().subscribe(async (result) => {
            if (result && result.success) {
                // Show "transaction sent" message
                this.messages.update((msgs) => [
                    ...msgs,
                    {
                        role: 'system',
                        content: `Feedback submitted! Transaction: ${result.txHash}. Waiting for confirmation...`,
                    },
                ]);
                this.scrollToBottom();

                // Wait for transaction confirmation
                try {
                    this.walletService.startActivePolling();
                    await result.tx.wait();
                    this.walletService.pausePolling();

                    // Update the existing message to show success (removes "Waiting" triggering the card update)
                    this.messages.update((msgs) => {
                        return msgs.map((msg) => {
                            if (
                                msg.role === 'system' &&
                                msg.content.includes(result.txHash) &&
                                msg.content.includes('Waiting')
                            ) {
                                return {
                                    ...msg,
                                    content: `Feedback submitted! Transaction: ${result.txHash}. Validated.`,
                                };
                            }
                            return msg;
                        });
                    });

                    this.scrollToBottom();
                    await this.loadAgentInfo();
                } catch (error) {
                    this.walletService.pausePolling();
                    console.error('Transaction confirmation error:', error);
                    this.messages.update((msgs) => [
                        ...msgs,
                        {
                            role: 'system',
                            content: `⚠️ Transaction was sent but confirmation failed. Please check the explorer.`,
                        },
                    ]);
                    this.scrollToBottom();
                }
            } else if (result && result.error) {
                this.handleError(result.error);
            }
        });
    }

    refreshBalance() {
        this.walletService.getBalance().then((b) => this.walletBalance.set(b));
        this.walletService.getTokenBalance().then((b) => this.tokenBalance.set(b));
    }

    getImageUrl(src: string): string {
        if (!src) return '';
        if (src.startsWith('http') || src.startsWith('data:')) {
            return src;
        }
        if (src.startsWith('/api')) {
            return `${this.smartAgentUrl}${src}`;
        }
        return `${this.baseUrl}${src}`;
    }

    getUserId(): string {
        // Try to get from verifik_account (User Profile) first
        try {
            const accountStr = localStorage.getItem('verifik_account');
            if (accountStr) {
                const account = JSON.parse(accountStr);
                if (account && account._id) return account._id;
            }
        } catch (e) {
            console.warn('Failed to parse verifik_account from local storage');
        }

        // Fallback to token
        const token = localStorage.getItem('accessToken');
        if (!token) return '';
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return (
                payload.clientId || payload._id || payload.id || payload.sub || 'authenticated_user'
            );
        } catch (e) {
            console.error('Failed to parse token', e);
            return 'authenticated_user';
        }
    }

    togglePaymentDetails() {
        this.showPaymentDetails.update((v) => !v);
    }

    confirmPayment(msgIndex: number) {
        const msg = this.messages()[msgIndex];
        if (!msg.payment_required) return;

        // Open Dialog
        const dialogRef = this._matDialog.open(PaymentConfirmationComponent, {
            panelClass: 'payment-confirmation-dialog',
            backdropClass: 'backdrop-blur-sm',
            data: {
                amount: msg.payment_required.amount,
                currentBalance: this.walletBalance(),
                tokenBalance: this.tokenBalance(),
                receiver: msg.payment_required.receiver_address,
                endpoint:
                    msg.payment_required.endpoint || msg.payment_required.toolName || 'Unknown',
                details: msg.payment_required.details,
                priceVka: msg.payment_required.priceVka,
                vkaContract: msg.payment_required.vkaContract,
            },
        });

        dialogRef.afterClosed().subscribe(async (result) => {
            if (result && result.confirmed) {
                await this.executePayment(msg.payment_required!, result.currency);
            } else if (result === true) {
                // Fallback for old boolean return (just in case)
                await this.executePayment(msg.payment_required!, 'AVAX');
            }
        });
    }

    // cancelPayment removed (handled by dialog)

    async executePayment(details: PaymentRequired, currency: 'AVAX' | 'VKA' = 'AVAX') {
        this.isProcessingPayment.set(true);
        const amount = details.amount;
        const contractAddress = details.receiver_address;
        const serviceId = details.serviceId || 'cedula-validation';
        const requestId = details.requestId || `req_${Date.now()}`;

        try {
            let txResponse;
            let paidAmount = amount;

            if (currency === 'VKA') {
                // VKA Payment
                const priceVka = details['priceVka'] || details.priceUsd;
                const vkaContract =
                    details['vkaContract'] || this.walletService.VKA_CONTRACT_ADDRESS;
                paidAmount = priceVka.toString();

                txResponse = await this.walletService.payForServiceWithToken(
                    contractAddress,
                    vkaContract,
                    paidAmount
                );
            } else {
                // AVAX Payment
                txResponse = await this.walletService.payForService(
                    contractAddress,
                    serviceId,
                    requestId,
                    amount
                );
            }

            const { tx } = txResponse;
            this.messages.update((msgs) => [
                ...msgs,
                {
                    role: 'system',
                    content: `Payment sent (${currency})! TX: ${tx.hash}. Waiting for confirmation...`,
                },
            ]);

            // Do not wait for full confirmation on frontend to avoid UI blocking.
            // Backend will verify the transaction.
            this.lastPaymentTx.set(tx.hash);

            // Update message to show processing
            this.messages.update((msgs) =>
                msgs.map((msg) => {
                    if (
                        msg.role === 'system' &&
                        msg.content.includes(tx.hash) &&
                        msg.content.includes('Waiting')
                    ) {
                        return {
                            ...msg,
                            content: `Payment sent (${currency})! TX: ${tx.hash}. Processing...`,
                        };
                    }
                    return msg;
                })
            );

            this.isLoading.set(true);

            this.startThinkingSimulation();

            // Find the message that initiated this payment to get the tool_call
            const originalMsg = this.messages().find((m) => m.payment_required === details);
            const pendingToolCall = originalMsg?.tool_call;

            console.log('Completing payment with tool call:', pendingToolCall);

            await this.callAgent(
                'Payment complete. Please proceed.',
                tx.hash,
                paidAmount, // Use paid amount (VKA or AVAX)
                [],
                pendingToolCall
            );
            await this.refreshBalance();
        } catch (error: any) {
            this.handleError(error);
        } finally {
            this.isProcessingPayment.set(false);
        }
    }

    handleError(error: any) {
        this.isLoading.set(false);
        console.error(error);
        this.messages.update((msgs) => [
            ...msgs,
            { role: 'system', content: 'Error: ' + (error.message || 'Something went wrong') },
        ]);
        this.scrollToBottom();
    }

    // Wallet Modal
    walletQrCode = signal<string>('');
    showToast = signal<boolean>(false);
    toastMessage = signal<string>('');

    toggleWalletModal() {
        this.showWalletModal.update((show) => !show);
        if (this.showWalletModal() && this.walletAddress()) {
            this.generateQrCode(this.walletAddress());
        }
    }

    generateQrCode(address: string) {
        QRCode.toDataURL(address, { width: 200, margin: 1 }, (err, url) => {
            if (!err) this.walletQrCode.set(url);
        });
    }

    // Image Preview Modal
    previewImage = signal<string | null>(null);

    openImagePreview(image: string) {
        this.previewImage.set(image);
    }

    closeImagePreview() {
        this.previewImage.set(null);
    }

    async copyAddress() {
        try {
            await navigator.clipboard.writeText(this.walletAddress());
            this.showToastNotification('Address copied to clipboard!');
        } catch (err) {
            console.error(err);
        }
    }

    showToastNotification(message: string) {
        this.toastMessage.set(message);
        this.showToast.set(true);
        setTimeout(() => this.showToast.set(false), 3000);
    }

    async resetWallet() {
        if (confirm('Are you sure you want to reset your wallet?')) {
            this.walletService.resetWallet();
            this.walletAddress.set('');
            localStorage.setItem('lastWalletAddress', '');

            // Clear Chat State
            this.startNewChat(true);
            this.conversations.set([]);

            await this.refreshBalance();
            this.showWalletModal.set(false);
        }
    }

    scrollToBottom(): void {
        setTimeout(() => {
            if (this.scrollContainer?.nativeElement) {
                this.scrollContainer.nativeElement.scrollTop =
                    this.scrollContainer.nativeElement.scrollHeight;
            }
        }, 100);
    }

    /**
     * Helper to extract transaction hash from a string.
     * Used in the template to avoid inline Regex which Angular parser rejects.
     */
    extractTxHash(content: string): string | null {
        if (!content) return null;
        const match = content.match(/Transaction: (0x[a-fA-F0-9]+)/);
        return match ? match[1] : null;
    }
}
