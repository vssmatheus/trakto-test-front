import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/models/user.model';

export const updateUser = createAction(
  '[Core] atualiza os dados do usuário logado',
  props<{ user: IUser }>()
);
