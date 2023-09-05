import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";
import {Store} from "@ngxs/store";
import {Registration} from "@/app/auth/registration/store/registration.store";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private readonly store: Store) {}

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
    return this.login.valid && this.password.valid && this.email.valid
  }

  registration() {
    this.store.dispatch(new Registration({
      email: this.email.value as string,
      password: this.password.value as string,
      username: this.login.value as string
    }))
  }
}
