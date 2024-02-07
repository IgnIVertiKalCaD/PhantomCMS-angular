import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";

@Component({
  selector: 'app-store-nav',
  templateUrl: './store-nav.component.html',
  styleUrls: ['./store-nav.component.scss']
})
export class StoreNavComponent {
  constructor(public router: Router) {
  }

  listItems: InputSelectDto[] = [
    {text: 'Блоки', router: 'blocks'},
    {text: 'Привилегии', router: 'privileges'},
  ]
}
