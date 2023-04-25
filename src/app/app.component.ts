import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SessionStorageService } from './core/session-storage.service';
import { updateUser } from './core/store/core.actions';
import { USER_KEY } from './shared/constants/session-storage-keys';
import { IUser } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'trakto-test-front';

  constructor(
    private readonly _store: Store,
    private readonly _sessionStorage: SessionStorageService
  ) {}

  ngOnInit(): void {
    this._initUserState();
  }

  private _initUserState() {
    const user = this._sessionStorage.getFromStorage<IUser>(USER_KEY);
    if (!!user?.access_token) this._store.dispatch(updateUser({ user }));
  }
}
