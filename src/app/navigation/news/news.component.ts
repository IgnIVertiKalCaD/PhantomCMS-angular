import { Component } from '@angular/core';
import {authValidator} from "../../common/validaters/authValidator";

interface Server {
  name: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  servers: Server[] = [
    {
      name: 'NagievCraft',
    },
    {name: 'NagievCraft'},
  ];
  protected readonly authValidator = authValidator;
}
