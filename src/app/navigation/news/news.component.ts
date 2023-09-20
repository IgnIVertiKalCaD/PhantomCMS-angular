import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetNews, NewsStore} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {animate, animateChild, group, keyframes, query, state, style, transition, trigger} from "@angular/animations";
import {ChildrenOutletContexts, Router} from "@angular/router";
import {Location} from '@angular/common';
import {GetUserHead, GetUserSkin} from "@/store/assets-manager/assets-store";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('animNewsDetails', [
      transition('* <=> *', [
        query(':enter, :leave',
          style({ position: 'fixed', width: '100%', opacity: '0'}),
          { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translate(0%, -50%) scale(0.8)'}),
            animate('0.3s ease',
              style({ transform: 'translate(0%, -50%) scale(1)', opacity: '1'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translate(0%, -50%)', opacity: '1'}),
            animate('0.2s ease',
              style({ transform: 'translate(0%, -50%) scale(0.6)', opacity: '0'}))
          ], { optional: true }),
        ])
      ]),
    ]),

  trigger("inOutAnimation", [
      state("in", style({ opacity: 1 })),
      transition(":enter", [
        animate(
          200,
          keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 0.25, offset: 0.25 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 0.75, offset: 0.75 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ]),
      transition(":leave", [
        animate(
          200,
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0.75, offset: 0.25 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 0.25, offset: 0.75 }),
            style({ opacity: 0, offset: 1 }),
          ])
        )
      ])
    ])
  ]
})
export class NewsComponent implements OnInit, AfterContentChecked {
  constructor(private readonly store: Store, private readonly router: Router,
              private contexts: ChildrenOutletContexts,
              private readonly changeDetector: ChangeDetectorRef, private location: Location) {}

  isBlur: boolean;

  defaultImageNews: string = 'assets/images/defaultServer.png'

  sortByType: { name: string }[] = [
    {name: 'Новые'},
    {name: 'Лучшее'},
  ];

  sortByTime: { name: string }[] = [
    {name: 'За всё время'},
    {name: 'За последний день'},
    {name: 'За последнюю неделю'},
    {name: 'За последний месяц'},
  ];

  @ViewChild('closeDialogEl', {static: false})
  closeDialogEl: ElementRef

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  closeDialog(event: any) {
    if (this.closeDialogEl.nativeElement.className === event.target.className) {
      this.location.back()
    }
  }

  @Select(NewsStore.getNews)
  listNews$: Observable<NewsDto[]>

  ngOnInit() {
    this.store.dispatch([
      new GetNews(),
      // new GetUserSkin('IgnI'),
      // new GetUserHead('IgnI')
    ]);
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
