import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  standalone: true
})
export class ProgressComponent {

  @Input()
  className: string;

  @Input()
  value: string;

  @Input()
  max: string;


}
