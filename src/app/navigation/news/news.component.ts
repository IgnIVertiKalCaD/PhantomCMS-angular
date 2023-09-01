import { Component } from '@angular/core';
import {authValidator} from "../../common/validaters/authValidator";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  servers: { name: string }[] = [
    {
      name: 'NagievCraft',
    },
    {
      name: 'NagievCraft'
    },
  ];
  protected readonly authValidator = authValidator;
}
