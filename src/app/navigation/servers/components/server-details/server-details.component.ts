import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {ChipComponent} from "@/app/components/chip/chip.component";
import {Select, Store} from "@ngxs/store";
import {ModalService} from "@/services/modal.service";
import {GetSelectedServer, ServersStore} from "@/app/navigation/servers/store/servers.store";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ServersDto} from "@/app/navigation/servers/dto/servers.dto";

@Component({
  selector: 'app-server-details',
  templateUrl: './server-details.component.html',
  styleUrls: ['./server-details.component.scss'],
  imports: [
    NgOptimizedImage,
    NgForOf,
    ChipComponent,
    AsyncPipe
  ],
  standalone: true
})
export class ServerDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute,
    private readonly modalService: ModalService
  ) {}

  defaultImageServer: string = 'assets/images/defaultServer.png'

  @Select(ServersStore.getSelectedServer)
  selectedServer$: Observable<ServersDto>

  ngOnInit() {
    this.modalService.open('modal-server-details')

    this.store.dispatch(new GetSelectedServer(this.route.snapshot.paramMap.get('uniqueId')!))
  }

  ngOnDestroy() {
    this.modalService.close()

    // this.store.dispatch(new ClearSelectedNews())
  }
}
