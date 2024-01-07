import {Component, Input} from '@angular/core';
import {routerIcons} from "@/common/icons/routerIcons";

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent {

  @Input()
  routerLink: string;

  @Input()
  test: string;

  @Input()
  routerLinkActive: string;

  @Input()
  ariaCurrentWhenActive: boolean | "page" | "step" | "location" | "date" | "time" | undefined;

  protected readonly routerIcons = routerIcons;
}
