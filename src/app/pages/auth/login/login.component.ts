import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { ILoginPage } from './models/login.page.model';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends ILoginPage {
  constructor(
    protected override _formBuilder: FormBuilder,
    private readonly _authService: AuthService
  ) {
    super(_formBuilder);
  }

  protected login() {
    this._authService.login(this.form.value).subscribe({
      next: (res) => console.log(res),
    });
  }
}
