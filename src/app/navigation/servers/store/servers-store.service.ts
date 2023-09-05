import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";
import {ServersService} from "@/app/navigation/servers/servers.service";
import { GetServersDto } from "@/app/navigation/servers/dto/get-servers.dto";

export class GetServers {
  static readonly type = '[Servers] Get Servers'
  constructor(public params: GetServersDto) {}
}

@State<ServerDto[]>({
  name: 'servers',
  defaults: []
})
@Injectable()
export class ServersStore {
  constructor(private readonly serversService: ServersService) {}

  @Selector()
  static getServers(state: ServerDto[]): ServerDto[] {
    return state;
  }

  @Action(GetServers)
  getServers(ctx: StateContext<ServerDto[]>, { params }: { params: GetServersDto }) {
    return this.serversService.getServers(params).subscribe(res => ctx.setState(res))
  }
}
