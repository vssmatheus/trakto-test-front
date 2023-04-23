import { createReducer, on } from '@ngrx/store';
import { updateUser } from './core.actions';
import { initialState } from './core.state';

export const coreFeatureKey = 'core';

export const coreReducer = createReducer(
  initialState,
  on(updateUser, (state, { user }) => ({
    ...state,
    user,
  }))
);
