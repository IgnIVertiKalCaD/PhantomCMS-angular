import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {Select, Store} from "@ngxs/store";
import {AuthStore, Login} from "@/app/auth/authentication/store/authentication.store";
import {Observable, take} from "rxjs";
import {TempUserDataDto} from "@/app/auth/dto/tempUserData.dto";
import { TransportDataStore} from "@/app/auth/store/transportData.store";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent implements OnInit {
  constructor(
    private readonly store: Store,
    protected readonly authLogic: AuthLogicService,
  ) {}


  time: number = 3_000; // 2 min | 1s = 1000 | time of ms
  interval: number;

  resend() {
    alert('Кто это читает, тот хуисос')

    this.time = 120_000

    this.runTimer()
  }


  runTimer() {
    this.interval = setInterval(() => {
      if (this.time <= 0) {
        clearInterval(this.interval)
      }
      this.time = this.time - 1000
    }, 1000)
  }

  @Select(TransportDataStore.getTempUserData)
  tempUserData$: Observable<TempUserDataDto>;

  authentication(): void {
    this.tempUserData$.subscribe(user => {
      if (!user) return

      this.store.dispatch(
        new Login({
          usernameOrEmail: user.email!,
          password: user.password!,
          rememberMe: true
        })
      )
    }).unsubscribe()
  }


  ngOnInit() {
    this.runTimer()
    this.authentication()
  }


  protected readonly phantomIcons = phantomIcons;
  protected readonly alert = alert;
}
