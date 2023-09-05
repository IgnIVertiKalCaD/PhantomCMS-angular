import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationDto} from "@/app/auth/authentication/dto/authentication.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(authenticationDto: AuthenticationDto):Observable<any> {
    return this.http.post<any>('auth/login', {...authenticationDto}, {withCredentials: true});
  }

  logout():Observable<any> {
    return this.http.post<any>('auth/logout', '', {withCredentials: true });
  }
}
