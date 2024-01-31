import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {Select, Store} from "@ngxs/store";
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";
import {Observable} from "rxjs";
import {NavigationLogic} from "@/app/auth/core/NavigationLogic";
import {AutoInsertion} from "@/app/auth/core/AutoInsertion";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent extends NavigationLogic implements OnInit, OnDestroy {
  auth_link: string = '/auth'

  protected regList = inject(AuthScenesService).getRegistrationScenes();

  countSteps: number = this.regList.length - 1;
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
    // let i = 0;
    //
    // this.IdComponent = i
    // this.scene = this.regList[i]
    //

    this.currIndex$.subscribe(i => {
      if (i === this.countSteps) {
        this.isTheEnd = true
      }

      this.scene = this.regList[i]
      this.IdComponent = i
    })
  }

  ngOnDestroy() {
    this.resetCurrentIndex()
  }

  protected readonly phantomIcons = phantomIcons;
}
