import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AuthScenesService} from "@/app/auth/services/auth-scenes.service";
import {SceneChangerStateDto} from "@/app/auth/registration/dto/SceneChanger.state.dto";

export class SceneChangeToTheNext {
  static readonly type = '[ChangeScene] Moving on to the next scene';

  constructor(public permit: boolean) {
  }
}

export class SceneChangeToThePrevious {
  static readonly type = '[ChangeScene] Moving on to the previous scene';

  constructor() {
  }
}

@State<SceneChangerStateDto>({
  name: 'sceneChanger',
  defaults: {
    currentIndex: Number(sessionStorage.getItem('currentIndex')!) || 0

}
})
@Injectable()
export class SceneChanger {
  constructor(private readonly authScenesService: AuthScenesService) {
  }

  @Selector()
  static getCurrentIndex(state: SceneChangerStateDto): number {
    return state.currentIndex
  }

  @Action(SceneChangeToTheNext)
  displayNextScene(ctx: StateContext<SceneChangerStateDto>, payload: SceneChangeToTheNext) {
    let curStoreIndex = ctx.getState().currentIndex

    console.log(payload.permit)

    if (payload.permit) {
      // sessionStorage.setItem('currentIndex', String(curStoreIndex + 1))

      ctx.patchState({currentIndex: curStoreIndex + 1})
    }
  }


  @Action(SceneChangeToThePrevious)
  displayPreviousScene(ctx: StateContext<SceneChangerStateDto>,) {
    let curStoreIndex = ctx.getState().currentIndex

    // sessionStorage.setItem('currentIndex', String(curStoreIndex - 1))

    ctx.patchState({currentIndex: curStoreIndex - 1})
  }

}
