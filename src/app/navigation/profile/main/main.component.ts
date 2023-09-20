import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {
  AssetsStore, DeleteUserCape,
  DeleteUserSkin, GetUserCape,
  GetUserHead,
  GetUserSkin, UpdateUserCape,
  UpdateUserSkin
} from "@/store/assets-manager/assets-store";
import { SkinViewer } from "skinview3d";
import {Observable} from "rxjs";
import {phantomIcons} from "@/common/icons_kit_devtools/phantomIcons";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  protected readonly phantomIcons = phantomIcons;

  constructor(private readonly store: Store) {
    this.username$.subscribe(name => this.username = name)
  }
  skinViewer: SkinViewer


  @Select(AssetsStore.getSkinUserBase64)
  skin$: Observable<string>

  @Select(AssetsStore.getCapeUserBase64)
  cape$: Observable<string>

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  username: string
  async loadSkin(event: any): Promise<void> {
    const file: File = event.target.files[0]
    event.target.value = null

    this.store.dispatch(new UpdateUserSkin(await file.arrayBuffer(), this.username))
  }

  async loadCape(event: any): Promise<void> {
    const file: File = event.target.files[0]
    event.target.value = null

    this.store.dispatch(new UpdateUserCape(await file.arrayBuffer(), this.username))
  }
  removeMeSkin(): void {
    this.store.dispatch(new DeleteUserSkin())
  }
  removeMeCape(): void {
    this.skinViewer.loadCape(null)
    this.store.dispatch(new DeleteUserCape())
  }

  ngOnInit(): void {
    this.store.dispatch([new GetUserSkin(this.username), new GetUserCape(this.username)])

    this.skinViewer = new SkinViewer({
      canvas: document.getElementById("skin_container") as HTMLCanvasElement,
      width: 290,
      height: 280,
    });

    this.cape$.subscribe((el: string) => {
      if (el) this.skinViewer?.loadCape(el)
    })
    this.skin$.subscribe((el: string) => this.skinViewer.loadSkin(el))
  }
}
