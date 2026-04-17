import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';

import { SetupService } from '../setup.service';

/**
 * Step indicator chips on top of the wizard.
 * Mirrors verifik-client-panel `SmartEnrollBreadcrumbsComponent` with router targets
 * pointed at `/smart-enroll/projects/:projectId/setup/:step`.
 */
@Component({
    selector: 'setup-breadcrumbs',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupBreadcrumbsComponent implements OnChanges, OnDestroy, AfterViewInit {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;
    @Input() isStepValid!: (step: number) => boolean;

    private _cdr = inject(ChangeDetectorRef);
    private _setup = inject(SetupService);
    private _router = inject(Router);

    private _unsub$ = new Subject<void>();

    projectId = '';
    stepIndex = 0;
    steps: string[] = [];

    constructor() {
        this.steps = this._setup.initialSteps;
        this._initSubscribers();
    }

    ngAfterViewInit(): void {
        if (this.form) this._initFormSubscribers();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form'] && this.form) this._initFormSubscribers();
    }

    ngOnDestroy(): void {
        this._unsub$.next();
        this._unsub$.complete();
    }

    get canNavigate(): boolean {
        return !this.loading && !this.saving;
    }

    canNavigateToStep(target: number): boolean {
        if (target === this.stepIndex) return true;
        if (target === 0) return true;
        if (target > this.stepIndex) return this.isStepValid?.(this.stepIndex) ?? false;
        return this._areAllPreviousStepsValid(target);
    }

    onStepClick(target: number): void {
        if (!this.canNavigate || target === this.stepIndex) return;
        if (!this._areAllPreviousStepsValid(target)) return;
        this._router.navigate(['/smart-enroll/projects', this.projectId, 'setup', target]);
    }

    private _areAllPreviousStepsValid(target: number): boolean {
        if (target === 0) return true;
        for (let i = 0; i < target; i++) {
            if (!this.isStepValid?.(i)) return false;
        }
        return true;
    }

    private _initFormSubscribers(): void {
        this._setSteps(this.form.get('target')?.value);
        this.form
            .get('target')
            ?.valueChanges.pipe(takeUntil(this._unsub$))
            .subscribe((target) => this._setSteps(target));
        setTimeout(() => this._cdr.markForCheck(), 0);
    }

    private _initSubscribers(): void {
        this._setup.stepIndex$.pipe(takeUntil(this._unsub$)).subscribe((step) => {
            this.stepIndex = step;
            this._cdr.markForCheck();
        });
        this._setup.projectId$.pipe(takeUntil(this._unsub$)).subscribe((projectId) => {
            this.projectId = projectId;
            this._cdr.markForCheck();
        });
    }

    private _setSteps(target: string | undefined): void {
        if (!target) this.steps = this._setup.initialSteps;
        else if (target === 'business') this.steps = this._setup.businessSteps;
        else this.steps = this._setup.personalSteps;
        this._cdr.markForCheck();
    }
}
