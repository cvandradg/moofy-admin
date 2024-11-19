import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@moofy/app').then((m) => m.moofyFrontendAppRoutes),
  },
];
