import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Injectable} from "@angular/core";
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private store: Store, private router: Router){};
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


    let isLoggedIn: boolean = false;
    this.store.select(AuthStore.isAuth).subscribe(s => isLoggedIn = s)

    if (isLoggedIn) return true
    else return this.router.navigate(['/'])
  }

}
