import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { updateUser } from 'src/app/core/store/core.actions';
import { ILoginPage } from './models/login.page.model';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ILoginPage {
  protected loginBtnLabel$ = this.isAuthenticating$.pipe(
    map((value) => (value ? 'Entrando...' : 'Login'))
  );
  constructor(
    protected override _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _store: Store
  ) {
    super(_formBuilder);
  }

  protected login() {
    this.isAuthenticating$.next(true);
    this._authService
      .login(this.form.value)
      .pipe(tap(() => this.isAuthenticating$.next(false)))
      .subscribe({
        next: (user) => {
          this._store.dispatch(
            updateUser({
              user,
            })
          );
        },
      });
  }
}
