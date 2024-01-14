import {Component, Input, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    SafePipe,
    NgIf
  ]
})
export class TextFieldComponent {
  @Input()
  className: 'default' | 'outline' = 'default'

  @Input()
  type: 'password' | 'text' | 'email';

  @Input()
  placeholder: string
  protected readonly phantomIcons = phantomIcons;


  isHide: boolean = true;

  toggleShowPassword(): void {
    this.isHide = !this.isHide
  }

  selectType(): typeof this.type {
    if (this.type === 'password') {
      if (this.isHide) {
        return "password"
      }
      return "text"
    } else return this.type
  }
}
