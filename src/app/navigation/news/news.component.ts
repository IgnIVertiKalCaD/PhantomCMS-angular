import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {GetNews, NewsStore} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {animate, query, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit{
  constructor(private readonly store: Store) {}

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


  @Select(NewsStore.getNews)
  listNews$: Observable<NewsDto[]>

  ngOnInit() {
    this.store.dispatch(new GetNews());
  }
}
