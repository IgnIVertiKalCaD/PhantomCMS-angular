import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.scss'],
  imports: [
    MatInputModule,
    MatSelectModule,
    NgForOf,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  standalone: true
})
export class InputSelectorComponent implements OnInit{
  @Input()
  listItems: { name: string }[];

  @Input()
  title: string

  list: FormControl;

  @ViewChild('selector', {static: false})
  selector: MatSelect

  ngOnInit() {
    this.list = new FormControl(this.listItems[0].name);
  }
  unFocused() {
    this.selector.close()
  }
}
