import {
  AfterContentChecked, AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {NgForOf, SlicePipe} from "@angular/common";
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  imports: [
    NgForOf,
    SlicePipe
  ],
  standalone: true
})
export class OtpInputComponent implements OnInit {
  constructor(private readonly platform: Platform) {
  }
  @ViewChild('inputs', {static: true})
  inputs: ElementRef

  @Input()
  width: number = 58;

  @Input()
  height: string | 'inherit' = 'inherit';

  //in dev
  @Input()
  countInputs: number = 6;

  //in dev
  @Input()
  type: 'number' | 'text' = 'text';

  @Output()
  finish = new EventEmitter<number>();

  code: number[] = []
  disableInput: boolean = false;

  keyUp(e: any) {
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      this.deletePrevSymbol(e)
      return
    } e.preventDefault()

  }

  validateInput(event: any) {
    const validator = event.data;

    if (event.data && /[0-9]/.test(validator)) {
      this.input(event)
    } else event.preventDefault();
  }

  input(e: any): void {
    const target = e.target;
    const val = e.data;
    const next = target.nextElementSibling;

    this.code[target.id] = val

    if (!next) {
      this.disableInput = true;

      if (this.disableInput) {
        this.finish.emit(Number(this.code.join('')))

        return;
      }
      return;
    }

    if (next.value === '' && next.nextElementSibling != '') {
      next.focus()
    } else next.nextSibling.focus();
  };

  deletePrevSymbol(e: any): void {
    const target = e.target;

    this.code.splice(target.id, 1);

    const prev = target.previousElementSibling;
    if (!prev) return;


    if (prev.tagName !== 'INPUT') {
      target.previousElementSibling.previousElementSibling.select()
      prev.previousElementSibling.focus()
    } else {
      target.previousElementSibling.select()
      prev.focus()
    }

  }

  //in dev
  inputForMobile(e: any): void {
    if (this.platform.ANDROID || this.platform.IOS) {
      console.log(1)
    }
  }

  pasteForDesktop(e: any) {
    const clipboardCode = e.clipboardData.getData('text');
    const arrayOfClipboardEl = clipboardCode.split('');

    // console.log("legacy", clipboardCode)
    // console.log("1", arrayOfClipboardEl)

    if (arrayOfClipboardEl.length === this.countInputs
      && !isNaN(Number(clipboardCode))) {

      e.preventDefault()
      arrayOfClipboardEl.forEach((el: string, index: number): void => {
        this.code[index] = Number(el)
        console.log("paste")
      })

      this.disableInput = true;
      this.finish.emit(Number(this.code.join('')))

    } else e.preventDefault()

  }

  ngOnInit() {
  }

}
