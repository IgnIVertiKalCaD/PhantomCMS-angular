import {
  SceneChanger,
  SceneChangeToTheNext,
  SceneChangeToThePrevious
} from "@/app/auth/registration/store/sceneСhanger.store";
import {Directive} from "@angular/core";
import {Store} from "@ngxs/store";

@Directive()
export class NavigationLogic  {
  constructor(private readonly store: Store) {}

  next(permit: boolean) {

    this.store.dispatch([
      new SceneChangeToTheNext(permit)
    ])
  }

  back() {
    this.store.dispatch([
      new SceneChangeToThePrevious()
    ])
  }
}
