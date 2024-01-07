import {Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {

    protected readonly phantomIcons = phantomIcons;
}
