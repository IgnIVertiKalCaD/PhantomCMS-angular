import {Injectable} from "@angular/core";
import {AuthenticationStorageService} from "@/app/auth/authentication/authentication-storage.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrationStorageService extends AuthenticationStorageService {}
