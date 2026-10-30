import { Component } from '@angular/core';
import { SMARTREPORT_LINKS } from 'app/modules/smartreport/smartreport-links';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'smartreport-footer',
    templateUrl: './smartreport-footer.component.html',
    styleUrls: ['./smartreport-footer.component.scss'],
    standalone: true,
    imports: [CommonModule],
})
export class SmartReportFooterComponent {
    images = 'images/smartreport/';
    year = new Date().getFullYear();

    columns = [
        {
            title: 'Productos',
            links: [
                { label: 'Reporte Vehicular', url: SMARTREPORT_LINKS.vehicleReport },
                { label: 'Reporte Ciudadano', url: SMARTREPORT_LINKS.citizenReport },
            ].filter((link) => link.url),
        },
        {
            title: 'Compañía',
            links: [
                { label: 'Contáctanos', url: SMARTREPORT_LINKS.contact },
                { label: 'Quiénes somos', url: SMARTREPORT_LINKS.about },
            ],
        },
        {
            title: 'Otro',
            links: [{ label: 'Blog', url: SMARTREPORT_LINKS.blog }],
        },
    ];

    socials = [
        { name: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@Verifik/featured' },
        { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/verifik.co/' },
        { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/verifik.co' },
        { name: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@verifik.co' },
        { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/verifik-co/' },
    ];
}
