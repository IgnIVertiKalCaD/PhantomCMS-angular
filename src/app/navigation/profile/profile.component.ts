import {Component} from '@angular/core';
import {Select} from "@ngxs/store";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getEmail)
  email$: Observable<string>


}
