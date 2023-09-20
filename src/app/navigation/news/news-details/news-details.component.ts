import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {
  ClearSelectedNews,
  GetSelectedNews, NewsStore,
} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {phantomIcons} from "@/common/icons_kit_devtools/phantomIcons";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['../news.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  protected readonly phantomIcons = phantomIcons;

  constructor(private readonly route: ActivatedRoute, private readonly store: Store) {}

  defaultImageNews: string = 'assets/images/defaultServer.png'

  @Select(NewsStore.getSelectedNews)
  selectedNews$: Observable<NewsDto>

  ngOnInit() {
    document.body.style.overflowY = 'hidden'
    this.store.dispatch(new GetSelectedNews(Number(this.route.snapshot.paramMap.get('id')!)))
  }

  ngOnDestroy() {
    document.body.style.overflowY = 'scroll'
    this.store.dispatch(new ClearSelectedNews())
  }

}
