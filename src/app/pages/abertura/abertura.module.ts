import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AberturaRoutingModule } from './abertura-routing.module';
import { AberturaComponent } from './abertura.component';
import { ButtonNavigatorAberturaComponent } from './components/button-navigator-abertura/button-navigator-abertura.component';

@NgModule({
  declarations: [
    AberturaComponent,
    ButtonNavigatorAberturaComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, AberturaRoutingModule],
})
export class AberturaModule {}
