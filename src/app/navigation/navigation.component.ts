import {Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/animation";
import {DockComponent} from "@/app/components/global/dock/dock.component";
import {routerIcons} from "@/common/icons/routerIcons";

type RouterType = {
  icon: string,
  text: string,
  link: string,
  routerLinkActive: string,

}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    'style': 'display: block',
    'class': 'space-border'
  },
  encapsulation: ViewEncapsulation.None,
  animations: [
    navigateAnimation,
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('200ms ease', style({opacity: 0}))
      ])
    ]),
  ],
})

export class NavigationComponent implements OnInit {
  constructor(private contexts: ChildrenOutletContexts) {}

  navRoutes: RouterType[] = [
    {
      icon: routerIcons.main_icon,
      text: 'Главная',
      link: '',
      routerLinkActive: 'active'
    }, {
      icon: routerIcons.news_icon,
      text: 'Новости',
      link: '/news',
      routerLinkActive: 'active'
    }, {
      icon: routerIcons.servers_icon,
      text: 'Сервера',
      link: '/servers',
      routerLinkActive: 'active'
    }, {
      icon: routerIcons.profile_icon,
      text: 'Профиль',
      link: '/profile',
      routerLinkActive: 'active'
    }, {
      icon: routerIcons.store_icon,
      text: 'Магазин',
      link: '/store',
      routerLinkActive: 'active'
    },
  ]

  @ViewChild('dock', {static: true})
  dock: DockComponent

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  isShow: boolean = false;
  isPinedDock: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.isShow = window.scrollY > 100;
    this.isPinedDock = 1 < window.scrollY;
  }

  ngOnInit() {
  }
}
