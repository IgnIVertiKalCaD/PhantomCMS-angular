import {Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/animation";
import {DockComponent} from "@/app/components/global/dock/dock.component";
import {routerIcons} from "@/common/icons/routerIcons";
import {RouterType} from "@/app/components/global/nav/router/types/RouterType";
import {phantomIcons} from "@/common/icons/phantomIcons";
import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  host: {
    'style': 'display: block',
    'class': 'space-border'
  },
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

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>

  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider: KeenSliderInstance;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement,
        {
          loop: true,
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel
          }
        },
        [
          (slider) => {
            let timeout: any
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ]
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

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

  protected readonly phantomIcons = phantomIcons;
}
