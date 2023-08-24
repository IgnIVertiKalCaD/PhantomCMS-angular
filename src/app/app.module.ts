import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {AppService} from "./app.service";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {PreviewModule} from "./preview/preview.module";
import { IButtonComponent } from './components/i-button/i-button.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DockComponent } from './components/dock/dock.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DockComponent,
  ],
  imports: [
    IButtonComponent,
    HttpClientModule,
    PreviewModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
