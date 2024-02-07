import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PreviewComponent} from "@/app/navigation/preview/preview.component";
import {NavigationComponent} from "@/app/navigation/navigation.component";
import {NewsComponent} from "@/app/navigation/news/news.component";
import {ServersComponent} from "@/app/navigation/servers/servers.component";
import {ProfileComponent} from "@/app/navigation/profile/profile.component";
import {MainComponent} from "@/app/navigation/profile/main/main.component";
import {SecurityComponent} from "@/app/navigation/profile/security/security.component";
import {CatalogComponent} from "@/app/navigation/catalog/catalog.component";
import {AuthComponent} from "@/app/auth/auth.component";
import {AuthenticationComponent} from "@/app/auth/authentication/authentication.component";
import {RegistrationComponent} from "@/app/auth/registration/registration.component";
import {Page404Component} from "@/app/errors/page404/page404.component";
import {authGuard} from "@/guards/auth.guard";
import {NewsDetailsComponent} from "@/app/navigation/news/news-details/news-details.component";
import {RestockingComponent} from "@/app/navigation/profile/restocking/restocking.component";
import {StoreItemsComponent} from "@/app/navigation/catalog/store-items/store-items.component";
import {StorePrivilegesComponent} from "@/app/navigation/catalog/store-privileges/store-privileges.component";
import {StoreNavComponent} from "@/app/navigation/catalog/components/store-nav/store-nav.component";


// type RoutePaths<T> = T extends { path: infer P, children?: infer C }
//   ? P extends string
//     ? C extends unknown[]
//       ? `${P & string}/${RoutePaths<C[number]>}`
//       : P & string
//     : never
//   : never;
//
// type RoutePathsArray<T extends Readonly<Array<{ path: string }>>> = RoutePaths<T[number]>;

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        component: PreviewComponent,
        data: { animation: 'PreviewPage' },
      },
      {
        path: 'news',
        component: NewsComponent,
        data: {animation: 'NewsPage'},
        children: [
          {
            path: ':id',
            component: NewsDetailsComponent,
            data: { animation: 'NewsDetails' }
          },
        ]
      },
      {
        path: 'servers',
        component: ServersComponent,
        data: { animation: 'ServersPage' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { animation: 'ProfilePage' },
        children: [
          {
            path: '',
            component: MainComponent,
            data: { animation: 'SubProfile1' }

          },
          {
            path: 'security',
            component: SecurityComponent,
            data: { animation: 'SubProfile2' }
          },
          {
            path: 'restocking',
            component: RestockingComponent,
            data: { animation: 'SubProfile3' }
          },
        ]
      },
      {
        path: 'store',
        component: CatalogComponent,
        data: { animation: 'StorePage' },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'blocks',
            data: { animation: 'subStorePrivileges' },
          },

          {
            path: 'blocks',
            component: StoreItemsComponent,
            data: { animation: 'subStoreBlocks' },
          },
          {
            path: 'privileges',
            component: StorePrivilegesComponent,
            data: { animation: 'subStorePrivileges' },
          },
        ]
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
    ]
  },

  { path: '**', component: Page404Component },  // Wildcard route for a 404 page
];

// export type RoutesType = RoutePathsArray<typeof routes>

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "disabled", enableTracing: false}) ],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
