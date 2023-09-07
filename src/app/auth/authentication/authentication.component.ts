import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";
import {Select, Store} from "@ngxs/store";
import {
  AuthStore,
  Login,
  SetStatusLoadingAuthentication
} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [],
})
export class AuthenticationComponent implements OnInit {
  protected readonly authValidator = authValidator;

  constructor(private readonly store: Store, private readonly router: Router) {}

  resetAccount_link: string = '/reset'
  registration_link: string = '/registration'

  login = new FormControl('', [
    Validators.required,
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.minLength(3),
    Validators.maxLength(16)]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32),
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.pattern("^(?=.*[A-Z]).+$")
  ]);

  isEnabled(): boolean {
    return this.login.valid && this.password.valid
  }

  @Select(AuthStore.isAuth)
  status$: Observable<boolean>;

  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getStatusLoading)
  isLoading$: Observable<boolean>;

  isRememberMe: boolean = false;

  rememberMe(event: boolean) {
    this.isRememberMe = event
  }

  authentication(): void {
    if (this.isEnabled()) {
      this.store.dispatch([
        new SetStatusLoadingAuthentication(true),
        new Login({
          usernameOrEmail: this.login.value as string,
          password: this.password.value as string,
          rememberMe: this.isRememberMe
        }),
      ])
    }
  }

  ngOnInit(): void {
    this.status$.subscribe(async done => {
      if (done) await this.router.navigate(['/news'])
    })
  }
}
