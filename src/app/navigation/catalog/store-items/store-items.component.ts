import {Component} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.scss']
})
export class StoreItemsComponent {

  private serversNav: InputSelectDto[] = [
    {
      text: 'Hi-tech',
    },
    {
      text: 'Vanila',
    }
  ];

  private sortByNav: InputSelectDto[] = [
    {
      text: 'Цена (от дешёвых)',
    },
    {
      text: 'Цена (от дорогих)',
    }
  ];

  public listNav: Record<string, InputSelectDto[]>[] = [
    {'servers': this.serversNav},
    {'sortBy': this.sortByNav}
  ];

  // [name: this.serversNav, name: this.sortNav]

  protected readonly phantomIcons = phantomIcons;
}
