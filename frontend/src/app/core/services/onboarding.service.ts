import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpWrapperService } from './http-wrapper.service';
import { environment } from 'environments/environment';

export interface OnboardingTask {
  taskId: string;
  status: 'NOT_STARTED' | 'VISITED' | 'STARTED' | 'STUCK' | 'COMPLETED';
  rewarded: boolean;
  rewardAmount: number;
  visitedAt?: string | null;
  startedAt?: string | null;
  completedAt?: string | null;
  stuckAt?: string | null;
}

export interface Onboarding {
  client: string;
  tasks: OnboardingTask[];
  isActivated: boolean;
  totalRewardedAmount: number;
}

export interface OnboardingResponse {
  data: Onboarding;
}

export interface OnboardingVerifyResponse {
  data: {
    success: boolean;
    reason?: string;
    onboarding: Onboarding;
    task: OnboardingTask;
    alreadyCompleted?: boolean;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private _httpWrapper = inject(HttpWrapperService);
  private _apiUrl = environment.apiUrl;

  /**
   * Get the client's onboarding progress checklist
   */
  getOnboarding(): Observable<OnboardingResponse> {
    return this._httpWrapper.sendRequest('get', `${this._apiUrl}/v2/onboarding`);
  }

  /**
   * Update the status of an onboarding task (e.g. VISITED, STARTED, STUCK)
   */
  updateTaskStatus(taskId: string, status: 'NOT_STARTED' | 'VISITED' | 'STARTED' | 'STUCK'): Observable<OnboardingResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/onboarding/tasks/${taskId}/status`, {
      status,
    });
  }

  /**
   * Trigger backend verification of an onboarding task
   */
  verifyTask(taskId: string): Observable<OnboardingVerifyResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/onboarding/tasks/${taskId}/verify`, {});
  }

  /**
   * Trigger backend verification of all incomplete onboarding tasks
   */
  verifyAllTasks(): Observable<OnboardingResponse> {
    return this._httpWrapper.sendRequest('post', `${this._apiUrl}/v2/onboarding/verify-all`, {});
  }
}
