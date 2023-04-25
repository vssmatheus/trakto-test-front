import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './pages/auth/login/guards/logged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'abertura',
  },
  {
    path: 'abertura',
    loadChildren: () =>
      import('./pages/abertura/abertura.module').then((m) => m.AberturaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'material-didatico',
    loadChildren: () =>
      import('./pages/material-didatico/material-didatico.module').then(
        (m) => m.MaterialDidaticoModule
      ),
  },
  {
    path: 'ver-todos',
    loadChildren: () =>
      import('./pages/ver-todos/ver-todos.module').then(
        (m) => m.VerTodosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
