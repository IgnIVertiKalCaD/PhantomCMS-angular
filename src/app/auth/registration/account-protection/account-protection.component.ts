import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {FormControl, Validators} from "@angular/forms";
import { AuthLogicService } from '../../core/auth-logic.service';

@Component({
  selector: 'app-account-protection',
  templateUrl: './account-protection.component.html',
  styleUrls: ['./account-protection.component.scss']
})
export class AccountProtectionComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32),
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.pattern("^(?=.*[A-Z]).+$")
  ]);

  protected readonly phantomIcons = phantomIcons;
}
