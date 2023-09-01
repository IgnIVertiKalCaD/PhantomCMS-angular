import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";

@Component({
  selector: 'app-recovery-account',
  templateUrl: './recovery-account.component.html',
  styleUrls: ['./recovery-account.component.scss']
})
export class RecoveryAccountComponent {
  protected readonly authValidator = authValidator;

  registration_link: string = '/registration'

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);

  isDisabled(): boolean {
    return this.email.valid
  }
}
