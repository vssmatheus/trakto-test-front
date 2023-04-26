import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IMaterialDidaticoPage } from '../material-didatico/models/material-diadatico.page.model';

@Component({
  selector: 'page-ver-todos',
  templateUrl: './ver-todos.component.html',
  styleUrls: ['./ver-todos.component.scss'],
})
export class VerTodosComponent extends IMaterialDidaticoPage {
  constructor(protected override _store: Store) {
    super(_store);
  }
}
