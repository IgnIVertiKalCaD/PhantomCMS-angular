import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-good-game',
  templateUrl: './good-game.component.html',
  styleUrls: ['./good-game.component.scss']
})
export class GoodGameComponent {

    protected readonly phantomIcons = phantomIcons;
}
