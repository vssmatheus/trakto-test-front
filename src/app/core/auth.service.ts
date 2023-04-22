import { Injectable } from '@angular/core';
import { IUser } from '../shared/models/user.model';
import { ApiService } from './api.service';
import { ILogin } from './models/login.model';

@Injectable()
export class AuthService {
  constructor(private readonly _apiService: ApiService) {}

  public login(body: ILogin) {
    return this._apiService.post<IUser, ILogin>('auth/signin', body);
  }
}
