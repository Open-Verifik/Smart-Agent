import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-demo-scanner-shell',
    standalone: true,
    templateUrl: './demo-scanner-shell.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoScannerShellComponent {
    @Input() shellClass = '';
    @Input() innerClass = '';
}
