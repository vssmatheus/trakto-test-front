import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AberturaRoutingModule } from './abertura-routing.module';
import { AberturaComponent } from './abertura.component';

@NgModule({
  declarations: [AberturaComponent],
  imports: [CommonModule, AberturaRoutingModule],
})
export class AberturaModule {}
