import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssetsManagerService {
  constructor(private http: HttpClient) {}

  //head
  getUserHead(username: string): Observable<ArrayBuffer> {
    return this.http.get(`users/assets/${username}/head`, { responseType: 'arraybuffer', params: {defaultSkin: true}});
  }

  //skin
  getUserSkin(username: string): Observable<ArrayBuffer> {
    return this.http.get(`users/assets/${username}/skin`, { responseType: 'arraybuffer', params: {defaultSkin: true}});
  }

  updateUserSkin(payload: FormData): Observable<any> {
    return this.http.patch(`/users/assets/@me/skin`, payload, {withCredentials: true})
  }

  deleteUserSkin(): Observable<any> {
    return this.http.delete(`/users/assets/@me/skin`, {withCredentials: true})
  }

  //cape
  getUserCape(username: string): Observable<ArrayBuffer> {
    return this.http.get(`users/assets/${username}/cape`, { responseType: 'arraybuffer'});
  }

  updateUserCape(payload: FormData): Observable<any> {
    return this.http.patch(`/users/assets/@me/cape`, payload, {withCredentials: true})
  }

  deleteUserCape(): Observable<any> {
    return this.http.delete(`/users/assets/@me/cape`, {withCredentials: true})
  }

}
