import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SmartReportHeaderComponent } from 'app/modules/smartreport/header/smartreport-header.component';
import { SmartReportFooterComponent } from 'app/modules/smartreport/footer/smartreport-footer.component';

const UPLOADS = 'https://verifik.co/wp-content/uploads/';

// Clone of verifik.co/acerca-de-verifik/ for the smartREPORT site, without the booking section (#1099)
@Component({
    selector: 'smartreport-about',
    templateUrl: './smartreport-about.component.html',
    styleUrls: ['./smartreport-about.component.scss'],
    standalone: true,
    imports: [CommonModule, SmartReportHeaderComponent, SmartReportFooterComponent],
})
export class SmartReportAboutComponent implements OnInit, OnDestroy {
    uploads = UPLOADS;
    tab: 'mission' | 'vision' = 'mission';

    values = [
        {
            title: 'Excelencia',
            text: 'La excelencia en los detalles conduce a la excelencia en cosas grandes.',
        },
        {
            title: 'Responsabilidad',
            text: 'La base de la efectividad de un individuo esta en su responsabilidad.',
        },
        {
            title: 'Valentía',
            text: 'Los momentos decisivos de una organización se toman con cabeza fría y con valentía.',
        },
        { title: 'Integridad', text: 'La integridad genera confianza y una gran reputación.' },
        {
            title: 'Humildad',
            text: 'El orgullo va delante de la destrucción, y la arrogancia antes de la caída.',
        },
        {
            title: 'Positivismo',
            text: 'Verifica quiere Impactar positivamente a todos es la forma más efectiva de generar cultura y marca.',
        },
    ];

    team = [
        {
            name: 'Johan Castellanos',
            role: 'CEO',
            photo: 'johan_castellanos',
            alt: 'Johan Sebastian Castellanos - CEO Verifik',
        },
        {
            name: 'Miguel Treviño',
            role: 'CTO',
            photo: 'miguel_trevino',
            alt: 'Miguel Treviño - CTO Verifik',
        },
        {
            name: 'Shalom Triana',
            role: 'Líder Administrativo y financiero',
            photo: 'esteban_triana',
            alt: 'Shalom Esteban Triana - Verifik',
        },
        {
            name: 'Daniel Aguilar',
            role: 'Líder RRHH',
            photo: 'daniel_aguilar',
            alt: 'Daniel Aguilar - Verifik',
        },
        {
            name: 'Lina Yepes',
            role: 'Líder Operaciones',
            photo: 'lina_yepes',
            alt: 'Lina Marcela Yepes - Verifik',
        },
        {
            name: 'Manuel Cuesto',
            role: 'Líder Comercial',
            photo: 'manuel_cuesto',
            alt: 'Manuel Cuesto - Verifik',
        },
        {
            name: 'Olga Puentes',
            role: 'Asistente Administrativa',
            photo: 'olga_puentes',
            alt: 'Olga Lucia Puentes Rodríguez',
        },
        {
            name: 'Nicolás Diéz',
            role: 'Ejecutivo Comercial',
            photo: 'nicolas_diez',
            alt: 'Nicolás Díez',
        },
        {
            name: 'Juan Mesa',
            role: 'Analista Audiovisual',
            photo: 'juan_mesa',
            alt: 'Juan David Mesa',
        },
        {
            name: 'Steven Linares',
            role: 'Diseñador Gráfico y UX',
            photo: 'steven_linares',
            alt: 'Steven Linares',
        },
        {
            name: 'Jennifer Triana',
            role: 'Analista de Marketing',
            photo: 'jennifer_triana',
            alt: 'Jennifer Triana',
        },
    ];

    article = [
        {
            size: 18,
            text: 'Los mayordomos son líderes responsables que actúan como guardianes de organizaciones, grandes y pequeñas, con el objetivo de crecer y mejorar. Aunque enfrentan la presión de obtener resultados a corto plazo, su verdadero desafío es mantener la vista en los objetivos a largo plazo sin comprometer los valores fundamentales de la organización. Deben equilibrar estas responsabilidades utilizando estrategias a corto plazo que apoyen la misión a largo plazo.',
        },
        {
            size: 16,
            text: 'Creemos que los mayordomos deben centrarse en construir un entorno interno que empodere a todos y se alinee con la ética de los empleados. Este entorno, conocido como la “cultura” de la organización, se rige por normas que definen tanto la misión institucional como los medios aceptables para alcanzarla. A pesar de la diversidad de organizaciones en todo el mundo, ciertas cualidades de la mayordomía, como la visión a largo plazo, la escucha efectiva, la humildad y la confianza, son valiosas universalmente para construir una cultura organizativa sólida.',
        },
        {
            size: 16,
            text: 'Los auténticos mayordomos a menudo quedan en el anonimato, pero sus logros perduran gracias a la cohesión que fomentan. Por ejemplo, aunque Buzz Aldrin y Neil Armstrong son célebres por pisar la luna, el nombre de George Mueller, quien lideró la NASA durante la carrera espacial, es menos conocido. Mueller, mediante un liderazgo desinteresado y un compromiso con la excelencia, mejoró el funcionamiento interno de la NASA y creó un conjunto de valores organizativos consensuados entre los empleados, priorizando la misión de la organización. También consideramos líderes que operan en contextos donde la sociedad tiene valores contradictorios. En muchas partes del mundo, la modernización trae consigo prácticas como el trabajo infantil, que a menudo chocan con los valores éticos de las organizaciones internacionales.',
        },
        {
            size: 16,
            text: 'Las instituciones con una cultura organizativa sólida están mejor preparadas para enfrentar estas presiones, manteniendo los valores éticos y una misión firme. Un mayordomo que encarna claramente un conjunto de valores definidos puede empoderar a sus empleados para que actúen en línea con la cultura organizativa, creando un marco para decisiones responsables que beneficien a la organización sin comprometer las normas morales.',
        },
        {
            size: 18,
            text: 'Nuestra fórmula para la gestión se basa en dos componentes: estructura y propósito. Mediante la creación de una sólida cultura interna, un mayordomo puede garantizar que la organización sea estructuralmente competente y decididamente fuerte. El liderazgo institucional no tiene fecha de caducidad; un mayordomo con éxito puede dejar su puesto en cualquier momento sabiendo que la misión permanece intacta.',
        },
        {
            size: 18,
            text: 'Como tal, el legado de un mayordomo no es personal, sino colectivo. El mayordomo crea un sistema de valores perdurables y luego capacita a otros para perpetuarlos.',
        },
        {
            size: 18,
            text: 'Por último, creemos que mediante la creación de una cultura de mayordomía, un líder organizativo de éxito puede capacitar a todos los miembros de una organización para ser tanto líderes como gestores, independientemente de su posición en la jerarquía organizativa. Así pues, el liderazgo a través de la corresponsabilidad debería ser un aspecto fundamental no sólo de las organizaciones de éxito, sino de nuestra cultura compartida como ciudadanos de esta sociedad global del siglo XXI.',
        },
    ];

    private _previousTitle: string;

    constructor(
        private _meta: Meta,
        private _title: Title
    ) {}

    ngOnInit(): void {
        this._previousTitle = this._title.getTitle();
        this._title.setTitle('Acerca de Verifik | smartREPORT');
        this._meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    }

    ngOnDestroy(): void {
        this._title.setTitle(this._previousTitle);
        this._meta.removeTag('name="robots"');
    }
}
