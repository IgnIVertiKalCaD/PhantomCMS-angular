import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";
import {Store} from "@ngxs/store";
import {SaveTempUserData} from "@/app/auth/store/transportData.store";

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrls: ['./enter-password.component.scss']
})
export class EnterPasswordComponent extends NavigationLogic {
  constructor(private readonly store: Store) {
    super(store);
  }

  password = new FormControl('', [
    Validators.required,
    // Validators.minLength(6),
    // Validators.maxLength(32),
    // Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    // Validators.pattern("^(?=.*[A-Z]).+$")
  ]);


  continue() {
    if (this.password.valid) {

      this.store.dispatch(
        new SaveTempUserData({password: this.password.value!, rememberMe: this.isRememberMe})
      )

      this.next(this.password.valid)
    }
  }

  isRememberMe: boolean = false;

  rememberMe(event: boolean): void {
      this.isRememberMe = event
  }

  protected readonly phantomIcons = phantomIcons;
}
