import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';

@Injectable()
export class SessionStorageService {
  constructor(
    private readonly _store: Store,
    private readonly _actions$: Actions
  ) {}

  getFromStorage<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) || '{}');
  }

  setKeyStorage<T>(key: string, data: T): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  removeKeyFromStorage(key: string): void {
    sessionStorage.removeItem(key);
  }
}
