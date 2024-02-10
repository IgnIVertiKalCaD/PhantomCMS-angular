import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {Select, Store} from "@ngxs/store";
import {SceneChanger} from "@/app/auth/registration/store/sceneСhanger.store";
import {last, Observable} from "rxjs";
import {AuthLogicService} from "@/app/auth/core/auth-logic.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit, OnDestroy {
  constructor(
    protected readonly authLogic: AuthLogicService,
  ) {}

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
    // let i = 5;
    //
    // this.IdComponent = i
    // this.scene = this.regList[i]
    // this.isTheEnd = true;
    //

    this.currIndex$.subscribe(i => {
      if (i === this.countSteps) {
        this.isTheEnd = true;
        return;
      }

      this.scene = this.regList[i]
      this.IdComponent = i
    })
  }

  ngOnDestroy() {
    this.authLogic.resetCurrentIndex()
  }

  protected readonly phantomIcons = phantomIcons;
  protected readonly last = last;
}
