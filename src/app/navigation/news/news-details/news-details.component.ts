import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {
  ClearSelectedNews,
  GetSelectedNews, NewsStore,
} from "@/app/navigation/news/store/news.store";
import {Observable} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {Location} from "@angular/common";
import {ModalService} from "@/services/modal.service";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['../news-list/news-list.component.scss'],
  host: {
    'style': 'display: block'
  }
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  protected readonly phantomIcons = phantomIcons;

  constructor(
    private readonly modalService: ModalService,
    private readonly location: Location, private readonly route: ActivatedRoute,
    private readonly store: Store) {}

  defaultImageNews: string = 'assets/images/defaultServer.png'

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.location.back()
  }

  @Select(NewsStore.getSelectedNews)
  selectedNews$: Observable<NewsDto>

  ngOnInit() {
    this.modalService.open('modal-news')

    this.store.dispatch(new GetSelectedNews(Number(this.route.snapshot.paramMap.get('id')!)))
  }

  ngOnDestroy() {
    this.modalService.close()

    this.store.dispatch(new ClearSelectedNews())
  }

}
