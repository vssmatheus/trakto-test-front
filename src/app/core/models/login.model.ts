import { FormControl } from '@angular/forms';

export interface ILogin {
  email: string | FormControl<string>;
  password: string | FormControl<string>;
}
