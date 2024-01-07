import {Component} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {

  sortByServer: { name: string }[] = [
    {name: 'NagievCraft'},
    {name: 'ArturCraft'},
  ];

  sortByPeriod: { name: string }[] = [
    {name: '2 месяцв'},
    {name: '6 месяцев'},
    {name: '1 год'},
    {name: '5 лет'},
  ];

}
