import {Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/animation";
import {phantomIcons} from "@/common/icons_kit_devtools/phantomIcons";
import {DockComponent} from "@/app/components/dock/dock.component";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
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
  protected readonly phantomIcons = phantomIcons;

  constructor(private contexts: ChildrenOutletContexts) {}

  @ViewChild('dock', {static: true})
  dock: DockComponent

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toUp(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  isShow: boolean = false;
  isPinedDock: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.isShow = window.scrollY > 100;
    this.isPinedDock =  1 < window.scrollY;
  }
  ngOnInit() {}
}
