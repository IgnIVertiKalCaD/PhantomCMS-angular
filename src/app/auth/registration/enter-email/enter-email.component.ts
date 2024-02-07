import {Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {FormControl, Validators} from "@angular/forms";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class RegisterComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}

  email = new FormControl('', [
    Validators.required,
    // Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);

  protected readonly phantomIcons = phantomIcons;
}
