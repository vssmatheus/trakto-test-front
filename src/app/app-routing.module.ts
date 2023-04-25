import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'abertura',
    loadChildren: () =>
      import('./pages/abertura/abertura.module').then((m) => m.AberturaModule),
  },
  {
    path: 'material-didatico',
    loadChildren: () =>
      import('./pages/material-didatico/material-didatico.module').then(
        (m) => m.MaterialDidaticoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
