import {Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {RouterType} from "@/app/components/global/nav/router/types/RouterType";
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/navigation.animation";
import {profileAnimation} from "@/app/navigation/profile/profile.animation";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [profileAnimation]
})
export class ProfileComponent {

  constructor(private readonly contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
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
