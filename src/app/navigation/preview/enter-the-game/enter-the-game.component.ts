import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-enter-the-game',
  templateUrl: './enter-the-game.component.html',
  styleUrls: ['./enter-the-game.component.scss']
})
export class EnterTheGameComponent {

  protected readonly phantomIcons = phantomIcons;
}
