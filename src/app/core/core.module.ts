import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SessionStorageService } from './session-storage.service';
import { coreFeatureKey, coreReducer } from './store/core.store';

const SERVICES = [ApiService, AuthService, SessionStorageService];

const GUARDS = [AuthGuard];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      [`${coreFeatureKey}`]: coreReducer,
    }),
  ],
  providers: [...SERVICES, ...GUARDS],
})
export class CoreModule {}
