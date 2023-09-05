import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AuthState} from "@/app/auth/authentication/dto/authState";
import {AuthenticationService} from "@/app/auth/authentication/authentication.service";
import {AuthenticationDto} from "@/app/auth/authentication/dto/authentication.dto";
import {RegistrationDto} from "@/app/auth/registration/dto/registration.dto";
import {RegistrationService} from "@/app/auth/registration/registration.service";

export class Registration {
  static readonly type = '[Registration] Registration user';

  constructor(public payload: RegistrationDto) {}
}

@Injectable()
export class RegistrationStore {
  constructor(private readonly registrationService: RegistrationService) {}
  @Action(Registration)
  registration(ctx: StateContext<AuthState>, {payload}: { payload: AuthenticationDto }) {
    return this.registrationService.registration(payload).subscribe(res => {
      ctx.setState(res)
    })
  }
}
