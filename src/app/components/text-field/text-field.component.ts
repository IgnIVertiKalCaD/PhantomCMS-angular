import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatInputModule,
    NgOptimizedImage,
    NgClass
  ]
})
export class TextFieldComponent {
  @Input()
  className: 'default' | ''

  @Input()
  placeholder: string
}
