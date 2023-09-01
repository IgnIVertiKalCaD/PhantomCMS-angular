import {NgModule} from "@angular/core";
import {NgxOtpInputModule} from "ngx-otp-input";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {PreviewComponent} from "@/app/preview/preview.component";
import {AppComponent} from "@/app/app.component";
import {AuthComponent} from "@/app/auth/auth.component";
import {DockComponent} from "@/app/components/dock/dock.component";
import {AuthenticationComponent} from "@/app/auth/authentification/authentication.component";
import {RegistrationComponent} from "@/app/auth/registration/registration.component";
import {RecoveryAccountComponent} from "@/app/auth/recovery-account/recovery-account.component";
import {CodeComponent} from "@/app/auth/code/code.component";
import {NavigationComponent} from "@/app/navigation/navigation.component";
import {Page404Component} from "@/app/errors/page404/page404.component";
import {IButtonComponent} from "@/app/components/i-button/i-button.component";
import {NavigationModule} from "@/app/navigation/navigation.module";
import {LogoComponent} from "@/app/components/dock/logo/logo.component";
import {AppRoutingModule} from "@/app/app-routing.module";
import {ServersState} from "@/app/navigation/servers/store/servers.state";


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
  bootstrap: [AppComponent]
})
export class AppModule {
}
