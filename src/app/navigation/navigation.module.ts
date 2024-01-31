import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, NgStyle, SlicePipe} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NewsComponent} from "@/app/navigation/news/news.component";
import {CatalogComponent} from "@/app/navigation/catalog/catalog.component";
import {ProfileComponent} from "@/app/navigation/profile/profile.component";
import {SecurityComponent} from "@/app/navigation/profile/security/security.component";
import {MainComponent} from "@/app/navigation/profile/main/main.component";
import {TextFieldComponent} from "@/app/components/inputs/text-field/text-field.component";
import {ButtonComponent} from "@/app/components/button/button.component";
import {ServersComponent} from "@/app/navigation/servers/servers.component";
import {CatalogModule} from "@/app/navigation/catalog/catalog.module";
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import {SafePipe} from "@/pipes/safe.pipe";
import {SkinViewer3dComponent} from "@/app/components/global/skin-viewer3d/skin-viewer3d.component";
import {ChipComponent} from "@/app/components/chip/chip.component";
import {ProgressComponent} from "@/app/components/progress/progress.component";
import {RouterComponent} from "@/app/components/global/nav/router/router.component";
import {OtpInputComponent} from "@/app/components/inputs/otp-input/otp-input.component";
import { ChangeEmailComponent } from '@/app/navigation/profile/security/change-email/change-email.component';
import { ChangePasswordComponent } from './profile/security/change-password/change-password.component';
import { TwoFaComponent } from './profile/security/two-fa/two-fa.component';
import { ActiveSessionsComponent } from './profile/security/active-sessions/active-sessions.component';
import { RestockingComponent } from './profile/restocking/restocking.component';
import { EnterTheGameComponent } from './preview/enter-the-game/enter-the-game.component';
import {ModalComponent} from "@/app/components/global/modal/modal.component";
import { NewsListComponent } from './news/news-list/news-list.component';
import {IconComponent} from "@/app/components/icon/icon.component";
import { CardUserCommentComponent } from './news/components/card-user-comment/card-user-comment.component';
import {PreviewComponent} from "@/app/navigation/preview/preview.component";

@NgModule({
    declarations: [
        NewsComponent,
        CatalogComponent,
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
        PreviewComponent,
        NewsListComponent,
        CardUserCommentComponent,
    ],
    imports: [
        OtpInputComponent,
        ModalComponent,
        RouterComponent,
        AsyncPipe,
        TextFieldComponent,
        EnterTheGameComponent,
        ButtonComponent,
        FormsModule,
        NgForOf,
        CatalogModule,
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
        SkinViewer3dComponent,
        ChipComponent,
        ProgressComponent,
        NgStyle,
        IconComponent,
    ],
})
export class NavigationModule {
}
