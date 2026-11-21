import { Component, HostListener } from '@angular/core';
import { SMARTREPORT_LINKS } from 'app/modules/smartreport/smartreport-links';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'smartreport-header',
    templateUrl: './smartreport-header.component.html',
    styleUrls: ['./smartreport-header.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class SmartReportHeaderComponent {
    links = SMARTREPORT_LINKS;
    images = 'images/smartreport/';
    menuOpen = false;
    openDropdown: 'products' | 'company' | null = null;

    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
        this.openDropdown = null;
    }

    toggleDropdown(dropdown: 'products' | 'company'): void {
        this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
    }

    @HostListener('document:keydown.escape')
    close(): void {
        this.menuOpen = false;
        this.openDropdown = null;
    }
}
