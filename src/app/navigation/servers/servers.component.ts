import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GetServers, ServersStore} from "@/app/navigation/servers/store/servers-store.service";
import {ServerDto} from "@/app/navigation/servers/dto/server.dto";
import { GetServersDto } from "./dto/get-servers.dto";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.3s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ServersComponent implements OnInit{
  protected readonly phantomIcons = phantomIcons;

  constructor(private readonly store: Store) {}

  @Select(ServersStore.getServers)
  servers$: Observable<ServerDto[]>;

  params: GetServersDto = {
    sortBy: 'priority:DESC',
    page: 1,
    limit: 10
  }

  defaultImageServer: string = 'assets/images/defaultServer.png'
  ngOnInit() {
    this.store.dispatch(new GetServers(this.params));
  }
}
