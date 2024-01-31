import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/NavigationLogic";

@Component({
  selector: 'app-mail-verification',
  templateUrl: './mail-verification.component.html',
  styleUrls: ['./mail-verification.component.scss']
})
export class MailVerificationComponent extends NavigationLogic implements OnInit {
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
}
