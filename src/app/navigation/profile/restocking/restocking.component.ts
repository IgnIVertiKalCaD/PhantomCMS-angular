import { Component } from '@angular/core';
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";

@Component({
  selector: 'app-restocking',
  templateUrl: './restocking.component.html',
  styleUrls: ['./restocking.component.scss']
})
export class RestockingComponent {

  coins: number[] = [100, 250, 500, 1000, 2000, 5000, 7500, 10000]

  active: any;

  bankList: InputSelectDto[] = [
    {text: 'Qiwi', extra: {value: 233, currency: 'RUB'}, icon: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcjdowner%2Fcryptocurrency-flat%2F1024%2FQiwi-icon.png&f=1&nofb=1&ipt=00e7445420f20713c22d25d16c018da9811dc3683d6fbed2e024c22cdd0a2289&ipo=images'},
    {text: 'QiwiSSSS', extra: {value: 233, currency: 'RUB'}, icon: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcjdowner%2Fcryptocurrency-flat%2F1024%2FQiwi-icon.png&f=1&nofb=1&ipt=00e7445420f20713c22d25d16c018da9811dc3683d6fbed2e024c22cdd0a2289&ipo=images'}
  ]

}
