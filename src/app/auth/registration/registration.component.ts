import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
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

  isDisabled(): boolean {
    return this.login.valid && this.password.valid && this.email.valid
  }
}
