import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-two-fa',
  templateUrl: './two-fa.component.html',
  styleUrls: ['./two-fa.component.scss']
})
export class TwoFaComponent {

    protected readonly phantomIcons = phantomIcons;
}
