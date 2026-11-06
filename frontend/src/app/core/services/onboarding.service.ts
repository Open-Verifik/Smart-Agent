import { Injectable, inject } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
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

const STORAGE_COMPLETED_TASKS_KEY = 'verifik_onboarding_completed_task_ids';
const STORAGE_ALL_COMPLETED_KEY = 'verifik_onboarding_all_completed';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  private _httpWrapper = inject(HttpWrapperService);
  private _apiUrl = environment.apiUrl;

  private _cachedOnboarding: Onboarding | null = null;
  private readonly _completedTasks = new Set<string>();
  private readonly _reportedStatus = new Set<string>();
  private _allCompleted = false;

  constructor() {
    this._hydrateFromStorage();
  }

  private _hydrateFromStorage(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      if (localStorage.getItem(STORAGE_ALL_COMPLETED_KEY) === 'true') {
        this._allCompleted = true;
      }
      const raw = localStorage.getItem(STORAGE_COMPLETED_TASKS_KEY);
      if (raw) {
        const ids = JSON.parse(raw);
        if (Array.isArray(ids)) {
          ids.forEach((id) => this._completedTasks.add(id));
        }
      }
    } catch {
      // Ignored
    }
  }

  private _syncCompletedFromOnboarding(onboarding: Onboarding | undefined): void {
    if (!onboarding?.tasks) return;
    this._cachedOnboarding = onboarding;
    const tasks = onboarding.tasks;
    tasks.forEach((t) => {
      if (t.status === 'COMPLETED') {
        this._completedTasks.add(t.taskId);
      }
    });

    if (tasks.length > 0 && tasks.every((t) => t.status === 'COMPLETED')) {
      this._allCompleted = true;
      try {
        localStorage.setItem(STORAGE_ALL_COMPLETED_KEY, 'true');
      } catch {}
    }

    try {
      localStorage.setItem(
        STORAGE_COMPLETED_TASKS_KEY,
        JSON.stringify([...this._completedTasks])
      );
    } catch {}
  }

  /**
   * Check whether a specific task is already completed
   */
  isTaskCompleted(taskId: string): boolean {
    return this._allCompleted || this._completedTasks.has(taskId);
  }

  /**
   * Check whether all onboarding tasks are finished
   */
  areAllTasksCompleted(): boolean {
    return this._allCompleted;
  }

  /**
   * Mark a task as completed locally (e.g. when subscription plans confirm active status)
   */
  markTaskCompletedLocally(taskId: string): void {
    this._completedTasks.add(taskId);
    try {
      localStorage.setItem(
        STORAGE_COMPLETED_TASKS_KEY,
        JSON.stringify([...this._completedTasks])
      );
    } catch {}
  }

  /**
   * Get the client's onboarding progress checklist
   */
  getOnboarding(): Observable<OnboardingResponse> {
    return this._httpWrapper.sendRequest('get', `${this._apiUrl}/v2/onboarding`).pipe(
      tap((res: any) => {
        if (res?.data) {
          this._syncCompletedFromOnboarding(res.data);
        }
      })
    );
  }

  /**
   * Update the status of an onboarding task (e.g. VISITED, STARTED, STUCK).
   * Short-circuits network calls if the task is already completed or if the status
   * was already sent in the current session.
   */
  updateTaskStatus(
    taskId: string,
    status: 'NOT_STARTED' | 'VISITED' | 'STARTED' | 'STUCK'
  ): Observable<OnboardingResponse> {
    const fallbackResponse: OnboardingResponse = {
      data: this._cachedOnboarding ?? {
        client: '',
        tasks: [],
        isActivated: true,
        totalRewardedAmount: 0,
      },
    };

    if (this._allCompleted || this._completedTasks.has(taskId)) {
      return of(fallbackResponse);
    }

    const reportKey = `${taskId}:${status}`;
    if (this._reportedStatus.has(reportKey)) {
      return of(fallbackResponse);
    }
    this._reportedStatus.add(reportKey);

    return this._httpWrapper
      .sendRequest('post', `${this._apiUrl}/v2/onboarding/tasks/${taskId}/status`, {
        status,
      })
      .pipe(
        tap((res: any) => {
          if (res?.data) {
            this._syncCompletedFromOnboarding(res.data);
          }
        })
      );
  }

  /**
   * Trigger backend verification of an onboarding task
   */
  verifyTask(taskId: string): Observable<OnboardingVerifyResponse> {
    return this._httpWrapper
      .sendRequest('post', `${this._apiUrl}/v2/onboarding/tasks/${taskId}/verify`, {})
      .pipe(
        tap((res: any) => {
          if (res?.data?.onboarding) {
            this._syncCompletedFromOnboarding(res.data.onboarding);
          }
        })
      );
  }

  /**
   * Trigger backend verification of all incomplete onboarding tasks
   */
  verifyAllTasks(): Observable<OnboardingResponse> {
    return this._httpWrapper
      .sendRequest('post', `${this._apiUrl}/v2/onboarding/verify-all`, {})
      .pipe(
        tap((res: any) => {
          if (res?.data) {
            this._syncCompletedFromOnboarding(res.data);
          }
        })
      );
  }
}
