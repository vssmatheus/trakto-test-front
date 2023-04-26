import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_KEY } from 'src/app/shared/constants/session-storage-keys';
import { IUser } from 'src/app/shared/models/user.model';
import { SessionStorageService } from '../session-storage.service';

@Injectable()
export class BaseHttpInterceptor implements HttpInterceptor {
  constructor(private readonly _sessionStorage: SessionStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.endsWith('auth/signin')) {
      const token =
        this._sessionStorage.getFromStorage<IUser>(USER_KEY).access_token;

      let httpRequest: HttpRequest<any> = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json')
          .set('Cache-Control', 'no-cache'),
      });

      return next.handle(httpRequest);
    }
    return next.handle(request);
  }
}
