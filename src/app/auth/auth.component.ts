import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {Router} from "@angular/router";
import {Select} from "@ngxs/store";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit {
  constructor(private readonly router: Router) {
  }

  @Select(AuthStore.isAuth)
  status$: Observable<boolean>;

  ngOnInit() {
    this.status$.subscribe(async done => {
      if (done) await this.router.navigate(['/news'])
    })
  }


  protected readonly phantomIcons = phantomIcons;
}
