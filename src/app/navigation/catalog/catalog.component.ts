import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {navigateAnimation} from "@/app/navigation/navigation.animation";
import {InputSelectDto} from "@/app/components/inputs/input-selector/dto/input-select.dto";
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    navigateAnimation
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CatalogComponent implements OnInit {
  constructor(
    private readonly contexts: ChildrenOutletContexts,
  ) {}

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  private listNav: Record<string, InputSelectDto[]>[] = [];

  private loadDynamicComponent() {
    this.container.clear();

    this.listNav.forEach((listItems, index: number) => {
      let component = this.container.createComponent(InputSelectorComponent);

      const title = Object.keys(listItems)[0]

      // console.log(listItems)

      component.instance.className = 'solid_v2';
      component.instance.listItems = listItems[title]
      component.instance.title = title
    })
  }


  protected reCreateRightNav() {
    this.loadDynamicComponent()
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  createRightNav(event: any) {
    this.listNav = event.listNav

    this.loadDynamicComponent()
  }

  ngOnInit() {
  }

}
