import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent {

  protected readonly phantomIcons = phantomIcons;
}
