import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {NewsService} from "@/app/navigation/news/news.service";
import {catchError, tap, throwError} from "rxjs";
import {NewsDto} from "@/app/navigation/news/dto/news.dto";
import {patch, updateItem} from "@ngxs/store/operators";
import {StorageManagerService} from "@/common/storage/storage-manager.service";


export class GetNews {
  static readonly type = '[news_store] Get news'
  constructor() {}
}

export class GetSelectedNews {
  static readonly type = '[news_store] Get selected news'

  constructor(public id: number) {}
}

export class ClearSelectedNews {
  static readonly type = '[news_store] Remove selected news'

  constructor() {}
}

class NewsState {
  news: NewsDto[]
  selectedNews: NewsDto | null
}

@State<NewsState>({
  name: 'news_store',
  defaults: {
    news: JSON.parse(sessionStorage.getItem('news')!),
    selectedNews: null
  }
})
@Injectable()
export class NewsStore {
  constructor(
    private readonly storageManager: StorageManagerService,
    private readonly newsService: NewsService) {}

  @Selector()
  static getNews(state: NewsState): NewsDto[] {
    return state.news;
  }
  @Selector()
  static getSelectedNews(state: NewsState): NewsDto | null {
    return state.selectedNews;
  }

  @Action(GetNews)
  getNews(ctx: StateContext<NewsState>) {
    return this.newsService.getNews().pipe(
      tap((res: NewsDto[]): void => {
        ctx.setState(patch({
          news: res
        }))

        this.storageManager.save({type: 'sessionStorage', key: 'news', payload: res})
      }),

      catchError(err => {
        // ctx.patchState()
        return throwError(err);
      })
    )
  }

  @Action(GetSelectedNews)
  getSelectedNews(ctx: StateContext<NewsState>, { id }: { id: number }) {
    const existNews = ctx.getState().news?.find(el => el.id === id)

    if (existNews) {
      return ctx.setState(patch({selectedNews: existNews}))
    } else {
      console.log("send backend news")
      return this.newsService.getNewsById(id).pipe(
        tap((res): void => {
          ctx.setState(patch({
            selectedNews: res
          }))
        }),

        catchError(err => {
          // ctx.patchState()
          return throwError(err);
        })
      )
    }

  }

  @Action(ClearSelectedNews)
  removeSelectedNews(ctx: StateContext<NewsState>): void {
      ctx.setState(patch({
        selectedNews: null
      }))
  }
}
