import {NgModule} from '@angular/core';
import {NewsComponent} from "./news/news.component";
import {ServersComponent} from './servers/servers.component';
import {CatalogComponent} from './catalog/catalog.component';
import {ProfileComponent} from './profile/profile.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CatalogModule} from "./catalog/catalog.module";
import {DonateCardComponent} from "./catalog/components/donate-card/donate-card.component";
import {DonateCardModule} from "./catalog/components/donate-card/donate-card.module";
import {IButtonComponent} from "../components/i-button/i-button.component";
import {InputSelectorComponent} from "../components/input-selector/input-selector.component";
import {TextFieldComponent} from "../components/text-field/text-field.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import { SecurityComponent } from './profile/security/security.component';
import { StatisticComponent } from './profile/statistic/statistic.component';
import { MainComponent } from './profile/main/main.component';


@NgModule({
  declarations: [
    NewsComponent,
    CatalogComponent,
    DonateCardComponent,
    ProfileComponent,
    SecurityComponent,
    StatisticComponent,
    MainComponent
  ],
  imports: [
    TextFieldComponent,
    IButtonComponent,
    MatInputModule,
    FormsModule,
    NgForOf,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    ServersComponent,
    CatalogModule,
    DonateCardModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    InputSelectorComponent,
    NgIf,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
})
export class NavigationModule {
}
