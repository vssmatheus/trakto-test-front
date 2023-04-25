import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authService.isLoggedIn().pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) this._router.navigate(['auth/login']);
      })
    );
  }
}
