import { Component } from '@angular/core';
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-store-privileges',
  templateUrl: './store-privileges.component.html',
  styleUrls: ['./store-privileges.component.scss']
})
export class StorePrivilegesComponent {

  listServers: InputSelectDto[] = [
    {
      text: 'Hitech',
    },
    {
      text: 'Taumcraft',
    },
    {
      text: 'Taumcraft',
    },
    {
      text: 'Taumcraft',
    },
    {
      text: 'Taumcraft',
    },
    {
      text: 'Taumcraft',
    }
  ]

  private sortByNav: InputSelectDto[] = [
    {
      text: 'Цена (от дешёвых)',
    },
    {
      text: 'Цена (от дорогих)',
    }
  ];

  public listNav: Record<string, InputSelectDto[]>[] = [
    {'sortBy': this.sortByNav}
  ];
  protected readonly phantomIcons = phantomIcons;
}
