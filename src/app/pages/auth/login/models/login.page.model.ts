import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILogin } from 'src/app/core/models/login.model';

export class ILoginPage {
  constructor(protected readonly _formBuilder: FormBuilder) {}

  private emailControl: FormControl = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);

  private passwordContorl: FormControl = new FormControl<string>({value: '', disabled: false}, [
    Validators.required,
  ]);

  protected form: FormGroup = this._formBuilder.group<ILogin>({
    email: this.emailControl,
    password: this.passwordContorl,
  });
}
