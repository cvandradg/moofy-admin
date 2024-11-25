import { Route } from '@angular/router';
import { MoofyFrontendAppComponent } from './moofy-frontend-app/moofy-frontend-app.component';

export const moofyFrontendAppRoutes: Route[] = [
  {
    path: 'dasdhboard',
    loadChildren: () =>
      import('@moofy/dashboard').then((m) => m.moofyFrontendDashboardRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('@moofy/login').then((m) => m.moofyFrontendLoginRoutes),
  },
  { path: '', component: MoofyFrontendAppComponent },
];
