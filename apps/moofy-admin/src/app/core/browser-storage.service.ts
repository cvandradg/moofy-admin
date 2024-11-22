import { Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    ) {
      return localStorage;
    } else {
      // Provide a fallback for environments without localStorage
      return {
        getItem: () => null,
        setItem: () => void 0, // Does nothing
        removeItem: () => void 0, // Does nothing
        clear: () => void 0, // Does nothing
        length: 0,
        key: () => null,
      } as Storage;
    }
  },
});

@Injectable({ providedIn: 'root' })
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
