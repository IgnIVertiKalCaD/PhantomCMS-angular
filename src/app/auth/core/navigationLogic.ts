import {
  SceneChangeToTheNext,
  SceneChangeToThePrevious
} from "@/app/auth/registration/store/sceneСhanger.store";
import {Directive} from "@angular/core";
import {Store} from "@ngxs/store";

@Directive()
export class NavigationLogic  {
  constructor(private readonly navigationLogicStore: Store) {}

  next(permit: boolean) {

    this.navigationLogicStore.dispatch([
      new SceneChangeToTheNext(permit)
    ])
  }

  back() {
    this.navigationLogicStore.dispatch([
      new SceneChangeToThePrevious()
    ])
  }
}
