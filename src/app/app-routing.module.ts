import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from "./app.component";
import {PreviewComponent} from "./preview/preview.component";

import {NavigationComponent} from "./navigation/navigation.component";
import {NewsComponent} from "./navigation/news/news.component";
import {ServersComponent} from "./navigation/servers/servers.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthenticationComponent} from "./auth/authentification/authentication.component";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {RecoveryAccountComponent} from "./auth/recovery-account/recovery-account.component";
import {CodeComponent} from "./auth/code/code.component";
import {ProfileComponent} from "./navigation/profile/profile.component";
import {CatalogComponent} from "./navigation/catalog/catalog.component";
import {StatisticComponent} from "./navigation/profile/statistic/statistic.component";
import {SecurityComponent} from "./navigation/profile/security/security.component";
import {MainComponent} from "./navigation/profile/main/main.component";
import {Page404Component} from "./errors/page404/page404.component";


const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },

  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'servers',
        component: ServersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: '',
            component: MainComponent,
          },
          {
            path: 'security',
            component: SecurityComponent,
          },
          {
            path: 'statistic',
            component: StatisticComponent,
          },
        ]
      },
      {
        path: 'store',
        component: CatalogComponent,
      }
    ]
  },

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        component: AuthenticationComponent,
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
      {
        path: 'reset',
        component: RecoveryAccountComponent,
      },
      {
        path: 'code',
        component: CodeComponent,
      },
    ]
  },

  { path: '**', component: Page404Component },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
