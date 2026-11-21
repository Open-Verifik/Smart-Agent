import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SmartReportBlogService } from 'app/modules/smartreport/blog/smartreport-blog.service';
import { authorPhoto, formatBlogDate } from 'app/modules/smartreport/blog/smartreport-blog.utils';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SmartReportHeaderComponent } from 'app/modules/smartreport/header/smartreport-header.component';
import { SmartReportFooterComponent } from 'app/modules/smartreport/footer/smartreport-footer.component';

type SearchType = 'vehicle' | 'person' | 'phone';

const ICONS = 'images/smartreport/icons/';
const IMAGES = 'images/smartreport/';

@Component({
    selector: 'landing-smartreport',
    templateUrl: './smartreport.component.html',
    styleUrls: ['./smartreport.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule, SmartReportHeaderComponent, SmartReportFooterComponent],
})
export class LandingSmartReportComponent implements OnInit, OnDestroy {
    icons = ICONS;
    images = IMAGES;

    searchTypes: { id: SearchType; label: string; icon: string; placeholder: string }[] = [
        { id: 'vehicle', label: 'Vehículo', icon: 'car', placeholder: 'Ingresa la placa' },
        {
            id: 'person',
            label: 'Persona',
            icon: 'users',
            placeholder: 'Ingresa el número de cédula',
        },
        {
            id: 'phone',
            label: 'Teléfono',
            icon: 'phone',
            placeholder: 'Ingresa el número con código de país',
        },
    ];
    selectedSearchType: SearchType = 'vehicle';

    stats = [
        { value: '5 años', label: 'de experiencia' },
        { value: '10+ Millones', label: 'de personas buscadas' },
    ];

    queryTypes = [
        {
            tag: 'Vehículo',
            title: 'Consulta vehículos por placa',
            text: 'Obtén un reporte asociado al vehículo para conocer mejor su información antes de\ncomprar, vender o realizar un trámite.',
            label: 'IDB78H',
            labelIcon: 'car-blue',
            rows: [
                { icon: 'user-dark', label: 'Propietario' },
                { icon: 'clock-dark', label: 'Historial' },
                { icon: 'file-dark', label: 'Documentos' },
                { icon: 'check-circle-dark', label: 'Estado' },
            ],
        },
        {
            tag: 'Personas',
            title: 'Consulta ciudadanos por cédula',
            text: 'Obtén un reporte asociado a una persona para validar información y obtener mayor\ncontexto.',
            label: 'Cc . 100.10.44.176',
            labelIcon: 'user-blue',
            rows: [
                { icon: 'user-dark', label: 'Datos básicos' },
                { icon: 'clock-dark', label: 'Historial' },
                { icon: 'file-dark', label: 'Documento' },
            ],
        },
        {
            tag: 'Teléfono',
            title: 'Consulta teléfonos por número',
            text: 'Ingresa el código de país y el número para revisar información disponible asociada al teléfono.',
            label: '+57 300 123 4567',
            labelIcon: 'phone-blue',
            rows: [
                { icon: 'user-dark', label: 'Información asociada' },
                { icon: 'file-dark', label: 'Operador' },
                { icon: 'check-circle-dark', label: 'Estado de la línea' },
                { icon: 'clock-dark', label: 'Historial' },
            ],
        },
    ];

    steps = [
        { title: 'Selecciona', text: 'Elige Vehículo, Persona o Teléfono.' },
        { title: 'Ingresa', text: 'Escribe la placa, la cédula o el número con su código de país' },
        {
            title: 'Consulta',
            text: 'Recibe los resultados organizados en un reporte fácil de revisar',
        },
    ];

    benefits = [
        {
            icon: 'report-blue',
            title: 'Todo en un solo reporte',
            text: 'Resultados consolidados en una misma experiencia.',
        },
        {
            icon: 'checklist-blue',
            title: 'Información fácil de revisar',
            text: 'Datos organizados para facilitar la lectura y comprensión.',
        },
        {
            icon: 'person-check-blue',
            title: 'Más contexto para decidir',
            text: 'Información que puede ayudarte a identificar qué revisar antes de continuar.',
        },
    ];

    useCases = [
        {
            image: 'caso-vehiculo.jpg',
            position: 'center 22.7%',
            tag: 'Vehículo',
            title: 'Antes de comprar o vender',
            text: 'Consulta información asociada al vehículo antes de cerrar una negociación o realizar un trámite.',
        },
        {
            image: 'caso-persona.jpg',
            position: 'center 26.4%',
            tag: 'Personas',
            title: 'Antes de avanzar en una interacción',
            text: 'Revisa información disponible cuando necesites validar datos de una persona.',
        },
        {
            image: 'caso-telefono.jpg',
            position: 'center 28.5%',
            tag: 'Teléfono',
            title: 'Cuando no reconoces un contacto',
            text: 'Consulta información disponible asociada al número para obtener mayor información.',
        },
    ];

    faqs = [
        {
            question: '¿Qué puedo consultar con smartREPORT?',
            answer: 'Puedes realizar consultas de vehículos, personas y teléfonos utilizando los datos requeridos\npara cada servicio.',
        },
        {
            question: '¿Qué necesito para realizar una consulta?',
            answer: 'Depende del tipo de búsqueda: puedes utilizar una placa, una cédula o un número de teléfono\ncon su código de país',
        },
        {
            question: '¿Qué información recibiré?',
            answer: 'Los resultados dependen del tipo de consulta, el país y las fuentes disponibles. La información\nse presenta organizada en un reporte fácil de revisar',
        },
        {
            question: '¿De dónde proviene la información?',
            answer: 'smartREPORT consulta diferentes fuentes disponibles según el servicio y el país seleccionado.',
        },
        {
            question: '¿Las consultas están disponibles en todos los países?',
            answer: 'La cobertura puede variar según el tipo de consulta y la disponibilidad de las fuentes en cada país.',
        },
        {
            question: '¿Cuánto tarda una consulta?',
            answer: 'La mayoría de las consultas están diseñadas para entregar resultados rápidamente, aunque el\ntiempo puede depender de la fuente consultada.',
        },
    ];
    openFaqs = new Set<number>(this.faqs.map((_, index) => index));

    // Design placeholders, replaced by the latest three blog posts (#1127) once the API returns some.
    posts = [1, 2, 3].map(() => ({
        image: IMAGES + 'blog-cover.jpg',
        avatar: IMAGES + 'blog-avatar.png',
        photo: false,
        title: 'Automatiza la verificación de expedientes judiciales en Colombia con la API de Verifik',
        author: 'Johan',
        date: 'septiembre 1, 2026',
        url: ['/smartreport/blog'],
    }));

    private _previousTitle: string;
    private _postsSubscription: Subscription;

    constructor(
        private _meta: Meta,
        private _title: Title,
        private _router: Router,
        private _blog: SmartReportBlogService
    ) {}

    get selectedPlaceholder(): string {
        return this.searchTypes.find((type) => type.id === this.selectedSearchType).placeholder;
    }

    ngOnInit(): void {
        this._previousTitle = this._title.getTitle();
        this._title.setTitle('smartREPORT | Consulta vehículos, personas y teléfonos | Verifik');
        // The landing must stay out of search indexes (#1099).
        this._meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });

        this._postsSubscription = this._blog.getPosts().subscribe((posts) => {
            if (!posts.length) return;

            this.posts = posts.slice(0, 3).map((post) => ({
                image: post.image || IMAGES + 'blog-cover.jpg',
                avatar: authorPhoto(post.author) || IMAGES + 'blog-avatar.png',
                photo: !!authorPhoto(post.author),
                title: post.title,
                author: post.author,
                date: formatBlogDate(post.date),
                url: ['/smartreport/blog', post.slug],
            }));
        });
    }

    ngOnDestroy(): void {
        this._postsSubscription?.unsubscribe();
        this._title.setTitle(this._previousTitle);
        this._meta.removeTag('name="robots"');
    }

    selectSearchType(type: SearchType): void {
        this.selectedSearchType = type;
    }

    toggleFaq(index: number): void {
        if (this.openFaqs.has(index)) {
            this.openFaqs.delete(index);
        } else {
            this.openFaqs.add(index);
        }
    }

    // Reports are not sold from this page yet, so a search leads to the waiting-list sign-up.
    search(): void {
        this._router.navigate(['/sign-up']);
    }

    scrollTo(id: string): void {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
}
