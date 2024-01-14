import {LOCALE_ID, NgModule} from "@angular/core";
import {NgxOtpInputModule} from "ngx-otp-input";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {BrowserModule, provideClientHydration} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {PreviewComponent} from "@/app/navigation/preview/preview.component";
import {AppComponent} from "@/app/app.component";
import {AuthComponent} from "@/app/auth/auth.component";
import {DockComponent} from "@/app/components/global/dock/dock.component";
import {AuthenticationComponent} from "@/app/auth/authentication/authentication.component";
import {RegistrationComponent} from "@/app/auth/registration/registration.component";
import {RecoveryAccountComponent} from "@/app/auth/recovery-account/recovery-account.component";
import {CodeComponent} from "@/app/auth/code/code.component";
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
import {CheckboxComponent} from './components/auth/checkbox/checkbox.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {NewsStore} from "@/app/navigation/news/store/news.store";
import { SafePipe } from '@/pipes/safe.pipe';
import {AssetsStore} from "@/store/assets-manager/assets-store";

import {ApiInterceptor} from "@/common/interceptors/api.interceptor";
import {AuthInterceptor} from "@/common/interceptors/auth.interceptor";
import { ImgFillDirective } from '@/directives/imgfill.directive';
import { SkinViewer3dComponent } from './components/global/skin-viewer3d/skin-viewer3d.component';
import { RouterComponent } from './components/global/nav/router/router.component';
import {InputSelectorComponent} from "@/app/components/inputs/input-selector/input-selector.component";
import { ProgressComponent } from './components/progress/progress.component';
import { IconComponent } from './components/icon/icon.component';
import { ModalComponent } from './components/global/modal/modal.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    PreviewComponent,
    AppComponent,
    AuthComponent,
    DockComponent,
    AuthenticationComponent,
    RegistrationComponent,
    RecoveryAccountComponent,
    CodeComponent,
    NavigationComponent,
    Page404Component,
    IconComponent,
    ModalComponent,
  ],
  imports: [
    ProgressComponent,
    RouterComponent,
    SkinViewer3dComponent,
    ImgFillDirective,
    SafePipe,
    CheckboxComponent,
    OverlayComponent,
    ButtonComponent,
    NavigationModule,
    NgxOtpInputModule,
    LogoComponent,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    MatInputModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ServersStore, AuthStore, RegistrationStore, NewsStore, AssetsStore], {}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
    InputSelectorComponent,
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
