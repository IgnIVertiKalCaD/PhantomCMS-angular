import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component";
import {NewsComponent} from "./news/news.component";
import {PreviewComponent} from "./preview/preview.component";

const routes: Routes = [
  { path: '', component: PreviewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
