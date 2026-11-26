import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
    COMPLIANCE_COPY,
    ComplianceCopy,
    complianceHomePath,
} from 'app/modules/compliance/compliance-copy';
import {
    COMPLIANCE_COUNTRIES,
    ComplianceLabel,
    ComplianceLocale,
} from 'app/modules/compliance/compliance-taxonomy';
import { flagSrc } from 'app/modules/compliance/compliance.utils';

interface NavEntry {
    label: ComplianceLabel;
    href: string;
    internal?: boolean;
}

interface NavGroup {
    key: 'products' | 'solutions' | 'resources' | 'company';
    entries: NavEntry[];
}

const SIGN_IN = 'https://access.verifik.co/sign-in/6332941ccde4f719d9c00f9e';
const SIGN_UP = 'https://access.verifik.co/sign-up/6332941ccde4f719d9c00f9e';
const BIOMETRIC_DEMO = 'https://verifik.co/reconocimiento-facial-y-deteccion-de-vida/';

// Same entries as the verifik.co menu, so the Centro de Cumplimiento reads as part of the site.
const NAV: NavGroup[] = [
    {
        key: 'products',
        entries: [
            {
                label: { es: 'smartENROLL', en: 'smartENROLL' },
                href: 'https://verifik.co/solucion-kyc-digital/',
            },
            {
                label: { es: 'smartACCESS', en: 'smartACCESS' },
                href: 'https://verifik.co/smartaccess/',
            },
            {
                label: { es: 'smartCHECK', en: 'smartCHECK' },
                href: 'https://verifik.co/smartcheck/',
            },
            {
                label: { es: 'smartREPORT', en: 'smartREPORT' },
                href: 'https://verifik.co/reportes-vehiculares-ciudadanos-empresa/',
            },
            {
                label: { es: 'HumanAuthn API', en: 'HumanAuthn API' },
                href: 'https://verifik.co/humanauthn-alternativa-de-webauthn/',
            },
        ],
    },
    {
        key: 'solutions',
        entries: [
            {
                label: { es: 'Compra ahora, paga después', en: 'Buy now, pay later' },
                href: 'https://verifik.co/solucion-ekyc/bnpl/',
            },
            {
                label: { es: 'Banca abierta', en: 'Open banking' },
                href: 'https://verifik.co/industria/banca-abierta/',
            },
            {
                label: { es: 'Juegos y casinos', en: 'Gaming and casinos' },
                href: 'https://verifik.co/industria/juegos-y-casino/',
            },
            {
                label: { es: 'Cripto', en: 'Crypto' },
                href: 'https://verifik.co/industria/cripto-autocustodia/',
            },
            {
                label: { es: 'Logística y transporte', en: 'Logistics and transport' },
                href: 'https://verifik.co/industria/logistica/',
            },
            {
                label: { es: 'Hoteles', en: 'Hotels' },
                href: 'https://verifik.co/industria/hoteles/',
            },
        ],
    },
    {
        key: 'resources',
        entries: [
            {
                label: { es: 'Centro de Cumplimiento', en: 'Compliance Center' },
                href: '',
                internal: true,
            },
            { label: { es: 'Blog', en: 'Blog' }, href: 'https://verifik.co/blogs/' },
            {
                label: { es: 'Documentación', en: 'Documentation' },
                href: 'https://docs.verifik.co/',
            },
            {
                label: { es: 'Recursos de marca', en: 'Brand resources' },
                href: 'https://verifik.co/recursos-marca/',
            },
        ],
    },
    {
        key: 'company',
        entries: [
            {
                label: { es: 'Quiénes somos', en: 'About us' },
                href: 'https://verifik.co/acerca-de-verifik/',
            },
            {
                label: { es: 'Colabora con nosotros', en: 'Partners' },
                href: 'https://verifik.co/partners/',
            },
            {
                label: { es: 'Contáctanos', en: 'Contact us' },
                href: 'https://verifik.co/agendar-sesion/',
            },
        ],
    },
];

// verifik.co header plus the country bar and search of the Centro de Cumplimiento (Open-Verifik/app.verifik.co#1129)
@Component({
    selector: 'compliance-header',
    templateUrl: './compliance-header.component.html',
    styleUrls: ['./compliance-header.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterLink, MatIconModule],
})
export class ComplianceHeaderComponent {
    @Input() locale: ComplianceLocale = 'es';
    @Input() country: string = null;
    @Input() query = '';
    /** Same page in the other language. */
    @Input() alternateUrl: string;

    readonly nav = NAV;
    readonly countries = COMPLIANCE_COUNTRIES;
    readonly signIn = SIGN_IN;
    readonly signUp = SIGN_UP;
    readonly demo = BIOMETRIC_DEMO;
    readonly flagSrc = flagSrc;

    menuOpen = false;
    openGroup: string = null;

    constructor(
        private _router: Router,
        private _host: ElementRef<HTMLElement>
    ) {}

    get copy(): ComplianceCopy {
        return COMPLIANCE_COPY[this.locale];
    }

    get home(): string {
        return complianceHomePath(this.locale);
    }

    countryLink(key: string): string {
        // Tapping the active country goes back to every country
        return complianceHomePath(this.locale, key === this.country ? null : key);
    }

    entryHref(entry: NavEntry): string {
        return entry.internal ? this.home : entry.href;
    }

    toggleGroup(key: string): void {
        this.openGroup = this.openGroup === key ? null : key;
    }

    search(value: string): void {
        const q = value.trim();

        this._router.navigate([complianceHomePath(this.locale, this.country)], {
            queryParams: q ? { q } : {},
        });
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        if (!this._host.nativeElement.contains(event.target as Node)) {
            this.openGroup = null;
        }
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        this.openGroup = null;
        this.menuOpen = false;
    }
}
