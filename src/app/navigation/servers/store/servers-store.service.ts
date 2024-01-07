import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";
import {ServersService} from "@/app/navigation/servers/servers.service";
import { GetServersDto } from "@/app/navigation/servers/dto/get-servers.dto";
import {catchError, tap, throwError} from "rxjs";
import {patch} from "@ngxs/store/operators";
import {StorageManagerService} from "@/common/storage/storage-manager.service";

export class GetServers {
  static readonly type = '[Servers] Get Servers'
  constructor(public params: GetServersDto) {}
}

@State<ServerDto[]>({
  name: 'servers',
  defaults: JSON.parse(sessionStorage.getItem('servers')!) || []
})
@Injectable()
export class ServersStore {
  constructor(
    private readonly storageManager: StorageManagerService,
    private readonly serversService: ServersService) {}

  @Selector()
  static getServers(state: ServerDto[]): ServerDto[] {
    return state;
  }

  @Action(GetServers)
  getServers(ctx: StateContext<ServerDto[]>, { params }: { params: GetServersDto }) {
    return this.serversService.getServers(params).pipe(
      tap(servers => {
        ctx.setState(servers)
        this.storageManager.save({type: 'sessionStorage', key: 'servers', payload: servers})
      }),
      catchError(err => throwError(err))
    )
  }
}
