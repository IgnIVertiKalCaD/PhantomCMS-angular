import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AuthStore, Logout} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
  constructor(private readonly store: Store) {
    this.username$.subscribe(username => {
      this.niceMessages = [`Привет, ${username}!`, 'Приятной игры!']
    })
  }

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  @Select(AuthStore.getCreatedAtAccount)
  createdAt: Observable<string>

  @Select(AuthStore.isAuth)
  isAuth$: Observable<boolean>

  niceMessages: string[] = [];

  logout() {
    this.store.dispatch(new Logout())
  }

  redirectToProfile() {

  }

  niceMessage: string;

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
    this.niceMessage = this.niceMessages[this.getRandomInt(this.niceMessages.length)]
  }

}
