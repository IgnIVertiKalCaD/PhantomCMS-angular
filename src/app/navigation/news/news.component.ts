import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

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
}
