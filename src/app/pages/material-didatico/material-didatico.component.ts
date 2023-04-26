import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMaterialDidaticoPage } from './models/material-diadatico.page.model';

@Component({
  selector: 'page-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss'],
})
export class MaterialDidaticoComponent extends IMaterialDidaticoPage {
  constructor(protected override _store: Store) {
    super(_store);
  }
}
