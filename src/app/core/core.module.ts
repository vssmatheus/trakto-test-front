import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { BaseHttpInterceptor } from './providers/base-http.interceptor';
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
  providers: [
    ...SERVICES,
    ...GUARDS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseHttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
