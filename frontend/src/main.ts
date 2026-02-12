import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from 'app/app.component';
import { appConfig } from 'app/app.config';

// Register AG Grid Community modules (required for ag-grid-angular)
ModuleRegistry.registerModules([AllCommunityModule]);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
