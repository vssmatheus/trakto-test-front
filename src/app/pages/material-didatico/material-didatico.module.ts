import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { AulasMaterialDidaticoComponent } from './components/aulas-material-didatico/aulas-material-didatico.component';
import { HeaderMaterialDidaticoComponent } from './components/header-material-didatico/header-material-didatico.component';
import { VideosMaterialDidaticoComponent } from './components/videos-material-didatico/videos-material-didatico.component';
import { MaterialDidaticoRoutingModule } from './material-didatico-routing.module';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { DesignsResolver } from './resolvers/designs.resolver';
import {
  materialDidaticoFeatureKey,
  materialDidaticoReducer,
} from './store/material-didatico.store';

@NgModule({
  declarations: [
    MaterialDidaticoComponent,
    HeaderMaterialDidaticoComponent,
    AulasMaterialDidaticoComponent,
    VideosMaterialDidaticoComponent,
  ],
  imports: [
    CommonModule,
    MaterialDidaticoRoutingModule,
    SharedModule,
    StoreModule.forFeature(materialDidaticoFeatureKey, materialDidaticoReducer),
  ],
  providers: [DesignsResolver],
})
export class MaterialDidaticoModule {}
