import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AuthStore, Logout} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit{

  constructor(private readonly store: Store) {
  }

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  @Select(AuthStore.isAuth)
  isAuth$: Observable<boolean>


  logout() {
    this.store.dispatch(new Logout())
  }

  ngOnInit(): void {}
}
