import {AfterViewInit, Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {GetServers, ServersStore} from "@/app/navigation/servers/store/servers.store";
import {ServersDto} from "@/app/navigation/servers/dto/servers.dto";
import {GetServersDto} from "./dto/get-servers.dto";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {ModalService} from "@/services/modal.service";
import {ChildrenOutletContexts} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0}),
          stagger(100, [
            animate('0.3s', style({opacity: 1}))
          ])
        ], {optional: true})
      ])
    ]),

    trigger('animServerDetails', [
      transition('* => *', [
        query(':leave', [
          style({opacity: '1'}),
          animate('250ms ease',
            style({opacity: '0'}))
        ], {optional: true}),
      ]),
    ])
  ]
})
export class ServersComponent implements OnInit, AfterViewInit {

  constructor(
    private contexts: ChildrenOutletContexts,
    private readonly store: Store
  ) {
  }

  @Select(ServersStore.getServers)
  servers$: Observable<ServersDto[]>;

  params: GetServersDto = {
    sortBy: 'priority:DESC',
    page: 1,
    limit: 10
  }

  defaultImageServer: string = 'assets/images/defaultServer.png'

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngAfterViewInit() {
    // this.modalService.open('modal-server-details')
  }

  ngOnInit() {
    this.store.dispatch(new GetServers(this.params));
  }

  protected readonly phantomIcons = phantomIcons;
}
