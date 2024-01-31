import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {FormControl, Validators} from "@angular/forms";
import {SceneChangeToTheNext} from "@/app/auth/registration/store/sceneСhanger.store";
import {Store} from "@ngxs/store";
import {NavigationLogic} from "@/app/auth/core/NavigationLogic";

@Component({
  selector: 'app-account-protection',
  templateUrl: './account-protection.component.html',
  styleUrls: ['./account-protection.component.scss']
})
export class AccountProtectionComponent extends NavigationLogic {

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32),
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.pattern("^(?=.*[A-Z]).+$")
  ]);

  protected readonly phantomIcons = phantomIcons;
}
