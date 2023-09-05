import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AuthState} from "@/app/auth/authentication/dto/authState";
import {AuthenticationService} from "@/app/auth/authentication/authentication.service";
import {AuthenticationDto} from "@/app/auth/authentication/dto/authentication.dto";
import {catchError, of, tap, throwError} from "rxjs";
import {AuthenticationStorageService} from "@/app/auth/authentication/authentication-storage.service";

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public payload: AuthenticationDto & { rememberMe?: boolean }) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';

  constructor() {}
}

export class SetStatusLoadingAuthentication {
  static readonly type = '[SetStatusLoadingAuthentication] change status loading'

  constructor(public status: boolean) {}
}

@State<AuthState>({
  name: 'auth',
  defaults:
    JSON.parse(localStorage.getItem('user')!) ||
    JSON.parse(sessionStorage.getItem('user')!) ||
    {
      accessToken: null,
      user: {
        username: null,
        email: null,
        assets: null,
        permissions: null,
      },
      isLoading: false
    }
})
@Injectable()
export class AuthStore {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly authStorageService: AuthenticationStorageService
  ) {}

  @Selector()
  static isAuth(state: AuthState): boolean {
    return !!state.accessToken;
  }

  @Selector()
  static getUsername(state: AuthState): string | null {
    return state.user.username
  }

  @Selector()
  static getEmail(state: AuthState): string | null {
    return state.user.email
  }

  @Selector()
  static getStatusLoading(state: AuthState): boolean {
    return state.isLoading
  }

  @Action(SetStatusLoadingAuthentication)
  changeStatusLoading(ctx: StateContext<AuthState>, status: boolean) {
    ctx.patchState({isLoading: status})
  }

  @Action(Login)
  async login(ctx: StateContext<AuthState>, {payload}: { payload: AuthenticationDto & { rememberMe?: boolean } }) {
    return this.authenticationService.login({
      usernameOrEmail: payload.usernameOrEmail,
      password: payload.password
    }).pipe(
      tap((res: AuthState): void => {
        if (payload.rememberMe) {
          this.authStorageService.save('localStorage', {key: 'user', payload: res});
        } else {
          this.authStorageService.save('sessionStorage', {key: 'user', payload: res});
        }

        ctx.patchState({
          accessToken: res.accessToken,
          user: {
            username: res.user.username,
            email: res.user.email,
            assets: res.user.assets,
            permissions: res.user.permissions,
          },
          isLoading: false
        })
      }),

      catchError(err => {
        ctx.patchState({
          isLoading: false
        })
        return throwError(err);
      })
    )
  }

  @Action(Logout)
  async logout(ctx: StateContext<AuthState>) {
    this.authStorageService.clearAll()

    return this.authenticationService.logout().pipe(
      tap(() => {
        ctx.setState({
          accessToken: null,
          user: {username: null, email: null, assets: null, permissions: null},
          isLoading: false
        });
      })
    );
  }
}














