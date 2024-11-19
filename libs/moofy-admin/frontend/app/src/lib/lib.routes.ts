import { Route } from '@angular/router';
import { MoofyFrontendAppComponent } from './moofy-frontend-app/moofy-frontend-app.component';

export const moofyFrontendAppRoutes: Route[] = [
  {
    path: 'moofy-frontend-login',
    loadChildren: () =>
      import('@moofy/login').then((m) => m.moofyFrontendLoginRoutes),
  },
  { path: '', component: MoofyFrontendAppComponent },
];
