import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {ClearTempUserData} from "@/app/auth/store/transportData.store";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  constructor(private readonly router: Router, private readonly store: Store) {
  }

  @Select(AuthStore.isAuth)
  status$: Observable<boolean>;

  ngOnInit() {
    this.status$.subscribe(async done => {
      if (done) {
        this.store.dispatch(new ClearTempUserData())
        await this.router.navigate(['/news'])
      }
    })
  }


  protected readonly phantomIcons = phantomIcons;
}
