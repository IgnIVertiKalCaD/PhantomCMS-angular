import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from '@ngxs/store';

import {AppComponent} from './app.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {LogoComponent} from './components/dock/logo/logo.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AuthComponent} from './auth/auth.component';
import {AuthenticationComponent} from './auth/authentification/authentication.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {DockComponent} from "./components/dock/dock.component";
import {PreviewComponent} from "./preview/preview.component";
import {IButtonComponent} from "./components/i-button/i-button.component";
import {RegistrationComponent} from './auth/registration/registration.component';
import {RecoveryAccountComponent} from './auth/recovery-account/recovery-account.component';
import {NgxOtpInputModule} from "ngx-otp-input";
import {CodeComponent} from './auth/code/code.component';
import {NavigationModule} from "./navigation/navigation.module";
import {Page404Component} from './errors/page404/page404.component';
import {ServersState} from "./navigation/servers/store/servers.state";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";


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
  ],
  imports: [
    IButtonComponent,
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
    NgxsModule.forRoot([ServersState], {}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [AppService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
