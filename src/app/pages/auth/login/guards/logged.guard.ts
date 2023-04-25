import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
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
      map((isLoggedIn) => !isLoggedIn),
      tap((isNotLoggedIn) => {
        if (!isNotLoggedIn) this._router.navigate(['abertura']);
      })
    );
  }
}
