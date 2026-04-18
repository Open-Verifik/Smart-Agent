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
import { TranslocoModule } from '@jsverse/transloco';

import { SetupService } from '../../setup.service';
import { Branding } from '../../setup.types';

@Component({
    selector: 'preview-document-scan',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './preview-document-scan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewDocumentScanComponent implements OnInit, OnChanges {
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

    cameraClasses(): string {
        return this.deviceType === 'mobile' ? 'w-full h-48' : 'w-96 h-64';
    }
}
