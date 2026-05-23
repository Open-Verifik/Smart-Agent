import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-demo-raster-image',
    standalone: true,
    imports: [NgClass],
    templateUrl: './demo-raster-image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoRasterImageComponent {
    @Input({ required: true }) src = '';
    @Input({ required: true }) alt = '';
    @Input() className = '';
    @Input() fill = false;
    @Input() sizes = '100vw';
    @Input() width = 800;
    @Input() height = 800;

    onError(event: Event): void {
        const img = event.target as HTMLImageElement;
        img.style.display = 'none';
    }
}
