import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ILogin } from 'src/app/core/models/login.model';

export class ILoginPage {
  protected isAuthenticating$ = new BehaviorSubject<boolean>(false);

  constructor(protected readonly _formBuilder: FormBuilder) {}

  protected emailControl: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);

  protected passwordContorl: FormControl = new FormControl<string>('', [
    Validators.required,
  ]);

  protected form: FormGroup = this._formBuilder.group<ILogin>({
    email: this.emailControl,
    password: this.passwordContorl,
  });
}
