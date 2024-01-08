import {Component, Input, ViewEncapsulation} from '@angular/core';
import {routerIcons} from "@/common/icons/routerIcons";

@Component({
  selector: 'app-router',
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent {
  @Input()
  icon: string;

  @Input()
  routerLink: string;

  @Input()
  test: string;

  @Input()
  routerLinkActive: string;

  @Input()
  routerLinkActiveOptions: any;

  @Input()
  ariaCurrentWhenActive: boolean | "page" | "step" | "location" | "date" | "time" | undefined;
  protected readonly routerIcons = routerIcons;
}
