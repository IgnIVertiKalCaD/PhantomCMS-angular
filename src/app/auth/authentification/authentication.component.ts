import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "../../common/validaters/authValidator";
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthenticationComponent {
  protected readonly authValidator = authValidator;

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

  isDisabled(): boolean {
    return this.login.valid && this.password.valid
  }
}
