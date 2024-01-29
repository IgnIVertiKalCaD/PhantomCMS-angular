import {Component, Input, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";
import {NgIf} from "@angular/common";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {authValidator} from "@/common/validaters/authValidator";
import {InputErrorBuilderComponent} from "@/app/components/inputs/input-error-builder/input-error-builder.component";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  animations: [
    trigger('showingErrorAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms ease', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('200ms ease', style({opacity: 0}))
      ])
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  imports: [
    InputErrorBuilderComponent,
    SafePipe,
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TextFieldComponent {
  @Input()
  className: 'default' | 'outline' | 'solid' = 'default';

  @Input()
  type: 'password' | 'text' | 'email' = 'text';

  @Input()
  placeholder: string;

  @Input()
  control: FormControl = new FormControl('');

  @Input()
  errorInsideTheBlock: boolean = false;


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
  protected readonly authValidator = authValidator;
}
