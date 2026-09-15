import { Routes } from '@angular/router';
import { CheckListCreateComponent } from './check-list-create.component';
import { CheckListDashboardComponent } from './check-list-dashboard.component';
import { CheckListWorkspaceComponent } from './check-list-workspace.component';

export default [
    {
        path: '',
        component: CheckListDashboardComponent,
    },
    {
        path: 'new',
        component: CheckListCreateComponent,
    },
    {
        path: ':id',
        component: CheckListWorkspaceComponent,
    },
] as Routes;
