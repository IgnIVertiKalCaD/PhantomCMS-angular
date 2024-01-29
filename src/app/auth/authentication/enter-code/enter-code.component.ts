import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";
import {Select, Store} from "@ngxs/store";
import {AuthStore, Login} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {TempUserDataDto} from "@/app/auth/dto/tempUserData.dto";
import {ClearTempUserData, TransportDataStore} from "@/app/auth/store/transportData.store";


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent extends NavigationLogic implements OnInit {
  constructor(private readonly store: Store) {
    super(store);

  }


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
      this.store.dispatch([new ClearTempUserData(),
        new Login({
          usernameOrEmail: user.usernameOrEmail!,
          password: user.password!,
          rememberMe: true
        })
      ])
    })
  }


  ngOnInit() {
    this.runTimer()

    setTimeout(() => {
      this.authentication()
    }, 2000)

  }

  protected readonly phantomIcons = phantomIcons;
  protected readonly alert = alert;
}
