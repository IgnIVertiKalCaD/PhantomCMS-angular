import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetNews, NewsStore} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
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
import {Location} from '@angular/common';
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";
import {newsSortBy} from "@/app/navigation/news/types/newsSortBy";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {ModalService} from "@/services/modal.service";

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
    ]),

    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0}),
          stagger(100, [
            animate('0.3s', style({opacity: 1}))
          ])
        ], {optional: true})
      ])
    ])

  ]
})
export class NewsComponent implements OnInit, AfterContentChecked {
  constructor(protected readonly modalService: ModalService,
              private readonly store: Store, private readonly router: Router,
              private contexts: ChildrenOutletContexts,
              private readonly changeDetector: ChangeDetectorRef) {
  }

  isBlur: boolean;

  defaultImageNews: string = 'assets/images/defaultServer.png'

  sortBy: newsSortBy = "id:ASC";

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  @Select(NewsStore.getNews)
  listNews$: Observable<NewsDto[]>

  ngOnInit() {

    this.listNews$.subscribe(news => {
      console.log(news)
    })

    this.store.dispatch(new GetNews(this.sortBy));

  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  protected readonly phantomIcons = phantomIcons;
}
