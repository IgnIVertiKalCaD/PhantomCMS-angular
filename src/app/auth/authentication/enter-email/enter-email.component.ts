import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";
import {Store} from "@ngxs/store";
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent extends NavigationLogic {
  constructor(store: Store) {
    super(store);
  }

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);

  protected readonly phantomIcons = phantomIcons;
}
