import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { VerTodasAulasComponent } from './components/ver-todas-aulas/ver-todas-aulas.component';
import { VerTodosComponent } from './ver-todos.component';
import { VerTodosRoutingModule } from './ver-todos.routing.module';
import { VerTodosListComponent } from './components/ver-todos-list/ver-todos-list.component';

@NgModule({
  declarations: [VerTodosComponent, VerTodasAulasComponent, VerTodosListComponent],
  imports: [CommonModule, VerTodosRoutingModule, SharedModule],
})
export class VerTodosModule {}
