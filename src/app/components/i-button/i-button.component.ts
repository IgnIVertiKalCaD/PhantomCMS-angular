import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'i-button',
  templateUrl: './i-button.component.html',
  styleUrls: ['./i-button.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ]
})
export class IButtonComponent {
  @Input()
  text: string

  @Input()
  link: string

  @Input()
  disabled: boolean

  @Input()
  className?: 'outline' | 'default' | 'get-help' | 'store-btn' | 'refresh-status' | 'auth' | 'remove' | 'profile'

  @Input()
  color?: 'primary' | 'accent' | 'warn'
}
