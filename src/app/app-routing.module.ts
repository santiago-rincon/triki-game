import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'triki',
    pathMatch: 'full',
  },
  {
    path: 'triki',
    loadComponent: () =>
      import('./components/triki/triki.component').then(
        (c) => c.TrikiComponent
      ),
  },
];
