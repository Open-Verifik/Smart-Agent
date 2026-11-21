import { Route } from '@angular/router';
import { ComplianceHomeComponent } from 'app/modules/compliance/home/compliance-home.component';
import { CompliancePostComponent } from 'app/modules/compliance/post/compliance-post.component';

// Public Centro de Cumplimiento, outside the Smart-Agent shell (Open-Verifik/app.verifik.co#1129).
// Mounted twice in app.routes: /cumplimiento (es) and /en/compliance (en).
export default [
    {
        path: '',
        component: ComplianceHomeComponent,
    },
    {
        path: ':country',
        component: ComplianceHomeComponent,
    },
    {
        path: ':country/:slug',
        component: CompliancePostComponent,
    },
] as Route[];
