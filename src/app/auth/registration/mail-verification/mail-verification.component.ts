import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";
import {TransportDataStore} from "@/app/auth/store/transportData.store";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {TempUserDataDto} from "@/app/auth/dto/tempUserData.dto";
import {CheckActivationCode, SendActivationCode} from "@/app/auth/registration/store/registration.store";

@Component({
  selector: 'app-mail-verification',
  templateUrl: './mail-verification.component.html',
  styleUrls: ['./mail-verification.component.scss']
})
export class MailVerificationComponent implements OnInit {
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

  checkCode(code: number) {
    this.store.dispatch(
      new CheckActivationCode(code)
    )
  }

  sendActivationCode() {
    this.tempUser.subscribe(user => {
        this.store.dispatch(
          new SendActivationCode('igniver696@gmail.com')
        )
    }).unsubscribe()

  }

  @Select(TransportDataStore.getTempUserData)
  tempUser: Observable<TempUserDataDto>

  ngOnInit() {
    // this.sendActivationCode()
    this.runTimer()
  }

  protected readonly phantomIcons = phantomIcons;
}
