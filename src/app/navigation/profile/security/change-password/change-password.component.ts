import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

    protected readonly phantomIcons = phantomIcons;
}
