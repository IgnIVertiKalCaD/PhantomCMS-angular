import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AuthState} from "@/app/auth/authentication/dto/authState";
import {AuthenticationService} from "@/app/auth/authentication/authentication.service";
import {AuthenticationDto} from "@/app/auth/authentication/dto/authentication.dto";
import {catchError, of, tap, throwError} from "rxjs";
import { StorageManagerService } from "@/common/storage/storage-manager.service";
import {patch} from "@ngxs/store/operators";
import {AssetsStore} from "@/store/assets-manager/assets-store";

export class Login {
  static readonly type = '[Auth] Login';

  constructor(public payload: AuthenticationDto & { rememberMe?: boolean }) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class UpdateAccessToken {
  static readonly type = '[UpdateAccessToken] Update accessToken';
}
export class SetStatusLoadingAuthentication {
  static readonly type = '[SetStatusLoadingAuthentication] change status loading'

  constructor(public status: boolean) {}
}

@State<AuthState>({
  name: 'auth_store',
  defaults:
    JSON.parse(localStorage.getItem('user')!) ||
    JSON.parse(sessionStorage.getItem('user')!)
})
@Injectable()
export class AuthStore {
  constructor(
    private readonly store: Store,
    private readonly authenticationService: AuthenticationService,
    private readonly authStorageService: StorageManagerService,
  ) {}

  @Selector()
  static getAccessToken(state: AuthState): string | null {
    return state.accessToken;
  }
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
  static getCreatedAtAccount(state: AuthState): string | null {
    return state.user.createdAt
  }

  @Selector()
  static getActiveGroup(state: AuthState): string | null | undefined {
    return state.user.permissions?.roles[0]
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
      tap((res): void => {
        res.user.assets = undefined

        if (payload.rememberMe) {
          this.authStorageService.save({type: 'localStorage', key: 'user', payload: res});
        } else {
          this.authStorageService.save({type: 'sessionStorage', key: 'user', payload: res});
        }

        ctx.patchState({
          accessToken: res.accessToken,
          user: {
            username: res.user.username,
            email: res.user.email,
            permissions: res.user.permissions,
            createdAt: res.user.createdAt
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
          user: {username: null, email: null, permissions: null, createdAt: null},
          isLoading: false
        });
      })
    );
  }

  @Action(UpdateAccessToken)
  async updateAccessToken(ctx: StateContext<AuthState>) {
    return this.authenticationService.refreshToken().pipe(
      tap((res) => {

        const oldDataCache: AuthState = this.authStorageService.get({type: 'localStorage', key: 'user'}) || this.authStorageService.get({ type: 'sessionStorage', key: 'user'})
        oldDataCache.accessToken = res.accessToken
        this.authStorageService.save({type: 'localStorage', key: 'user', payload: oldDataCache});

        ctx.setState(
          patch({
            accessToken: res.accessToken
          })
        );
      })
    );
  }

}
