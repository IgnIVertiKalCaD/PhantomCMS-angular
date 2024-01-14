import {Component} from '@angular/core';
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {

  sortByServer: InputSelectDto = [
    {text: 'NagievCraft'},
    {text: 'ArturCraft'},
  ];

  sortByPeriod: InputSelectDto = [
    {text: '2 месяцв'},
    {text: '6 месяцев'},
    {text: '1 год'},
    {text: '5 лет'},
  ];

}
