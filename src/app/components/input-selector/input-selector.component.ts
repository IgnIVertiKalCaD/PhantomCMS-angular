import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

type ArrayWithObject = {
  name: string;
}
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
  servers: Array<ArrayWithObject>

  list: FormControl;

  @ViewChild('selector', {static: false})
  selector: MatSelect

  ngOnInit() {
    // Выполняем инициализацию panelColor с использованием this.servers[0].name
    this.list = new FormControl(this.servers[0].name);
  }
  unFocused() {
    this.selector.close()
  }
}
