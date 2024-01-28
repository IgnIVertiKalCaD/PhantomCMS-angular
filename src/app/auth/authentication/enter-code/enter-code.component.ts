import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent extends NavigationLogic implements OnInit {

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

  ngOnInit() {
    this.runTimer()
  }


  protected readonly phantomIcons = phantomIcons;
  protected readonly alert = alert;
}
