import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {SceneChangeToTheNext} from "@/app/auth/registration/store/sceneСhanger.store";
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";

@Component({
  selector: 'app-nickname-choice',
  templateUrl: './nickname-choice.component.html',
  styleUrls: ['./nickname-choice.component.scss']
})
export class NicknameChoiceComponent extends NavigationLogic {

  nickname = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]+$")
  ]);
  protected readonly phantomIcons = phantomIcons;
}
