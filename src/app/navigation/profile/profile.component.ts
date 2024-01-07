import {Component} from '@angular/core';
import {Select} from "@ngxs/store";
import {AuthStore} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  protected readonly phantomIcons = phantomIcons;

  @Select(AuthStore.getUsername)
  username$: Observable<string>;

  @Select(AuthStore.getEmail)
  email$: Observable<string>

  @Select(AuthStore.getCreatedAtAccount)
  createdAt$: Observable<string>

  @Select(AuthStore.getActiveGroup)
  active_group$: Observable<string>
}
