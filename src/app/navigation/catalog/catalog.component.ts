import {Component} from '@angular/core';

interface Server {
  name: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  servers: Server[] = [
    {
      name: 'NagievCraft'
    },
    {
      name: 'NagievCraft'
    },
  ];
}
