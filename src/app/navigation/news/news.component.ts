import {AfterContentChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";
import {ChildrenOutletContexts, Router} from "@angular/router";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('animNewsDetails', [
      transition('* => *', [
        query(':leave', [
          style({ opacity: '1' }),
          animate('250ms ease',
            style({ opacity: '0' }))
        ], {optional: true}),
      ]),
    ])
  ]
})
export class NewsComponent implements OnInit {
  constructor(
    private contexts: ChildrenOutletContexts,
  ) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {

  }
}
