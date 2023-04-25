import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonRouterComponent } from './button-router/button-router.component';
import { HeaderAulaComponent } from './header-aula/header-aula.component';
import { HeaderComponent } from './header/header.component';
import { SliderAulaComponent } from './slider-aula/slider-aula.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderAulaComponent,
    ButtonRouterComponent,
    SliderAulaComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HeaderAulaComponent,
    ButtonRouterComponent,
    SliderAulaComponent,
  ],
})
export class SharedModule {}
