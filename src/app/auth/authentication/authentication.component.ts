import {Component, inject, OnInit, ViewEncapsulation,} from '@angular/core';
import {authValidator} from "@/common/validaters/authValidator";
import {Select} from "@ngxs/store";
import {AuthStore,} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent extends NavigationLogic implements OnInit {
  protected readonly authValidator = authValidator;
  protected authList = inject(AuthScenesService).getAuthScenes();

  resetAccount_link: string = '/reset'
  registration_link: string = '/registration'


  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getStatusLoading)
  isLoading$: Observable<boolean>;

  isRememberMe: boolean = false;

  rememberMe(event: boolean) {
    this.isRememberMe = event
  }

  // usernameOrEmail: this.login.value as string,
  // password: this.password.value as string,

  // authentication(): void {
  //   if (this.isEnabled()) {
  //     this.store.dispatch([
  //       new Login({
  //         usernameOrEmail: 'IgnI',
  //         password: 'Qwerty123',
  //         rememberMe: this.isRememberMe
  //       }),
  //     ])
  //   }
  // }

  countSteps: number = this.authList.length;
  IdComponent: number = 0;

  //rofl var. i like it
  isTheEnd: boolean = false


  scene: {
    component: any,
    inputs: {
      title: string
    }
  };

  @Select(SceneChanger.getCurrentIndex)
  currIndex$: Observable<number>;

  ngOnInit() {
    let i = 0;

    this.IdComponent = i
    this.scene = this.authList[i]



    // setInterval(() => {
    //   i++
    //   this.scene = this.regList[i]
    // }, 2000)


    // this.currIndex$.subscribe(i => {
    //   if (i === this.countSteps) {
    //     this.isTheEnd = true
    //   }
    //
    //   this.scene = this.authList[i]
    //   this.IdComponent = i
    // })
  }

  protected readonly phantomIcons = phantomIcons;
}
