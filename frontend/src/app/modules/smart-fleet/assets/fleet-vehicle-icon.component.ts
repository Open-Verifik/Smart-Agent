import { Component, Input } from '@angular/core';
import { FLEET_GROUP_ICONS, FleetGroupIcon } from '../smart-fleet.service';

/**
 * Vehicle mark for a fleet group.
 * SVGs are Material Design Icons (Pictogrammers), Apache 2.0, in /fleet-icons.
 */
@Component({
    selector: 'fleet-vehicle-icon',
    standalone: true,
    host: { class: 'inline-flex shrink-0' },
    styles: [
        `
            :host {
                color: inherit;
            }

            .mark {
                background-color: currentColor;
                mask-mode: alpha;
                mask-repeat: no-repeat;
                mask-position: center;
                mask-size: contain;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-position: center;
                -webkit-mask-size: contain;
            }
        `,
    ],
    template: `
        <span
            class="mark block h-full w-full"
            [style.mask-image]="mask"
            [style.-webkit-mask-image]="mask"
            aria-hidden="true"
        ></span>
    `,
})
export class FleetVehicleIconComponent {
    @Input() icon: FleetGroupIcon | string | null = 'car';

    get mask(): string {
        const name = FLEET_GROUP_ICONS.find((item) => item === this.icon) || 'car';

        return `url("/fleet-icons/${name}.svg")`;
    }
}
