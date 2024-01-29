import {Component, ViewEncapsulation} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/animation";
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    navigateAnimation
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CatalogComponent {
  constructor(private readonly contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  // sortByServer: InputSelectDto = [
  //   {text: 'NagievCraft'},
  //   {text: 'ArturCraft'},
  // ];
  //
  // sortByPeriod: InputSelectDto = [
  //   {text: '2 месяцв'},
  //   {text: '6 месяцев'},
  //   {text: '1 год'},
  //   {text: '5 лет'},
  // ];

}
