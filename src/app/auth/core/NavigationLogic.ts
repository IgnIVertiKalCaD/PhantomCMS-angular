import {
  ResetCurrentIndex,
  SceneChangeToTheNext,
  SceneChangeToThePrevious
} from "@/app/auth/registration/store/sceneСhanger.store";
import {Directive} from "@angular/core";
import {Store} from "@ngxs/store";
import {FormControl} from "@angular/forms";
import {SaveTempUserData} from "@/app/auth/store/transportData.store";
import {TempUserDataDto} from "@/app/auth/dto/tempUserData.dto";

@Directive()
export class NavigationLogic {
  constructor(private readonly navigationLogicStore: Store) {
  }

  next(permit: boolean): void {
    console.log(permit)

    this.navigationLogicStore.dispatch([
      new SceneChangeToTheNext(permit)
    ])
  }

  back(): void {
    this.navigationLogicStore.dispatch([
      new SceneChangeToThePrevious()
    ])
  }

  continue(fieldControl: FormControl, payload?: TempUserDataDto): void {
    if (fieldControl.valid) {

      if (payload) {
        this.navigationLogicStore.dispatch(
          new SaveTempUserData(payload)
        )
      }

      this.next(fieldControl.valid)
    }
  }

  //Disable position saving until agreement
  resetCurrentIndex() {
    this.navigationLogicStore.dispatch(new ResetCurrentIndex())
  }
}
