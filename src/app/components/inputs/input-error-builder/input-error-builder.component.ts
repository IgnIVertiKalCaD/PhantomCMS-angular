import { Component } from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";

@Component({
  selector: 'app-input-error-builder',
  templateUrl: './input-error-builder.component.html',
  styleUrls: ['./input-error-builder.component.scss'],
  imports: [
    SafePipe
  ],
  standalone: true
})
export class InputErrorBuilderComponent {

  protected readonly phantomIcons = phantomIcons;
}
