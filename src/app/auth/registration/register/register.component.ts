import {Component, inject} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {Store} from "@ngxs/store";
import {FormControl, Validators} from "@angular/forms";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NavigationLogic {

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);

  protected readonly phantomIcons = phantomIcons;
}
