import { Injectable } from '@angular/core';
//registration
import {MailVerificationComponent} from "@/app/auth/registration/mail-verification/mail-verification.component";
import {NicknameChoiceComponent} from "@/app/auth/registration/nickname-choice/nickname-choice.component";
import {AccountProtectionComponent} from "@/app/auth/registration/account-protection/account-protection.component";
import {EnterReferralCodeComponent} from "@/app/auth/registration/enter-referral-code/enter-referral-code.component";
import {GoodGameComponent} from "@/app/auth/registration/good-game/good-game.component";
import {RegisterComponent} from "@/app/auth/registration/register/register.component";

//auth
import {EnterEmailComponent} from "@/app/auth/authentication/enter-email/enter-email.component";
import {EnterPasswordComponent} from "@/app/auth/authentication/enter-password/enter-password.component";
import {EnterCodeComponent} from "@/app/auth/authentication/enter-code/enter-code.component";

@Injectable({
  providedIn: 'root'
})
export class AuthScenesService {
  getRegistrationScenes() {
    return [
      {
        component: RegisterComponent,
        inputs: { title: 'Введите почту' },
      },
      {
        component: MailVerificationComponent,
        inputs: { title: 'Проверка почты' },
      },
      {
        component: NicknameChoiceComponent,
        inputs: { title: 'Выбор ника' },
      },
      {
        component: AccountProtectionComponent,
        inputs: { title: 'Защита аккаунта' },
      },
      {
        component: EnterReferralCodeComponent,
        inputs: { title: 'Почти готово!' },
      },
      {
        component: GoodGameComponent,
        inputs: { title: 'Приятной игры!' },
      },
    ]
  }

  getAuthScenes() {
    return [
      {
        component: EnterEmailComponent,
        inputs: { title: 'С возвращением!' },
      },
      {
        component: EnterPasswordComponent,
        inputs: { title: 'С возвращением!' },
      },
      {
        component: EnterCodeComponent,
        inputs: { title: 'С возвращением!' },
      }
    ]
  }

}
