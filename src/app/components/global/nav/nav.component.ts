import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  protected readonly phantomIcons = phantomIcons;
}
