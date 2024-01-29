import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {TransportDataState} from "@/app/auth/store/dto/TransportDataState";
import {TempUserDataDto} from "@/app/auth/dto/tempUserData.dto";
import {TransportDataService} from "@/app/auth/store/transportData.service";

export class SaveTempUserData {
  static readonly type = '[TransportData] save temp user data';

  constructor(public data: TempUserDataDto) {
  }
}

export class ClearTempUserData {
  static readonly type = '[TransportData] clear temp user data';

  constructor() {}
}

@State<TransportDataState>({
  name: 'transportData_store',
  defaults: {
    tempUserData: JSON.parse(sessionStorage.getItem('tempUserData')!) || null
  }
})
@Injectable()
export class TransportDataStore {
  constructor(
    private readonly transportDataService: TransportDataService,
  ) {}

  @Selector()
  static getTempUserData(state: TransportDataState): TempUserDataDto {
    return state.tempUserData
  }

  @Action(SaveTempUserData)
  async saveTempUserData(ctx: StateContext<TransportDataState>, payload: SaveTempUserData) {
    const state = ctx.getState();

    const tempUserData = {
      ...state.tempUserData,
      ...payload.data,
    };

    sessionStorage.setItem('tempUserData', JSON.stringify(tempUserData))

    ctx.setState({
      tempUserData: tempUserData
    })
  }

  @Action(ClearTempUserData)
  async clearTempUserData(ctx: StateContext<TransportDataState>) {
    sessionStorage.removeItem('tempUserData')

    ctx.setState({
      tempUserData: null as any
    })
  }


}
