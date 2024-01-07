import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule
  ],
  standalone: true
})
export class CheckboxComponent implements OnInit{
  checkmark: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.checkmark = this.sanitizer.bypassSecurityTrustHtml("<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#1E1E25\"/>\n" +
      "<circle cx=\"16\" cy=\"16\" r=\"8.72727\" fill=\"#8f8f9433\"/>\n" +
      "</svg>");
  }

  isChecked: boolean = false;

  @Output()
  eventCheck: EventEmitter<boolean> = new EventEmitter<boolean>()

  emitIsChecked(isChecked: boolean): void {
    this.isChecked = isChecked
    this.eventCheck.emit(isChecked)
  }

  ngOnInit(): void {}

}
