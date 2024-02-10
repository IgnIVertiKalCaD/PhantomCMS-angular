import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {authValidator} from "@/common/validaters/authValidator";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.scss']
})
export class EnterPasswordComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}

  password = new FormControl('', [
    Validators.required,
    // Validators.minLength(6),
    // Validators.maxLength(32),
    // Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    // Validators.pattern("^(?=.*[A-Z]).+$")
  ]);

  isRememberMe: boolean = false;

  rememberMe(event: boolean): void {
    this.isRememberMe = event
  }

  protected readonly phantomIcons = phantomIcons;
  protected readonly authValidator = authValidator;
}
