import {Component, EventEmitter, Output} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  standalone: true
})
export class InputCheckboxComponent {
  checkmark: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.checkmark = this.sanitizer.bypassSecurityTrustHtml(`<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 0.999668C7.29322 1.29256 7.29322 1.76743 7.00033 2.06033L3.78033 5.28033C3.48744 5.57322 3.01256 5.57322 2.71967 5.28033L0.96967 3.53033C0.676777 3.23744 0.676777 2.76256 0.96967 2.46967C1.26256 2.17678 1.73744 2.17678 2.03033 2.46967L3.25 3.68934L5.93967 0.999668C6.23256 0.706776 6.70744 0.706776 7.00033 0.999668Z" fill="white"/>
</svg>`);
  }

  isChecked: boolean = false;

  @Output()
  eventCheck: EventEmitter<boolean> = new EventEmitter<boolean>()

  emitIsChecked(isChecked: boolean): void {
    this.isChecked = isChecked
    this.eventCheck.emit(isChecked)
  }

}
