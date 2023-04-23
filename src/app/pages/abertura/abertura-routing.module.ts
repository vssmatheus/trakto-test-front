import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AberturaComponent } from './abertura.component';

const routes: Routes = [
  {
    path: '',
    component: AberturaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AberturaRoutingModule {}
