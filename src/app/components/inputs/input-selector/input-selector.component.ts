import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.scss'],
  host: {
    'style': 'position: relative; flex-direction: column;'
  },
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgForOf,
    SafePipe,
    NgIf
  ],
  standalone: true
})
export class InputSelectorComponent implements OnInit, AfterViewInit {
  @Input()
  listItems: InputSelectDto;

  @Input()
  showOnline: boolean = false;

  title: string

  isOpen: boolean = false;

  @ViewChild('selector', {static: false})
  selector: ElementRef<HTMLDivElement>

  //dev
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.title = this.listItems[0].text;
  }

  protected readonly phantomIcons = phantomIcons;
}
