import { createReducer, on } from '@ngrx/store';
import { updateMateriaisDidaticos } from './material-didatico.actions';
import { materialDidaticoInitialState } from './material-didatico.state';

export const materialDidaticoFeatureKey = 'material_didatico';
export const materialDidaticoReducer = createReducer(
  materialDidaticoInitialState,
  on(updateMateriaisDidaticos, (state, { designs }) => ({
    ...state,
    materiaisDidaticos: designs,
  }))
);
