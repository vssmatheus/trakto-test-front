import { createAction, props } from '@ngrx/store';
import { IDesign } from 'src/app/shared/models/design.model';

export const updateMateriaisDidaticos = createAction(
  '[Material Didatico] atualiza lista de materiais didaticos',
  props<{ designs: IDesign[] }>()
);
