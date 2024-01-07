import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NewsComponent} from "@/app/navigation/news/news.component";
import {CatalogComponent} from "@/app/navigation/catalog/catalog.component";
import {DonateCardComponent} from "@/app/navigation/catalog/components/donate-card/donate-card.component";
import {ProfileComponent} from "@/app/navigation/profile/profile.component";
import {SecurityComponent} from "@/app/navigation/profile/security/security.component";
import {StatisticComponent} from "@/app/navigation/profile/statistic/statistic.component";
import {MainComponent} from "@/app/navigation/profile/main/main.component";
import {TextFieldComponent} from "@/app/components/text-field/text-field.component";
import {IButtonComponent} from "@/app/components/i-button/i-button.component";
import {ServersComponent} from "@/app/navigation/servers/servers.component";
import {CatalogModule} from "@/app/navigation/catalog/catalog.module";
import {DonateCardModule} from "@/app/navigation/catalog/components/donate-card/donate-card.module";
import {InputSelectorComponent} from "@/app/components/input-selector/input-selector.component";
import {MatChipsModule} from "@angular/material/chips";
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import {SafePipe} from "@/pipes/safe.pipe";
import {MatButtonModule} from "@angular/material/button";
import {SkinViewer3dComponent} from "@/app/components/global/skin-viewer3d/skin-viewer3d.component";

@NgModule({
  declarations: [
    NewsComponent,
    CatalogComponent,
    DonateCardComponent,
    ProfileComponent,
    SecurityComponent,
    StatisticComponent,
    ServersComponent,
    MainComponent,
    NewsDetailsComponent,
  ],
  imports: [
    AsyncPipe,
    MatChipsModule,
    TextFieldComponent,
    IButtonComponent,
    MatInputModule,
    FormsModule,
    NgForOf,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatCardModule,
    CatalogModule,
    DonateCardModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    InputSelectorComponent,
    NgIf,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgClass,
    DatePipe,
    SlicePipe,
    SafePipe,
    MatButtonModule,
    SkinViewer3dComponent,
  ],
})
export class NavigationModule {
}
