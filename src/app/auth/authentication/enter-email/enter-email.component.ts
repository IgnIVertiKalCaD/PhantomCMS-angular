import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NavigationLogic} from "@/app/auth/core/navigationLogic";
import {Store} from "@ngxs/store";
import {authValidator} from "@/common/validaters/authValidator";
import {SaveTempUserData} from "@/app/auth/store/transportData.store";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss'],

})
export class EnterEmailComponent extends NavigationLogic {
  constructor(private readonly store: Store) {
    super(store);
  }


  continue() {
    if (this.email.valid) {

      this.store.dispatch(
        new SaveTempUserData({usernameOrEmail: this.email.value!})
      )

      this.next(this.email.valid)
    }
  }

  email = new FormControl('', [
    Validators.required,
    // Validators.pattern("^[\\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\\.(?:com|ru)$")
  ]);


  protected readonly phantomIcons = phantomIcons;
  protected readonly authValidator = authValidator;
}
