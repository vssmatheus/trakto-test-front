import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { coreFeatureKey, coreReducer } from './store/core.store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      [`${coreFeatureKey}`]: coreReducer,
    }),
  ],
  providers: [AuthService, ApiService],
})
export class CoreModule {}
