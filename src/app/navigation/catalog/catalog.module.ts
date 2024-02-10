import {NgModule} from '@angular/core';
import { StoreItemsComponent } from './store-items/store-items.component';
import { StorePrivilegesComponent } from './store-privileges/store-privileges.component';
import {TextFieldComponent} from "@/app/components/inputs/text-field/text-field.component";
import { TitleHeaderComponent } from './components/title-header/title-header.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "@/app/components/button/button.component";
import {SafePipe} from "@/pipes/safe.pipe";
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";
import { StoreNavComponent } from './components/store-nav/store-nav.component';
import {RouterOutlet} from "@angular/router";
import { PrivilegesCardComponent } from './components/privileges-card/privileges-card.component';
import {ChipComponent} from "@/app/components/chip/chip.component";

@NgModule({
  declarations: [
    StoreItemsComponent,
    StorePrivilegesComponent,
    TitleHeaderComponent,
    ItemCardComponent,
    StoreNavComponent,
    PrivilegesCardComponent
  ],
  imports: [
    TextFieldComponent,
    NgOptimizedImage,
    ButtonComponent,
    SafePipe,
    NgForOf,
    InputSelectorComponent,
    RouterOutlet,
    ChipComponent
  ],
  exports: [
    StoreNavComponent
  ]
})
export class CatalogModule {
}
