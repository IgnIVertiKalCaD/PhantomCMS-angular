import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Store} from "@ngxs/store";
import {
  catchError,
  delay,
  of,
  retryWhen, switchMap, take,
  throwError, timeout,
} from "rxjs";
import {AuthenticationService} from "@/app/auth/authentication/authentication.service";
import {Injectable} from "@angular/core";
import {AuthStore, UpdateAccessToken} from "@/app/auth/authentication/store/authentication.store";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly store: Store, private readonly authService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler, repeatedRequest: boolean = false): any {
    const token = this.store.selectSnapshot(AuthStore.getAccessToken);

    if (token) request = this.setAuthHeader(request, token);

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.error?.error?.reason === 'JwtTokenExpired' && !repeatedRequest) {
          return this.store.dispatch(new UpdateAccessToken()).pipe(
            switchMap(() => {
              return next.handle(this.setAuthHeader(request, this.store.selectSnapshot(AuthStore.getAccessToken)!));
            }),
            catchError(() => {
              return throwError(() => err);
            })
          );
        }

        return throwError(() => err);
      })
    );
  }

  private setAuthHeader(request: HttpRequest<any>, accessToken: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Access-Token ${accessToken}`
      }
    })
  }
}
