import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-enter-referral-code',
  templateUrl: './enter-referral-code.component.html',
  styleUrls: ['./enter-referral-code.component.scss']
})
export class EnterReferralCodeComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);
  protected readonly phantomIcons = phantomIcons;
  protected readonly alert = alert;
}
