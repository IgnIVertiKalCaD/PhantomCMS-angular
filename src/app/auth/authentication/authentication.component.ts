import {Component, inject, OnDestroy, OnInit, ViewEncapsulation,} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AuthStore,} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent  implements OnInit, OnDestroy {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}

  protected authList = inject(AuthScenesService).getAuthScenes();

  resetAccount_link: string = '/reset'
  registration_link: string = '/registration'

  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getStatusLoading)
  isLoading$: Observable<boolean>;

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
    this.currIndex$.subscribe(i => {
      if (i === this.countSteps) {
        this.isTheEnd = true
      }

      this.scene = this.authList[i]
      this.IdComponent = i
    })

  }

  ngOnDestroy() {
    this.authLogic.resetCurrentIndex()
  }
  protected readonly phantomIcons = phantomIcons;
}
