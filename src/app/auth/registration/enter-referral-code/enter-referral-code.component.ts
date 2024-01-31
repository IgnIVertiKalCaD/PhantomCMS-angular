import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {SceneChangeToTheNext} from "@/app/auth/registration/store/sceneСhanger.store";
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/NavigationLogic";

@Component({
  selector: 'app-enter-referral-code',
  templateUrl: './enter-referral-code.component.html',
  styleUrls: ['./enter-referral-code.component.scss']
})
export class EnterReferralCodeComponent extends NavigationLogic {

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);
  protected readonly phantomIcons = phantomIcons;
  protected readonly alert = alert;
}
