import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {
  ClearSelectedNews,
  GetSelectedNews, NewsStore,
} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['../news.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {

  constructor(private readonly route: ActivatedRoute, private readonly store: Store) {}

  defaultImageNews: string = 'assets/images/defaultServer.png'

  @Select(NewsStore.getSelectedNews)
  selectedNews$: Observable<NewsDto>

  id: number
  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id')!)

    this.store.dispatch(new GetSelectedNews(this.id))
  }

  ngOnDestroy() {
    this.store.dispatch(new ClearSelectedNews())
  }
}
