import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransportDataService {
  constructor(private http: HttpClient) {}

  refreshToken(): Observable<any>{
    console.log('refresh')
    return this.http.post<{accessToken: string}>('auth/refresh', '', {withCredentials: true });
  }
}
