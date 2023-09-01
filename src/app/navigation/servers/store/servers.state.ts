import {State, Action, StateContext, Selector} from '@ngxs/store';
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";
import {tap} from "rxjs"; // Ваш сервис для получения данных с API

export interface ServersModel {
  description: any;
}

export class FetchDescription {
  static readonly type = '[Servers] Fetch description';
}

@State<ServersModel>({
  name: 'servers',
  defaults: {
    description: null
  }
})
@Injectable()
export class ServersState {
  constructor(private readonly serversService: ServersService) {
  }

  @Selector()
  static getServersName(state: ServersModel): string {
    return state.description
  }

  @Action(FetchDescription)
  fetchDescription(ctx: StateContext<ServersModel>) {
    return this.serversService.getProducts()
      .pipe(tap((result: { description: string }) => {
        ctx.patchState({description: result.description})
      }))
  }
}
