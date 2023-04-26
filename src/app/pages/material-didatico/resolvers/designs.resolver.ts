import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import {
  DesignService,
  IGetAllParams,
} from 'src/app/shared/services/design.service';
import { updateMateriaisDidaticos } from '../store/material-didatico.actions';

@Injectable()
export class DesignsResolver implements Resolve<any> {
  constructor(
    private readonly _designsService: DesignService,
    private readonly _store: Store
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const filters: IGetAllParams = {
      total_per_page: 10,
    };

    return this._designsService.getAllDesigns(filters).pipe(
      tap((res) =>
        this._store.dispatch(
          updateMateriaisDidaticos({
            designs: res.data,
          })
        )
      )
    );
  }
}
