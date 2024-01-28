import {Component, Input, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";
import {NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    SafePipe,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TextFieldComponent {
  @Input()
  className: 'default' | 'outline' | 'solid' = 'default'

  @Input()
  type: 'password' | 'text' | 'email' = 'text';

  @Input()
  placeholder: string

  @Input()
  control: FormControl = new FormControl('');

  isHide: boolean = true;
  isFocused: boolean = false;


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

  protected readonly phantomIcons = phantomIcons;
}
