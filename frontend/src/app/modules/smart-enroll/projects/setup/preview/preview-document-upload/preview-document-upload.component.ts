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
    selector: 'preview-document-upload',
    standalone: true,
    imports: [CommonModule, TranslocoModule],
    templateUrl: './preview-document-upload.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewDocumentUploadComponent implements OnInit, OnChanges {
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
