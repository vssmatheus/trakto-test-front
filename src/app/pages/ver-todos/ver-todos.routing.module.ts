import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignsResolver } from './resolvers/designs.resolver';
import { VerTodosComponent } from './ver-todos.component';

const routes: Routes = [
  {
    path: '',
    component: VerTodosComponent,
    resolve: {
      designs: DesignsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTodosRoutingModule {}
