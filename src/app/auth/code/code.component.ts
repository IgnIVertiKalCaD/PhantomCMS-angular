import {Component, ViewEncapsulation} from '@angular/core';
import {NgxOtpInputConfig} from "ngx-otp-input";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeComponent {
  email: string = 'example@gmail.com'
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'input-box',
      input: 'input',
      inputFilled: 'input-filled-class',
      inputDisabled: 'input-disable-class',
      inputSuccess: 'input-success-class',
      inputError: 'input-error-class',
    },
  };
  // handeOtpChange(value: string[]): void {
  //   console.log(value);
  // }
  handleFillEvent(value: string): void {
    console.log(value);
  }
}
