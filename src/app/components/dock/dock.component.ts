import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AuthStore, Logout} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {phantomIcons} from "@/common/icons_kit_devtools/phantomIcons";
import {AssetsStore, GetUserHead} from "@/store/assets-manager/assets-store";
@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  animations: []
})
export class DockComponent implements OnInit {
  protected readonly phantomIcons = phantomIcons;

  constructor(private readonly store: Store) {
    this.username$.subscribe(username => {
      this.niceMessages = [`Привет, ${username}!`, 'Приятной игры!']
    })
  }

  defaultHead: string = 'assets/images/playerDefault.png'

  isHide: boolean = true

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  @Select(AuthStore.getCreatedAtAccount)
  createdAt: Observable<string>

  @Select(AuthStore.isAuth)
  isAuth$: Observable<boolean>

  @Select(AssetsStore.getHeadUser)
  head$: Observable<string>

  niceMessages: string[] = [];

  logout(): void {
    this.store.dispatch(new Logout())
  }

  niceMessage: string;
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.isAuth$.subscribe(el => {
      if (el) {
        this.username$.subscribe(username => this.store.dispatch(new GetUserHead(username)))
      }
    })

    this.niceMessage = this.niceMessages[this.getRandomInt(this.niceMessages.length)]
  }
}
