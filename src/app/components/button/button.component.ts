import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    'style': 'display: block'
  },
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class ButtonComponent {
  @Input()
  disabled: boolean = false;

  @Input()
  className?: 'default' | 'hybrid' | 'transparent' | 'with-icon' | 'solid' | 'outline' | 'remove' | 'start-play' | 'load-avatar' | 'load-skin_cape' | 'auth' | 'send-code' | 'change-password' | 'close-all-sessions' | 'restocking' = 'default'
}
