import { Route } from '@angular/router';
import { LandingSmartReportComponent } from 'app/modules/smartreport/smartreport.component';
import { SmartReportBlogListComponent } from 'app/modules/smartreport/blog/list/smartreport-blog-list.component';
import { SmartReportBlogPostComponent } from 'app/modules/smartreport/blog/post/smartreport-blog-post.component';
import { SmartReportAboutComponent } from 'app/modules/smartreport/about/smartreport-about.component';

// Public smartREPORT landing and blog, outside the Smart-Agent shell (Open-Verifik/app.verifik.co#1099, #1127).
export default [
    {
        path: '',
        component: LandingSmartReportComponent,
    },
    {
        path: 'acerca-de-verifik',
        component: SmartReportAboutComponent,
    },
    {
        path: 'blog',
        component: SmartReportBlogListComponent,
    },
    {
        path: 'blog/:slug',
        component: SmartReportBlogPostComponent,
    },
] as Route[];
