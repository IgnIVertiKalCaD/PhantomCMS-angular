import {Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {RouterType} from "@/app/components/global/nav/router/types/RouterType";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  protected readonly phantomIcons = phantomIcons;

  navRoutes: RouterType[] = [
    {
      text: 'Основное',
      link: './',
      routerLinkActive: 'active'
    }, {
      text: 'Безопасность',
      link: 'security',
      routerLinkActive: 'active'
    }, {
      text: 'Пополнение',
      link: 'restocking',
      routerLinkActive: 'active'
    }
  ]
}
