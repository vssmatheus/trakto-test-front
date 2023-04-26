import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AberturaRoutingModule } from './abertura-routing.module';
import { AberturaComponent } from './abertura.component';
import { ButtonNavigatorAberturaComponent } from './components/button-navigator-abertura/button-navigator-abertura.component';

@NgModule({
  declarations: [AberturaComponent, ButtonNavigatorAberturaComponent],
  imports: [CommonModule, AberturaRoutingModule, SharedModule],
})
export class AberturaModule {}
