import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { DesignsResolver } from './resolvers/designs.resolver';

const routes: Routes = [
  {
    path: '',
    component: MaterialDidaticoComponent,
    resolve: {
      designs: DesignsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDidaticoRoutingModule {}
