import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PreviewComponent} from "@/app/preview/preview.component";
import {NavigationComponent} from "@/app/navigation/navigation.component";
import {NewsComponent} from "@/app/navigation/news/news.component";
import {ServersComponent} from "@/app/navigation/servers/servers.component";
import {ProfileComponent} from "@/app/navigation/profile/profile.component";
import {MainComponent} from "@/app/navigation/profile/main/main.component";
import {SecurityComponent} from "@/app/navigation/profile/security/security.component";
import {StatisticComponent} from "@/app/navigation/profile/statistic/statistic.component";
import {CatalogComponent} from "@/app/navigation/catalog/catalog.component";
import {AuthComponent} from "@/app/auth/auth.component";
import {AuthenticationComponent} from "@/app/auth/authentication/authentication.component";
import {RegistrationComponent} from "@/app/auth/registration/registration.component";
import {RecoveryAccountComponent} from "@/app/auth/recovery-account/recovery-account.component";
import {CodeComponent} from "@/app/auth/code/code.component";
import {Page404Component} from "@/app/errors/page404/page404.component";
import {authGuard} from "@/app/guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: PreviewComponent
  },

  {
    path: '',
    component: NavigationComponent,
    canActivate: [authGuard],
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
