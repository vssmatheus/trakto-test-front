import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  materialDidaticoFeatureKey,
  materialDidaticoReducer,
} from '../material-didatico/store/material-didatico.store';
import { VerTodasAulasComponent } from './components/ver-todas-aulas/ver-todas-aulas.component';
import { VerTodosListComponent } from './components/ver-todos-list/ver-todos-list.component';
import { DesignsResolver } from './resolvers/designs.resolver';
import { VerTodosComponent } from './ver-todos.component';
import { VerTodosRoutingModule } from './ver-todos.routing.module';

@NgModule({
  declarations: [
    VerTodosComponent,
    VerTodasAulasComponent,
    VerTodosListComponent,
  ],
  imports: [
    CommonModule,
    VerTodosRoutingModule,
    SharedModule,
    StoreModule.forFeature(materialDidaticoFeatureKey, materialDidaticoReducer),
  ],
  providers: [DesignsResolver],
})
export class VerTodosModule {}
