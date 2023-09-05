import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";
import {Select, Store} from "@ngxs/store";
import {
  Registration,
  RegistrationStore,
  SetStatusLoadingRegistration
} from "@/app/auth/registration/store/registration.store";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Login, SetStatusLoadingAuthentication} from "@/app/auth/authentication/store/authentication.store";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  constructor(private readonly store: Store, private readonly router: Router) {
  }

  protected readonly authValidator = authValidator;

  auth_link: string = '/auth'

  login = new FormControl('', [
    Validators.required,
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.minLength(3),
    Validators.maxLength(16)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32),
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.pattern("^(?=.*[A-Z]).+$")
  ]);

  isEnabled(): boolean {
    // return this.login.valid && this.password.valid && this.email.valid
    return true
  }

  @Select(RegistrationStore.getStatusLoading)
  isLoading$: Observable<boolean>;

  @Select(RegistrationStore.isRegistrationAllRight)
  allRight$: Observable<boolean>;

  registration(): void {
    if (this.isEnabled()) {
      this.store.dispatch([
        new SetStatusLoadingRegistration(true),
        new Registration({
          username: this.login.value,
          email: this.email.value,
          password: this.password.value
        })
      ])
    }
  }

  async authentication(): Promise<void> {
      this.store.dispatch([
        new SetStatusLoadingAuthentication(true),
        new Login({
          usernameOrEmail: this.login.value as string,
          password: this.password.value as string,
          rememberMe: true
        }),
      ])

    await this.router.navigate(['/news'])
  }

  ngOnInit(): void {
    this.allRight$.subscribe(async done => {
      if (done) {
        await this.authentication()
      }
    })
  }


}
