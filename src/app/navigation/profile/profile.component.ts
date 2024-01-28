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
    }, {
      text: 'Безопасность',
      link: 'security',
    }, {
      text: 'Пополнение',
      link: 'restocking',
    }
  ]
}
