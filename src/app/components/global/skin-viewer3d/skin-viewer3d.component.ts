import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {SkinViewer} from "skinview3d";
import {
  AssetsStore,
  DeleteUserCape,
  DeleteUserSkin, GetUserCape, GetUserSkin,
  UpdateUserCape,
  UpdateUserSkin
} from "@/store/assets-manager/assets-store";
import {Observable} from "rxjs";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {ButtonComponent} from "@/app/components/button/button.component";
import {SafePipe} from "@/pipes/safe.pipe";

@Component({
  selector: 'app-skin-viewer3d',
  templateUrl: './skin-viewer3d.component.html',
  styleUrls: ['./skin-viewer3d.component.scss'],
  imports: [
    ButtonComponent,
    SafePipe
  ],
  standalone: true
})
export class SkinViewer3dComponent implements OnInit {
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
      width: 301,
      height: 271,
    });

    this.cape$.subscribe((el: string) => {
      if (el) this.skinViewer?.loadCape(el)
    })
    this.skin$.subscribe((el: string) => this.skinViewer.loadSkin(el))
  }
}
