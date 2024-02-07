import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationDto} from "@/app/auth/registration/dto/registration.dto";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  sendActivationCode(email: string) {
    return this.http.post<any>('/emails/send/activate', {email: email})
  }

  checkActivationCode(code: number) {
    return this.http.get<any>(`/users/confirm/activate/${code}`)
  }

  registration(registrationDto: RegistrationDto) {
    return this.http.post<any>('auth/register', {...registrationDto}, {withCredentials: true});
  }
}
