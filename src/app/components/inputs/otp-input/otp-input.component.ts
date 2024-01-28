import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  standalone: true
})
export class OtpInputComponent {
  @ViewChild('inputs')
  inputs: ElementRef<Input>

  @Input()
  width: number = 58;

  input(e: any): void {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
      target.value = "";
      return;
    }

    if (val != "") {
      if (!target.nextElementSibling) {
        return;
      }

      let next = target.nextElementSibling;

      if (next.tagName !== 'INPUT') {
        // jump
        target.nextSibling.nextSibling.focus();
      } else if (next.tagName === 'INPUT') {
        target.nextElementSibling.focus();
      }

    }
  };

  keyup(e: any): void {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      target.value = "";
      const prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };

}
