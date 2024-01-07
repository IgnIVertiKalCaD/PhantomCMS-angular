import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  save(options: { type: 'sessionStorage' | 'localStorage', key: string; payload: any }) {
    if (options.type === 'sessionStorage' && options.payload) {
      sessionStorage.setItem(options.key, JSON.stringify(options.payload))
    } else if (options.type === 'localStorage' && options.payload) {
      localStorage.setItem(options.key, JSON.stringify(options.payload))
    }
  }

  get<T>(options: { type: 'sessionStorage' | 'localStorage'; key: string }): T {
    let storageItem: T;

    if (options.type === 'sessionStorage') {
      const jsonStorageItem = sessionStorage.getItem(options.key);

      if (jsonStorageItem) storageItem = JSON.parse(jsonStorageItem)
    } else if (options.type === 'localStorage') {
      const jsonStorageItem = localStorage.getItem(options.key);

      if (jsonStorageItem) storageItem = JSON.parse(jsonStorageItem)
    }

    return storageItem!;
  }

  removeItem<T>(options: { type: 'sessionStorage' | 'localStorage'; key: string }): void {
    if (options.type === 'sessionStorage') {
        sessionStorage.removeItem(options.key)
    } else {
      localStorage.removeItem(options.key)
    }
  }

  clearAll(): void {
    localStorage.clear()
    sessionStorage.clear()
  }
}
