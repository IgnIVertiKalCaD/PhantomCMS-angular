import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit, Renderer2,
  ViewChild, ViewContainerRef,
  ViewEncapsulation, ViewRef
} from '@angular/core';
import {Location, NgForOf, NgIf} from "@angular/common";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {SafePipe} from "@/pipes/safe.pipe";
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";
import {IconComponent} from "@/app/components/icon/icon.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-input-selector',
  templateUrl: './input-selector.component.html',
  styleUrls: ['./input-selector.component.scss'],
  imports: [
    IconComponent,
    NgForOf,
    SafePipe,
    NgIf,
    RouterLink
  ],
  standalone: true
})
export class InputSelectorComponent implements OnInit, AfterViewInit {
  constructor(public router: Router, private readonly activatedRoute: ActivatedRoute) {
  }

  @ViewChild('selector', {static: false})
  selector: ElementRef<HTMLDivElement>

  @Input()
  listItems: InputSelectDto[] = [];

  @Input()
  extra: string = '';

  @Input()
  disableClickOnOption: boolean = false;

  @Input()
  spacer: boolean = false;

  @Input()
  hideTitle: boolean = false;

  @Input()
  className: 'solid_v3' | 'solid_v2' | 'solid_v1' | 'outline';

  @Input()
  title: string = '';

  @Input()
  routingOnSelectOption: boolean = false;

  selectedOption: InputSelectDto[] = [];

  listOptions: InputSelectDto[] = [];

  isOpen: boolean = false;

  selectImg(option: string) {

  }

  selectOption(option: InputSelectDto) {
    if (this.disableClickOnOption) return

    if (this.hideTitle) {
      this.title = ''
    }

    if (this.routingOnSelectOption) {
      let parentRoute = '';

      this.activatedRoute.url.subscribe(path => {
        parentRoute = path[0].path
      }).unsubscribe();

      this.router.navigate([
        parentRoute, {outlets: {primary: [option.router]}}
      ])
    }

    this.listOptions = this.listItems.filter(el => el.text !== option.text)
    this.selectedOption = [option]
    this.isOpen = false
  }


  //dev
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    if (this.extra) {
      this.selectedOption = [
        {
          text: '',
          extra: {
            value: Number(this.extra),
            currency: ''
          }
        }
      ]
      this.listOptions = this.listItems;
      return;
    }

    if (this.hideTitle) {
      this.selectedOption = [{
        text: '',
      }];
      this.listOptions = this.listItems
      return;
    }

    this.selectedOption = [this.listItems[0]];
    //**
    // Duplicates will not be accepted. They will be discarded
    //**
    console.log(this.listItems)
    this.listOptions = this.listItems.filter(el => el.text !== this.selectedOption[0].text)
  }

  protected readonly phantomIcons = phantomIcons;
}
