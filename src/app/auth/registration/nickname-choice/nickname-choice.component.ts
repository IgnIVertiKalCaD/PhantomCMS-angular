import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";
import {InserterService} from "@/app/auth/core/inserter.service";

@Component({
  selector: 'app-nickname-choice',
  templateUrl: './nickname-choice.component.html',
  styleUrls: ['./nickname-choice.component.scss']
})
export class NicknameChoiceComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
    protected readonly inserterService: InserterService,
  ) {}

  nickname = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]+$")
  ]);
  protected readonly phantomIcons = phantomIcons;
}
