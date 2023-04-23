import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICoreState } from './core.state';
import { coreFeatureKey } from './core.store';

export const coreFeatureSelector =
  createFeatureSelector<ICoreState>(coreFeatureKey);

export const userSelector = createSelector(
  coreFeatureSelector,
  ({ user }) => user
);
