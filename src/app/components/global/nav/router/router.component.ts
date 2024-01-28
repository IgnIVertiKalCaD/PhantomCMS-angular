import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IsActiveMatchOptions, RouterLink, RouterLinkActive} from "@angular/router";
import {SafePipe} from "@/pipes/safe.pipe";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-router',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    SafePipe,
    NgIf
  ]
})
export class RouterComponent {
  @Input()
  icon: string | undefined;

  @Input()
  routerLink: string = '';

  @Input()
  className: 'profile' | 'default' | 'footer' | 'auxiliary' = 'default';

  @Input()
  routerLinkActive: string = 'active';

  @Input()
  routerLinkActiveOptions: {
    exact: boolean
  } | IsActiveMatchOptions  = {exact: false};

  @Input()
  ariaCurrentWhenActive: boolean | "page" | "step" | "location" | "date" | "time" | undefined = 'page';
}
