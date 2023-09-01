import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {GetServersDto} from "../../dto/get-servers.dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor (private http: HttpClient) {}

  private apiUrl = 'https://fakestoreapi.com/products/1';

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // getAll() {
  //   const params = new HttpParams({
  //     fromObject: { sortBy : 'name:DESC', page: 1 }
  //   });
  //
  //   return this.http.get<GetServersDto[]>('https://api.phantomcms.org/servers', {params});
  // }
}
