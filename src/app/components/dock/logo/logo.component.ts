import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ]
})
export class LogoComponent {
  @Input()
  link: string = '/news'
}
