import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class IconComponent {

  @Input()
  type: 'solid' | 'outline' | 'transparent' = 'solid';

  @Input()
  className: string = '';
}
