import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-good-game',
  templateUrl: './good-game.component.html',
  styleUrls: ['./good-game.component.scss']
})
export class GoodGameComponent {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}
    protected readonly phantomIcons = phantomIcons;
}
