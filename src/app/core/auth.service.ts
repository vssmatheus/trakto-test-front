import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { USER_KEY } from '../shared/constants/session-storage-keys';
import { IUser } from '../shared/models/user.model';
import { ApiService } from './api.service';
import { ILogin } from './models/login.model';
import { SessionStorageService } from './session-storage.service';
import { updateUser } from './store/core.actions';
import { userSelector } from './store/core.selector';

@Injectable()
export class AuthService {
  constructor(
    private readonly _apiService: ApiService,
    private readonly _store: Store,
    private readonly _sessionStorage: SessionStorageService
  ) {}

  public login(body: ILogin) {
    return this._apiService.post<IUser, ILogin>('auth/signin', body).pipe(
      tap((user) => {
        this._store.dispatch(
          updateUser({
            user,
          })
        );
      }),
      tap((user) => this._sessionStorage.setKeyStorage<IUser>(USER_KEY, user))
    );
  }

  public isLoggedIn(): Observable<boolean> {
    return this._store
      .select(userSelector)
      .pipe(map((user) => !!user?.access_token));
  }
}
