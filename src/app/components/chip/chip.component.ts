import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class ChipComponent {

  @Input()
  className: 'for-servers' | 'for-news'

}
