import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';

import { SetupService } from '../../setup.service';
import { Branding } from '../../setup.types';

@Component({
    selector: 'preview-liveness-result',
    standalone: true,
    imports: [CommonModule, MatIconModule, TranslocoModule],
    templateUrl: './preview-liveness-result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewLivenessResultComponent implements OnInit, OnChanges {
    @Input() branding!: Branding;
    @Input() form!: FormGroup;
    @Input() formGroup!: FormGroup;
    @Input() deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop';

    private _setup = inject(SetupService);
    readonly defaultBranding: Branding = this._setup.defaultBranding;

    ngOnInit(): void {
        this.branding = { ...this.defaultBranding, ...(this.branding || {}) } as Branding;
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['branding']) this.branding = { ...this.defaultBranding, ...(this.branding || {}) } as Branding;
    }
}
