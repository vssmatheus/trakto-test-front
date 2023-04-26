import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IMaterialDidaticoState } from './material-didatico.state';
import { materialDidaticoFeatureKey } from './material-didatico.store';

export const materialDidaticoFeatureSelector =
  createFeatureSelector<IMaterialDidaticoState>(materialDidaticoFeatureKey);

export const materiaisDidaticosSelector = createSelector(
  materialDidaticoFeatureSelector,
  ({ materiaisDidaticos }) => materiaisDidaticos
);
