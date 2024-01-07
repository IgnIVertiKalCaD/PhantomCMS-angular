import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationDto} from "@/app/auth/registration/dto/registration.dto";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {}

  registration(registrationDto: RegistrationDto) {
    return this.http.post<any>('auth/register', {...registrationDto}, {withCredentials: true});
  }
}
