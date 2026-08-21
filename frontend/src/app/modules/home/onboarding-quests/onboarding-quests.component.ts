import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import type { Onboarding, OnboardingTask } from 'app/core/services/onboarding.service';

/** Number of open quests surfaced in the "next up" section before the rest are folded away. */
const NEXT_UP_LIMIT = 3;

/** Circumference of the SVG progress ring (r = 34). */
const RING_CIRCUMFERENCE = 2 * Math.PI * 34;

const MILESTONES = [25, 50, 75, 100] as const;

@Component({
    selector: 'app-onboarding-quests',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterLink,
        TranslocoModule,
    ],
    templateUrl: './onboarding-quests.component.html',
    styleUrl: './onboarding-quests.component.scss',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingQuestsComponent {
    readonly onboarding = input<Onboarding | null>(null);
    readonly verifyingTaskId = input<string | null>(null);
    readonly verificationError = input<string | null>(null);
    /** Resolver owned by HomeComponent so route mapping stays in one place. */
    readonly taskLink = input.required<(taskId: string) => string>();

    readonly openExplanation = output<{ taskId: string; status: string }>();
    readonly startKyc = output<void>();

    readonly ringCircumference = RING_CIRCUMFERENCE;
    readonly milestones = MILESTONES;

    /** Completed list stays folded until the user asks for it. */
    readonly completedExpanded = signal(false);

    readonly tasks = computed<OnboardingTask[]>(() => this.onboarding()?.tasks ?? []);

    readonly completedQuests = computed(() =>
        this.tasks().filter((task) => task.status === 'COMPLETED')
    );

    readonly openQuests = computed(() =>
        this.tasks().filter((task) => task.status !== 'COMPLETED')
    );

    readonly nextQuests = computed(() => this.openQuests().slice(0, NEXT_UP_LIMIT));

    readonly hiddenQuestCount = computed(() =>
        Math.max(0, this.openQuests().length - NEXT_UP_LIMIT)
    );

    readonly completedCount = computed(() => this.completedQuests().length);

    readonly totalCount = computed(() => this.tasks().length);

    readonly progressPercentage = computed(() => {
        const total = this.totalCount();
        if (!total) return 0;
        return (this.completedCount() / total) * 100;
    });

    readonly allQuestsComplete = computed(
        () => this.totalCount() > 0 && this.openQuests().length === 0
    );

    readonly totalRewarded = computed(() => this.onboarding()?.totalRewardedAmount ?? 0);

    readonly isActivated = computed(() => this.onboarding()?.isActivated ?? false);

    /**
     * Dash offset that draws the ring arc for the current completion percentage.
     */
    readonly ringOffset = computed(
        () => RING_CIRCUMFERENCE - (this.progressPercentage() / 100) * RING_CIRCUMFERENCE
    );

    /**
     * True once the checklist has passed the given milestone percentage.
     */
    isMilestoneReached(milestone: number): boolean {
        return this.progressPercentage() >= milestone;
    }

    toggleCompleted(): void {
        this.completedExpanded.update((expanded) => !expanded);
    }

    onOpenExplanation(task: OnboardingTask): void {
        this.openExplanation.emit({ taskId: task.taskId, status: task.status });
    }

    onStartKyc(): void {
        this.startKyc.emit();
    }
}
