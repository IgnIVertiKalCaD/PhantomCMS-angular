import {forwardRef, LOCALE_ID, NgModule} from "@angular/core";
import {NgxOtpInputModule} from "ngx-otp-input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {PreviewComponent} from "@/app/navigation/preview/preview.component";
import {AppComponent} from "@/app/app.component";
import {AuthComponent} from "@/app/auth/auth.component";
import {DockComponent} from "@/app/components/global/dock/dock.component";
import {AuthenticationComponent} from "@/app/auth/authentication/authentication.component";
import {RegistrationComponent} from "@/app/auth/registration/registration.component";
import {NavigationComponent} from "@/app/navigation/navigation.component";
import {Page404Component} from "@/app/errors/page404/page404.component";
import {ButtonComponent} from "@/app/components/button/button.component";
import {NavigationModule} from "@/app/navigation/navigation.module";
import {LogoComponent} from "@/app/components/global/dock/logo/logo.component";
import {AppRoutingModule} from "@/app/app-routing.module";
import {ServersStore} from "@/app/navigation/servers/store/servers-store.service";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {RegistrationStore} from "@/app/auth/registration/store/registration.store";
import {OverlayComponent} from './components/overlay/overlay.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {NewsStore} from "@/app/navigation/news/store/news.store";
import {SafePipe} from '@/pipes/safe.pipe';
import {AssetsStore} from "@/store/assets-manager/assets-store";

import {ApiInterceptor} from "@/common/interceptors/api.interceptor";
import {AuthInterceptor} from "@/common/interceptors/auth.interceptor";
import {ImgFillDirective} from '@/directives/imgfill.directive';
import {SkinViewer3dComponent} from './components/global/skin-viewer3d/skin-viewer3d.component';
import {RouterComponent} from './components/global/nav/router/router.component';
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";
import {ProgressComponent} from './components/progress/progress.component';
import {IconComponent} from './components/icon/icon.component';
import {ModalComponent} from './components/global/modal/modal.component';
import {TextFieldComponent} from "@/app/components/inputs/text-field/text-field.component";
import {MailVerificationComponent} from './auth/registration/mail-verification/mail-verification.component';
import {NicknameChoiceComponent} from './auth/registration/nickname-choice/nickname-choice.component';
import {AccountProtectionComponent} from './auth/registration/account-protection/account-protection.component';
import {EnterReferralCodeComponent} from './auth/registration/enter-referral-code/enter-referral-code.component';
import {GoodGameComponent} from './auth/registration/good-game/good-game.component';
import {RegisterComponent} from './auth/registration/register/register.component';
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";
import {OtpInputComponent} from "@/app/components/inputs/otp-input/otp-input.component";
import {EnterEmailComponent} from './auth/authentication/enter-email/enter-email.component';
import {EnterPasswordComponent} from './auth/authentication/enter-password/enter-password.component';
import {EnterCodeComponent} from './auth/authentication/enter-code/enter-code.component';
import {InputCheckboxComponent} from './components/inputs/input-checkbox/input-checkbox.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    PreviewComponent,
    AppComponent,
    AuthComponent,
    DockComponent,
    AuthenticationComponent,
    RegistrationComponent,
    NavigationComponent,
    Page404Component,
    MailVerificationComponent,
    NicknameChoiceComponent,
    AccountProtectionComponent,
    EnterReferralCodeComponent,
    GoodGameComponent,
    RegisterComponent,
    EnterEmailComponent,
    EnterPasswordComponent,
    EnterCodeComponent,
  ],
  imports: [
    InputCheckboxComponent,
    ProgressComponent,
    RouterComponent,
    SkinViewer3dComponent,
    ImgFillDirective,
    SafePipe,
    IconComponent,
    OverlayComponent,
    ButtonComponent,
    NavigationModule,
    NgxOtpInputModule,
    LogoComponent,
    HttpClientModule,
    BrowserModule,
    ModalComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    NgxsModule.forRoot([ServersStore, AuthStore, RegistrationStore, NewsStore, AssetsStore, SceneChanger], {}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
    InputSelectorComponent,
    TextFieldComponent,
    OtpInputComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComponent),
      multi: true,
    },
    {
      provide: LOCALE_ID, useValue: 'ru'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
    exports: [
        SkinViewer3dComponent,
        RouterComponent,
        ModalComponent,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
