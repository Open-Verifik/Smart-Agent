import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as QRCode from 'qrcode';

import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { AuthModalComponent } from '../../layout/common/auth-modal/auth-modal.component';
import { MarkdownPipe } from '../../shared/pipes/markdown.pipe';
import { AgentErc8004Component } from './agent-erc8004/agent-erc8004.component';
import { AgentFeedbackComponent } from './agent-feedback/agent-feedback.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { AgentWalletService } from './services/agent-wallet.service';
import {
    MessageDisplayView,
    prepareMessageForDisplay,
} from './utils/chat-message-display.util';
import {
    CHAT_IMAGE_MAX_PAYLOAD_BYTES,
    CHAT_IMAGE_MAX_SOURCE_FILE_BYTES,
    ChatImagePrepareError,
    estimateChatPayloadBytes,
    prepareChatImageAttachment,
} from './utils/chat-image-prepare.util';

interface PendingChatAttachment {
    dataUrl: string;
    originalSizeKb: number;
    compressedSizeKb: number;
}

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
    chainId?: number;
    chainHex?: string;
    chainName?: string;
    nativeSymbol?: string;
    isTestnet?: boolean;
    acceptedChains?: Array<{
        chainId: number;
        hex: string;
        key: string;
        name: string;
        nativeSymbol: string;
        isTestnet: boolean;
        paymentContract: string | null;
        vkaTokenAddress: string | null;
        blockExplorerUrl: string;
    }>;
}

interface ChatMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    tool_call?: ToolCall;
    payment_required?: PaymentRequired;
    data?: any;
    proof?: string;
    images?: string[];
    paymentTx?: string;
    paymentCurrency?: 'AVAX' | 'VKA';
    paymentAmount?: string;
    paymentStatus?: 'pending' | 'processing' | 'confirmed';
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
        TextFieldModule,
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
    @ViewChild(CdkTextareaAutosize) private messageInputAutosize?: CdkTextareaAutosize;

    private readonly _transloco = inject(TranslocoService);

    baseUrl = environment.baseUrl;
    protected readonly smartAgentUrl = environment.smartAgentUrl;
    protected readonly tokenTicker = environment.tokenTicker || 'VKA';
    private apiUrl = `${environment.smartAgentUrl}/api/agent`;
    
    /**
     * Get the Snowtrace explorer URL based on network configuration
     * Uses explicit isTestnet flag from environment, or falls back to chainId/RPC URL detection
     */
    protected getSnowtraceUrl(): string {
        // First check explicit configuration
        if (environment.isTestnet !== undefined) {
            return environment.isTestnet 
                ? 'https://testnet.snowtrace.io' 
                : 'https://snowtrace.io';
        }
        
        // Fallback: Check chainId (43114 = Mainnet, 43113 = Fuji Testnet)
        if (environment.chainId) {
            return environment.chainId === 43113 
                ? 'https://testnet.snowtrace.io' 
                : 'https://snowtrace.io';
        }
        
        // Fallback: Check RPC URL for testnet indicators
        const rpcUrl = environment.rpcUrl || '';
        const isTestnet = rpcUrl.includes('test') || 
                         rpcUrl.includes('fuji') || 
                         rpcUrl.includes('43113');
        
        return isTestnet 
            ? 'https://testnet.snowtrace.io' 
            : 'https://snowtrace.io';
    }

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

        // Auto-register VKA token if using MetaMask
        this.walletService.registerVkaToken();

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
        this.messageInputAutosize?.reset();
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
    pendingAttachments = signal<PendingChatAttachment[]>([]);
    isPreparingAttachment = signal(false);

    async onPaste(event: ClipboardEvent) {
        const items = event.clipboardData?.items;
        if (!items) {
            return;
        }
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') === -1) {
                continue;
            }
            const pastedFile = items[i].getAsFile();
            if (pastedFile) {
                await this.prepareAttachmentFromFile(pastedFile);
            }
        }
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            Array.from(input.files).forEach((selectedFile) => {
                void this.prepareAttachmentFromFile(selectedFile);
            });
        }
        input.value = '';
    }

    removeAttachment(index: number) {
        this.pendingAttachments.update((current) => current.filter((_, i) => i !== index));
    }

    private async prepareAttachmentFromFile(sourceFile: File): Promise<void> {
        this.isPreparingAttachment.set(true);
        try {
            const prepared = await prepareChatImageAttachment(sourceFile);
            this.pendingAttachments.update((current) => [
                ...current,
                {
                    dataUrl: prepared.dataUrl,
                    originalSizeKb: prepared.originalSizeKb,
                    compressedSizeKb: prepared.compressedSizeKb,
                },
            ]);
            if (prepared.compressedSizeKb < prepared.originalSizeKb) {
                this.showAttachmentNotice(
                    this._transloco.translate('chat.attachments.compressed', {
                        from: prepared.originalSizeKb,
                        to: prepared.compressedSizeKb,
                    }),
                );
            }
        } catch (prepareError) {
            this.showAttachmentError(prepareError);
        } finally {
            this.isPreparingAttachment.set(false);
        }
    }

    private showAttachmentError(prepareError: unknown): void {
        let messageKey = 'chat.attachments.unsupportedFormat';
        let params: Record<string, string | number> = {};

        if (prepareError instanceof ChatImagePrepareError) {
            if (prepareError.code === 'source_too_large') {
                messageKey = 'chat.attachments.sourceTooLarge';
                params = {
                    maxMb: Math.round(CHAT_IMAGE_MAX_SOURCE_FILE_BYTES / (1024 * 1024)),
                };
            } else if (prepareError.code === 'still_too_large') {
                messageKey = 'chat.attachments.stillTooLarge';
            } else if (prepareError.code === 'unsupported_format') {
                messageKey = 'chat.attachments.unsupportedFormat';
            } else {
                messageKey = 'chat.attachments.stillTooLarge';
            }
        }

        this.showAttachmentNotice(this._transloco.translate(messageKey, params));
    }

    private showAttachmentNotice(noticeText: string): void {
        this.messages.update((msgs) => [
            ...msgs,
            { role: 'system', content: noticeText },
        ]);
        this.scrollToBottom();
    }

    onInputKeydown(event: KeyboardEvent): void {
        if (event.key !== 'Enter' || event.shiftKey) return;

        event.preventDefault();
        this.sendMessage();
    }

    async sendMessage() {
        const input = this.userInput();
        const pendingList = this.pendingAttachments();
        const attachmentDataUrls = pendingList.map((attachment) => attachment.dataUrl);

        if (!input.trim() && attachmentDataUrls.length === 0) return;

        if (
            attachmentDataUrls.length > 0 &&
            estimateChatPayloadBytes(attachmentDataUrls) > CHAT_IMAGE_MAX_PAYLOAD_BYTES
        ) {
            this.showAttachmentNotice(
                this._transloco.translate('chat.attachments.payloadTooLarge'),
            );
            return;
        }

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
            images: attachmentDataUrls,
        };

        this.messages.update((msgs) => [...msgs, userMsg]);

        this.userInput.set('');
        this.messageInputAutosize?.reset();
        this.pendingAttachments.set([]);
        this.isLoading.set(true);
        this.scrollToBottom();

        this.startThinkingSimulation();

        try {
            await this.callAgent(input, null, null, attachmentDataUrls);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async callAgent(
        message: string,
        paymentTx: string | null = null,
        paymentAmount: string | null = null,
        images: string[] = [],
        pendingToolCall: any = null,
        paymentChainId: number | null = null
    ) {
        const isCredits = this.chatMode() === 'credits';
        const userToken = isCredits ? localStorage.getItem('accessToken') : null;

        const payload = {
            message: message,
            conversationId: this.currentConversationId(),
            paymentTx: isCredits ? null : paymentTx,
            paymentWallet: isCredits ? this.getUserId() : this.walletAddress(),
            paymentAmount: isCredits ? null : paymentAmount,
            paymentChainId: isCredits ? null : paymentChainId,
            mode: this.chatMode(),
            userToken: userToken,
            images: images,
            pendingToolCall: pendingToolCall,
        };

        this.http.post<any>(`${this.apiUrl}/chat`, payload, { observe: 'response' }).subscribe({
            next: (httpResponse) => {
                this.isLoading.set(false);
                this.thinkingSteps.set([]);
                this.currentThinkingStep.set('');

                const response = httpResponse.body;
                const headers = httpResponse.headers;

                if (response.conversationId && !this.currentConversationId()) {
                    this.currentConversationId.set(response.conversationId);
                    localStorage.setItem('currentConversationId', response.conversationId);
                    this.loadConversations();
                }

                // Check for proof in response body, _proof field, or headers
                const proofHeader = headers.get('x-validation-proof');
                let proof = response.proof || response._proof || proofHeader;

                const msg: ChatMessage = {
                    role: response.role,
                    content: response.content,
                    tool_call: response.tool_call,
                    payment_required: response.payment_required,
                    data: response.data,
                    proof: proof,
                    images: response.images, // Backend should return image URLs if any were processed/saved
                };

                this.messages.update((msgs) => [...msgs, msg]);
                this.scrollToBottom();

                if (msg.data && msg.role === 'assistant') {
                    // Find the most recent payment message and mark it as confirmed
                    const paymentMsgs = this.messages()
                        .filter((m) => m.role === 'system' && (m.paymentTx || m.content.includes('TX:')))
                        .reverse(); // Get most recent first
                    
                    if (paymentMsgs.length > 0) {
                        const paymentMsg = paymentMsgs[0];
                        const txHash = paymentMsg.paymentTx || this.extractPaymentTxHash(paymentMsg.content);
                        if (txHash) {
                            this.lastPaymentTx.set(txHash);
                            // Mark payment as confirmed since we got a successful response
                            this.updatePaymentMessageStatus(txHash, 'confirmed');
                        }
                    }

                    // Fetch proof asynchronously if missing and in x402 mode
                    if (!msg.proof && this.chatMode() === 'x402' && msg.tool_call && msg.data) {
                        this.fetchProofAsync(msg, this.messages().length - 1);
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

    async refreshBalance(): Promise<void> {
        const [balance, tokenBalance] = await Promise.all([
            this.walletService.getBalance(),
            this.walletService.getTokenBalance(),
        ]);
        this.walletBalance.set(balance);
        this.tokenBalance.set(tokenBalance);
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

    /** Display-safe view: redacts base64, extracts images; does not mutate stored messages. */
    getMessageDisplay(msg: ChatMessage): MessageDisplayView {
        return prepareMessageForDisplay(msg);
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

    async confirmPayment(msgIndex: number) {
        const msg = this.messages()[msgIndex];
        if (!msg.payment_required) return;

        await this.refreshBalance();

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

        // If the 402 response declared a chain, sign on it.
        if (details.chainId) {
            try {
                this.walletService.setActiveChain(details.chainId);
            } catch (e) {
                console.warn('[Chat] Backend asked for unsupported chain', details.chainId, e);
            }
        }

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
            
            // Create payment confirmation message using helper function
            this.addPaymentConfirmationMessage(tx.hash, currency, paidAmount, 'pending');

            // Do not wait for full confirmation on frontend to avoid UI blocking.
            // Backend will verify the transaction.
            this.lastPaymentTx.set(tx.hash);

            // Update message to show processing
            this.updatePaymentMessageStatus(tx.hash, 'processing');

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
                pendingToolCall,
                this.walletService.getActiveChain().chainId
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
        const httpStatus = error?.status ?? error?.statusCode;
        const errorMessageText = String(error?.message ?? '');
        const isPayloadTooLarge =
            httpStatus === 413 ||
            errorMessageText.includes('413') ||
            errorMessageText.toLowerCase().includes('entity too large');

        const displayMessage = isPayloadTooLarge
            ? this._transloco.translate('chat.errors.requestTooLarge')
            : 'Error: ' + (errorMessageText || 'Something went wrong');

        this.messages.update((msgs) => [
            ...msgs,
            { role: 'system', content: displayMessage },
        ]);
        this.scrollToBottom();
    }

    /**
     * Fetch proof asynchronously after the main response
     * This ensures the proof is generated and displayed even if it wasn't included in the initial response
     */
    private fetchProofAsync(msg: ChatMessage, messageIndex: number) {
        // Extract payment transaction hash
        let paymentTx: string | null = null;
        
        // Try to get from lastPaymentTx first (most recent)
        if (this.lastPaymentTx()) {
            paymentTx = this.lastPaymentTx();
        } else {
            // Try to extract from payment messages (get the most recent one)
            const paymentMsgs = this.messages()
                .filter((m) => m.role === 'system' && m.content.includes('TX:'))
                .reverse(); // Get most recent first
            
            for (const paymentMsg of paymentMsgs) {
                const txMatch = paymentMsg.content.match(/TX: (0x[a-fA-F0-9]+)/);
                if (txMatch) {
                    paymentTx = txMatch[1];
                    break; // Use the most recent payment transaction
                }
            }
        }

        // We need tool_call, data, and paymentTx to generate proof
        if (!msg.tool_call || !msg.data || !paymentTx) {
            console.log('[Chat] Cannot fetch proof: missing required data', {
                hasToolCall: !!msg.tool_call,
                hasData: !!msg.data,
                hasPaymentTx: !!paymentTx,
            });
            return;
        }

        // Make async call to generate proof
        const payload = {
            toolName: msg.tool_call.tool,
            args: msg.tool_call.args,
            result: msg.data,
            paymentTx: paymentTx,
        };

        console.log('[Chat] Fetching proof asynchronously for tool:', msg.tool_call.tool);

        this.http.post<any>(`${this.apiUrl}/proof`, payload).subscribe({
            next: (response) => {
                if (response.proof) {
                    // Update the message with the proof
                    this.messages.update((msgs) => {
                        const updated = [...msgs];
                        if (updated[messageIndex]) {
                            updated[messageIndex] = {
                                ...updated[messageIndex],
                                proof: response.proof,
                            };
                        }
                        return updated;
                    });
                    console.log('[Chat] Proof fetched and updated:', response.proof);
                    this.scrollToBottom(); // Scroll to show the updated proof
                }
            },
            error: (err) => {
                console.warn('[Chat] Failed to fetch proof:', err);
                // Don't show error to user, proof generation is optional
            },
        });
    }

    // Wallet Modal
    walletQrCode = signal<string>('');
    showToast = signal<boolean>(false);
    toastMessage = signal<string>('');

    async toggleWalletModal() {
        this.showWalletModal.update((show) => !show);
        if (this.showWalletModal() && this.walletAddress()) {
            this.generateQrCode(this.walletAddress());
            await this.refreshBalance();
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

    /**
     * Extract transaction hash from payment message content
     * Handles formats like "Payment sent (VKA)! TX: 0x..." or "Payment sent! TX: 0x..."
     */
    extractPaymentTxHash(content: string): string | null {
        if (!content) return null;
        // Match patterns like "TX: 0x..." in payment messages
        const match = content.match(/TX:\s*(0x[a-fA-F0-9]+)/i);
        return match ? match[1] : null;
    }

    /**
     * Extract currency from payment message content
     * Handles formats like "Payment sent (VKA)!" or "Payment sent (AVAX)!"
     */
    extractPaymentCurrency(content: string): 'AVAX' | 'VKA' | null {
        if (!content) return null;
        const vkaMatch = content.match(/Payment sent\s*\(VKA\)/i);
        if (vkaMatch) return 'VKA';
        const avaxMatch = content.match(/Payment sent\s*\(AVAX\)/i);
        if (avaxMatch) return 'AVAX';
        // Default to AVAX if no currency specified
        if (content.includes('Payment sent')) return 'AVAX';
        return null;
    }

    /**
     * Create and add a payment confirmation message to the chat
     * This provides a structured, maintainable way to create payment confirmation messages
     */
    private addPaymentConfirmationMessage(
        txHash: string,
        currency: 'AVAX' | 'VKA',
        amount: string,
        status: 'pending' | 'processing' | 'confirmed' = 'pending'
    ): void {
        const statusText = status === 'pending' 
            ? 'Waiting for confirmation...' 
            : status === 'processing' 
            ? 'Processing...' 
            : 'Confirmed';

        const message: ChatMessage = {
            role: 'system',
            content: `Payment sent (${currency})! TX: ${txHash}. ${statusText}`,
            paymentTx: txHash,
            paymentCurrency: currency,
            paymentAmount: amount,
            paymentStatus: status,
        };

        this.messages.update((msgs) => [...msgs, message]);
        this.scrollToBottom();
    }

    /**
     * Update the status of an existing payment message
     * This allows us to update the payment confirmation UI as the transaction progresses
     */
    private updatePaymentMessageStatus(
        txHash: string,
        status: 'processing' | 'confirmed'
    ): void {
        this.messages.update((msgs) =>
            msgs.map((msg) => {
                if (msg.role === 'system' && msg.paymentTx === txHash) {
                    const statusText = status === 'processing' 
                        ? 'Processing...' 
                        : 'Confirmed';
                    
                    return {
                        ...msg,
                        content: `Payment sent (${msg.paymentCurrency || 'AVAX'})! TX: ${txHash}. ${statusText}`,
                        paymentStatus: status,
                    };
                }
                return msg;
            })
        );
    }
}
