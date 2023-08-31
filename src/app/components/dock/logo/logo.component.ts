import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class LogoComponent {
  @Input()
  link: string = '/news'
}
