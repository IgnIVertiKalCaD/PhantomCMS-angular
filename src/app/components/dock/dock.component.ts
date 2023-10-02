import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
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
export class DockComponent implements OnInit, AfterViewInit {
  protected readonly phantomIcons = phantomIcons;

  constructor(private readonly store: Store) {
    this.isAuth$.subscribe(isAuth => this.isAuth = isAuth)
    this.username$.subscribe(name => this.username = name)
  }

  @ViewChild('header', {static: true})
  header: ElementRef

  public heightHeader: number;

  defaultHead: string = 'assets/images/playerDefault.png'

  isHide: boolean = true

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  private username: string;

  @Select(AuthStore.isAuth)
  isAuth$: Observable<boolean>

  private isAuth: boolean;

  @Select(AssetsStore.getHeadUser)
  head$: Observable<string>

  niceMessages: string[]
  message: string;

  logout(): void {
    this.store.dispatch(new Logout())
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.niceMessages = [`Привет, ${this.username}!`, 'Приятной игры!'];

    if (this.isAuth) this.store.dispatch(new GetUserHead(this.username))

    this.message = this.niceMessages[this.getRandomInt(this.niceMessages.length)]
  }
  ngAfterViewInit() {
    this.heightHeader = this.header.nativeElement.offsetHeight
  }
}
