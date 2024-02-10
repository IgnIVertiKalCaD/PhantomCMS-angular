import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-privileges-card',
  templateUrl: './privileges-card.component.html',
  styleUrls: ['./privileges-card.component.scss']
})
export class PrivilegesCardComponent {

  protected readonly phantomIcons = phantomIcons;
}
