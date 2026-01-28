import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../../../environments/environment';

// Duplicate interface or ideally import from types
export interface AgentCardInfo {
  identity: {
    name: string;
    description: string;
    agentCardURI: string;
    agentAddress: string;
    active: boolean;
  };
  reputation: {
    averageRating: number;
    totalFeedbacks: number;
  };
  feedbacks?: Array<{
    id: string;
    client: string;
    rating: number;
    comment: string;
    paymentProof: string;
  }>;
}

import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-agent-erc8004',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslocoModule],
  templateUrl: './agent-erc8004.component.html',
  styles: ``,
})
export class AgentErc8004Component {
  @Input() agentInfo: AgentCardInfo | null = null;

  get sortedFeedbacks() {
    return this.agentInfo?.feedbacks ? [...this.agentInfo.feedbacks].reverse().slice(0, 10) : [];
  }

  /**
   * Get the appropriate Snowtrace URL based on environment
   */
  get snowtraceUrl(): string {
    if (environment.isTestnet !== undefined) {
      return environment.isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
    }
    if (environment.chainId) {
      return environment.chainId === 43113 ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
    }
    const rpcUrl = environment.rpcUrl || '';
    const isTestnet = rpcUrl.includes('test') || rpcUrl.includes('fuji') || rpcUrl.includes('43113');
    return isTestnet ? 'https://testnet.snowtrace.io' : 'https://snowtrace.io';
  }
}
