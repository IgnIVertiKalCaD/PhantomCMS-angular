import {NgModule} from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle, SlicePipe} from "@angular/common";
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
import {MainComponent} from "@/app/navigation/profile/main/main.component";
import {TextFieldComponent} from "@/app/components/inputs/text-field/text-field.component";
import {ButtonComponent} from "@/app/components/button/button.component";
import {ServersComponent} from "@/app/navigation/servers/servers.component";
import {CatalogModule} from "@/app/navigation/catalog/catalog.module";
import {DonateCardModule} from "@/app/navigation/catalog/components/donate-card/donate-card.module";
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";
import {MatChipsModule} from "@angular/material/chips";
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import {SafePipe} from "@/pipes/safe.pipe";
import {MatButtonModule} from "@angular/material/button";
import {SkinViewer3dComponent} from "@/app/components/global/skin-viewer3d/skin-viewer3d.component";
import {ChipComponent} from "@/app/components/chip/chip.component";
import {ProgressComponent} from "@/app/components/progress/progress.component";
import {RouterComponent} from "@/app/components/global/nav/router/router.component";
import {OtpInputComponent} from "@/app/components/inputs/otp-input/otp-input.component";
import {NgxOtpInputModule} from "ngx-otp-input";
import { ChangeEmailComponent } from '@/app/navigation/profile/security/change-email/change-email.component';
import { ChangePasswordComponent } from './profile/security/change-password/change-password.component';
import { TwoFaComponent } from './profile/security/two-fa/two-fa.component';
import { ActiveSessionsComponent } from './profile/security/active-sessions/active-sessions.component';
import { RestockingComponent } from './profile/restocking/restocking.component';

@NgModule({
  declarations: [
    NewsComponent,
    CatalogComponent,
    DonateCardComponent,
    ProfileComponent,
    SecurityComponent,
    ServersComponent,
    MainComponent,
    NewsDetailsComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    TwoFaComponent,
    ActiveSessionsComponent,
    RestockingComponent,
  ],
  imports: [
    OtpInputComponent,
    RouterComponent,
    AsyncPipe,
    MatChipsModule,
    TextFieldComponent,
    ButtonComponent,
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
    ChipComponent,
    ProgressComponent,
    NgxOtpInputModule,
    NgStyle,
  ],
})
export class NavigationModule {
}
