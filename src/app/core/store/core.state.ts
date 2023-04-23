import { IUser } from 'src/app/shared/models/user.model';

export interface ICoreState {
  user?: IUser;
}

export const initialState: ICoreState = {
  user: undefined,
};
