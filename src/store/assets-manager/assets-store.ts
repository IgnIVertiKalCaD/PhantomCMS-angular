import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {catchError, of, tap, throwError} from "rxjs";
import {AssetsStateDto} from "@/store/assets-manager/dto/AssetsState.dto";
import {AssetsManagerService} from "@/store/assets-manager/assets-manager.service";
import {StorageManagerService} from "@/common/storage/storage-manager.service";
import {Buffer} from 'buffer'
import {patch} from "@ngxs/store/operators";
import {steve} from "@/common/defaultSkins/steve";
import {base64ToBlobURL} from "@/common/utils/base64ToBlobURL";
import {HttpErrorResponse} from "@angular/common/http";

//HEAD
export class GetUserHead {
  static readonly type = '[GetUserHead] get user head and save to SS';

  constructor(public username: string) {
  }
}
//SKIN
export class GetUserSkin {
  static readonly type = '[GetUserSkin] get user skin and save to SS';

  constructor(public username: string) {
  }
}
export class UpdateUserSkin {
  static readonly type = '[UpdateUserSkin] update user skin and save to SS';

  constructor(public skin: ArrayBuffer, public username: string) {
  }
}
export class DeleteUserSkin {
  static readonly type = '[DeleteUserSkin] delete user skin and remove of SS';
}

//CAPE
export class GetUserCape {
  static readonly type = '[GetUserCape] get user cape and save to SS';

  constructor(public username: string) {
  }
}
export class UpdateUserCape {
  static readonly type = '[UpdateUserCape] update user cape and save to SS';

  constructor(public cape: ArrayBuffer, public username: string) {
  }
}
export class DeleteUserCape {
  static readonly type = '[DeleteUserCape] delete user cape and remove of SS';
}
@State<AssetsStateDto>({
  name: 'assets_store',
  defaults: {
    SKIN: JSON.parse(sessionStorage.getItem('skin')!) || steve,
    CAPE: JSON.parse(sessionStorage.getItem('cape')!) || null,
    HEAD: JSON.parse(sessionStorage.getItem('head')!),
  }
})
@Injectable()
export class AssetsStore {
  constructor(
    private readonly storageManager: StorageManagerService,
    private readonly store: Store,
    private readonly assetsManagerService: AssetsManagerService
  ) {
  }
  @Selector()
  static getHeadUser(state: AssetsStateDto): string | undefined {
    return state.HEAD ? base64ToBlobURL(state.HEAD!) : undefined
  }

  @Selector()
  static getSkinUserBase64(state: AssetsStateDto): string | undefined {
    return state.SKIN ? base64ToBlobURL(state.SKIN!) : undefined
  }

  @Selector()
  static getCapeUserBase64(state: AssetsStateDto): string | undefined {
    return state.CAPE ? base64ToBlobURL(state.CAPE!) : undefined
  }

  @Action(GetUserHead)
  async getUserHead(ctx: StateContext<AssetsStateDto>, payload: GetUserHead) {
    return this.assetsManagerService.getUserHead(payload.username).pipe(
      tap((res: ArrayBuffer) => {
        const head = Buffer.from(res).toString('base64');

        this.storageManager.save({type: 'sessionStorage', key: 'head', payload: head})
        ctx.setState(
          patch({
            HEAD: head
          })
        )

      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }
  @Action(GetUserSkin)
  async getUserSkin(ctx: StateContext<AssetsStateDto>, payload: GetUserSkin) {
    return this.assetsManagerService.getUserSkin(payload.username).pipe(
      tap((res: ArrayBuffer) => {
        const skin = Buffer.from(res).toString('base64')

        this.storageManager.save({type: 'sessionStorage', key: 'skin', payload: skin})

        ctx.setState(
          patch({
            SKIN: skin
          })
        )
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }
  @Action(UpdateUserSkin)
  async updateUserSkin(ctx: StateContext<AssetsStateDto>, payload: UpdateUserSkin) {
    const skin = Buffer.from(payload.skin).toString('base64')

    this.storageManager.save({type: 'sessionStorage', key: 'skin', payload: skin})

    const formData = new FormData();
    formData.append('file', new Blob([payload.skin]))

    ctx.setState(patch({SKIN: skin}))

    return this.assetsManagerService.updateUserSkin(formData).pipe(
      tap(() => {
        this.store.dispatch(new GetUserHead(payload.username))
      })
    )
  }
  @Action(DeleteUserSkin)
  async deleteUserSkin(ctx: StateContext<AssetsStateDto>) {
    this.storageManager.save({type: 'sessionStorage', key: 'skin', payload: steve})

    return this.assetsManagerService.deleteUserSkin().pipe(
      tap(() => {
        ctx.setState(patch({SKIN: steve}))
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

  @Action(GetUserCape)
  async getUserCape(ctx: StateContext<AssetsStateDto>, payload: GetUserCape) {
    return this.assetsManagerService.getUserCape(payload.username).pipe(
      tap((res: ArrayBuffer) => {
        const cape = Buffer.from(res).toString('base64')
        this.storageManager.save({type: 'sessionStorage', key: 'cape', payload: cape})

        ctx.setState(
          patch({
            CAPE: cape
          })
        )
      }),
      catchError(error => {
          if (error.status === 404) {
            return of(undefined);
          } else {
            throw error;
          }
        }
      )
    )
  }

  @Action(UpdateUserCape)
  async updateUserCape(ctx: StateContext<AssetsStateDto>, payload: UpdateUserCape) {
    const cape = Buffer.from(payload.cape).toString('base64')

    this.storageManager.save({type: 'sessionStorage', key: 'cape', payload: cape})

    const formData = new FormData();
    formData.append('file', new Blob([payload.cape]))

    ctx.setState(patch({CAPE: cape}))

    return this.assetsManagerService.updateUserCape(formData)
  }

  @Action(DeleteUserCape)
  async deleteUserCape(ctx: StateContext<AssetsStateDto>) {
    this.storageManager.removeItem({type: 'sessionStorage', key: 'cape'})

    return this.assetsManagerService.deleteUserCape().pipe(
      tap(() => {
        ctx.setState(patch({CAPE: ''}))
      }),
      catchError(err => {
        return throwError(err);
      })
    )
  }

}
