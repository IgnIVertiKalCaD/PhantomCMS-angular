import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ServersDto} from "@/app/navigation/servers/dto/servers.dto";
import {ServersService} from "@/app/navigation/servers/servers.service";
import {GetServersDto} from "@/app/navigation/servers/dto/get-servers.dto";
import {catchError, tap, throwError} from "rxjs";
import {patch} from "@ngxs/store/operators";
import {StorageManagerService} from "@/common/storage/storage-manager.service";

export class GetServers {
  static readonly type = '[Servers] Get Servers'

  constructor(public params: GetServersDto) {
  }
}

export class GetSelectedServer {
  static readonly type = '[Servers] Get selected server'

  constructor(public uniqueId: string) {
  }
}

class ServersState {
  servers: ServersDto[]
  selectedServer: ServersDto | null
}

@State<ServersState>({
  name: 'servers_store',
  defaults: {
    selectedServer: null,
    servers: JSON.parse(sessionStorage.getItem('servers')!) || []
  }
})
@Injectable()
export class ServersStore {
  constructor(
    private readonly storageManager: StorageManagerService,
    private readonly serversService: ServersService) {
  }

  @Selector()
  static getServers(state: ServersState): ServersDto[] {
    return state.servers;
  }

  @Selector()
  static getSelectedServer(state: ServersState): ServersDto | null {
    return state.selectedServer;
  }

  @Action(GetServers)
  getServers(ctx: StateContext<ServersState>, payload: GetServers) {
    return this.serversService.getServers(payload.params).pipe(
      tap(servers => {
        ctx.setState(
          patch({
             servers: servers
          }))
        this.storageManager.save({type: 'sessionStorage', key: 'servers', payload: servers})
      }),
      catchError(err => throwError(err))
    )
  }

  @Action(GetSelectedServer)
  getSelectedNews(ctx: StateContext<ServersState>, payload: GetSelectedServer) {
    const existServer = ctx.getState().servers?.find(el => el.uniqueId === payload.uniqueId)

    if (existServer) {
      return ctx.setState(patch({selectedServer: existServer}))
    } else {
      console.log("send backend servers")

      return this.serversService.getServerById(payload.uniqueId).pipe(
        tap((res): void => {
          ctx.setState(patch({
            selectedServer: res
          }))
        }),

        catchError(err => {
          // ctx.patchState()
          return throwError(err);
        })
      )
    }
  }

  /*
  Реализовать метом замены, а не удаления из памяти
  */

  // @Action(ClearSelectedNews)
  // removeSelectedNews(ctx: StateContext<NewsState>): void {
  //   ctx.setState(patch({
  //     selectedNews: null
  //   }))
  // }


}
