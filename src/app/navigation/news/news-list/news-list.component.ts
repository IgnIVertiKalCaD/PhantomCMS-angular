import {ChangeDetectorRef, Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {ModalService} from "@/services/modal.service";
import {Select, Store} from "@ngxs/store";
import {ChildrenOutletContexts} from "@angular/router";
import {newsSortBy} from "@/app/navigation/news/types/newsSortBy";
import {GetNews, NewsStore} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {animate, group, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [
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
export class NewsListComponent {
  constructor(
              private readonly store: Store,
              private contexts: ChildrenOutletContexts
  ) {

  }

  defaultImageNews: string = 'assets/images/defaultServer.png'

  sortBy: newsSortBy = "id:ASC";

  @Select(NewsStore.getNews)
  listNews$: Observable<NewsDto[]> | null

  ngOnInit() {
    this.store.dispatch(new GetNews(this.sortBy));
  }


  protected readonly phantomIcons = phantomIcons;
}
