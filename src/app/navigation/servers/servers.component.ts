import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GetServers, ServersStore} from "@/app/navigation/servers/store/servers-store.service";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";
import { GetServersDto } from "./dto/get-servers.dto";
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServersComponent implements OnInit{
  constructor(private readonly store: Store) {}

  @Select(ServersStore.getServers)
  readonly servers$: Observable<ServerDto[]>;

  params: GetServersDto = {
    sortBy: 'name:DESC',
    page: 1,
    limit: 10
  }

  defaultImageServer: string = 'assets/images/defaultServer.png'
  ngOnInit() {
    this.store.dispatch(new GetServers(this.params));
  }
}
