import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";
import {ServersService} from "@/app/navigation/servers/servers.service";

export class GetServers {
  static readonly type = '[Servers] Get Servers'
}

@State<ServerDto[]>({
  name: 'servers',
  defaults: [
    {
      name: '',
      icon: '',
      description: '',
      priority: 0,
      uniqueId: '',
      version: ''
    }
  ]
})
@Injectable()
export class ServersState {
  constructor(private readonly serversService: ServersService) {}

  @Selector()
  static getServers(state: ServerDto[]): ServerDto[] {
    return state;
  }

  @Action(GetServers)
  getServers(ctx: StateContext<ServerDto[]>) {
    return this.serversService.getServers().subscribe(res => ctx.setState(res))
  }
}
