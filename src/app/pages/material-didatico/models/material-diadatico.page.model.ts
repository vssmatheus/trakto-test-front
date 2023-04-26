import { Store } from '@ngrx/store';
import { materiaisDidaticosSelector } from '../store/material-didatico.selector';

export class IMaterialDidaticoPage {
  protected materiaisDidaticos$ = this._store.select(
    materiaisDidaticosSelector
  );

  constructor(protected readonly _store: Store) {}
}
