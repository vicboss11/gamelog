import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./pages/games/games.component').then((m) => m.GamesComponent),
  },
];
