import { IDesign } from 'src/app/shared/models/design.model';

export interface IMaterialDidaticoState {
  materiaisDidaticos: IDesign[];
}

export const materialDidaticoInitialState: IMaterialDidaticoState = {
  materiaisDidaticos: [],
};
