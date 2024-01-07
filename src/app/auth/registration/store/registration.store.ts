import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {RegistrationStateDto} from "@/app/auth/registration/dto/registration.state.dto";
import {RegistrationService} from "@/app/auth/registration/registration.service";
import {catchError, tap, throwError} from "rxjs";
import {RegistrationDto} from "@/app/auth/registration/dto/registration.dto";

export class Registration {
  static readonly type = '[Registration] Registration user';
  constructor(public payload: RegistrationDto) {}
}

export class SetStatusLoadingRegistration {
  static readonly type = '[SetStatusLoadingRegistration] change status loading'
  constructor(public status: boolean) {}
}

@State<RegistrationStateDto>({
  name: 'registration',
})
@Injectable()
export class RegistrationStore {
  constructor(private readonly registrationService: RegistrationService) {}

  @Selector()
  static getStatusLoading(state: RegistrationStateDto): boolean {
    return state.isLoading
  }

  @Selector()
  static isRegistrationAllRight(state: RegistrationStateDto): boolean {
    return state.success
  }

  @Action(SetStatusLoadingRegistration)
  changeStatusLoading(ctx: StateContext<RegistrationStateDto>, status: boolean) {
    ctx.patchState({isLoading: status})
  }
  @Action(Registration)
  registration(ctx: StateContext<RegistrationStateDto>, {payload}: { payload: RegistrationDto }) {
    return this.registrationService.registration(payload).pipe(
      tap(() => {
        ctx.patchState({success: true, isLoading: false})
      }),
      catchError(err => {
        ctx.patchState({isLoading: false})
        return throwError(err);
      })
    )
  }
}
