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
      transition('* <=> *', [
        query(':enter, :leave',
          style({opacity: '0'}),
          {optional: true}),
        group([
          query(':enter', [
            style({transform: 'translate(0%, -50%) scale(0.8)'}),
            animate('0.1s ease',
              style({transform: 'translate(0%, -50%) scale(1)', opacity: '1'}))
          ], {optional: true}),
          query(':leave', [
            style({transform: 'translate(0%, -50%)', opacity: '1'}),
            animate('0.2s ease',
              style({transform: 'translate(0%, -50%) scale(0.6)', opacity: '0'}))
          ], {optional: true}),
        ])
      ]),
    ])
  ]
})
export class NewsComponent implements OnInit, AfterContentChecked {
  constructor(
    private contexts: ChildrenOutletContexts,
  ) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit() {

  }

  ngAfterContentChecked() {
  }
}
