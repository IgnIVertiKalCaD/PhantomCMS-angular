import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {AssetsStore} from "@/store/assets-manager/assets-store";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {ModalService} from "@/services/modal.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(protected readonly modalService: ModalService) {
  }

  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getEmail)
  email$: Observable<string>

  @Select(AuthStore.getCreatedAtAccount)
  createdAt$: Observable<string>

  @Select(AuthStore.getActiveGroup)
  active_group$: Observable<string>

  @Select(AssetsStore.getHeadUser)
  head$: Observable<string>

  defaultHead: string = 'assets/images/defaultPlayer.png'


  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.modalService.open('modal-blocking-history')
  }

  protected readonly phantomIcons = phantomIcons;
}
