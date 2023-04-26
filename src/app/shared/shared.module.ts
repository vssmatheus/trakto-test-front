import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonRouterComponent } from './button-router/button-router.component';
import { HeaderAulaComponent } from './header-aula/header-aula.component';
import { HeaderComponent } from './header/header.component';
import { DesignService } from './services/design.service';
import { SliderAulaComponent } from './slider-aula/slider-aula.component';
import { SliderVideoComponent } from './slider-video/slider-video.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderAulaComponent,
    ButtonRouterComponent,
    SliderAulaComponent,
    SliderVideoComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    HeaderAulaComponent,
    ButtonRouterComponent,
    SliderAulaComponent,
    SliderVideoComponent,
  ],
  providers: [DesignService],
})
export class SharedModule {}
