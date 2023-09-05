import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStorageService {
  save(type: 'sessionStorage' | 'localStorage', item: { key: string; payload: any }) {
    if (type === 'sessionStorage') {
      sessionStorage.setItem(item.key, JSON.stringify(item.payload))
    } else if (type === 'localStorage') {
      localStorage.setItem(item.key, JSON.stringify(item.payload))
    }
  }

  get<T extends new (...args: any[]) => any>(type: 'sessionStorage' | 'localStorage', item: { key: string; type: T; }): T | undefined {
    let storageItem: T | undefined

    if (type === 'sessionStorage') {
      const jsonStorageItem = sessionStorage.getItem(item.key);

      if (jsonStorageItem) storageItem = JSON.parse(jsonStorageItem)
    } else if (type === 'localStorage') {
      const jsonStorageItem = localStorage.getItem(item.key);

      if (jsonStorageItem) storageItem = JSON.parse(jsonStorageItem)
    }

    return storageItem;
  }

  clearAll(): void {
    localStorage.clear()
    sessionStorage.clear()
  }
}
