import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {authValidator} from "@/app/common/validaters/authValidator";
import {Select, Store} from "@ngxs/store";
import {AuthStore, Login} from "@/app/auth/authentication/store/authentication.store";
import {Observable} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [],
})
export class AuthenticationComponent implements OnInit {
  protected readonly authValidator = authValidator;
  constructor(private readonly store: Store, private sanitizer: DomSanitizer) {
    this.checkmark = this.sanitizer.bypassSecurityTrustHtml("<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
      "<rect width=\"32\" height=\"32\" rx=\"12\" fill=\"#1E1E25\"/>\n" +
      "<circle cx=\"16\" cy=\"16\" r=\"8.72727\" fill=\"#8f8f9433\"/>\n" +
      "</svg>");
  }

  checkmark: SafeHtml;

  resetAccount_link: string = '/reset'
  registration_link: string = '/registration'

  login = new FormControl('', [
    Validators.required,
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.minLength(3),
    Validators.maxLength(16)]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(32),
    Validators.pattern("^(?!.*[А-Яа-я]).+$"),
    Validators.pattern("^(?=.*[A-Z]).+$")
  ]);
  isEnabled(): boolean {
    return this.login.valid && this.password.valid
  }

  @Select(AuthStore.isAuth)
  status$: Observable<boolean>;

  @Select(AuthStore.getUsername)
  username$: Observable<string>

  rememberMe: boolean = false;
  authentication(): void {
    if (this.isEnabled()) {
      this.store.dispatch([
        new Login({
          usernameOrEmail: this.login.value as string,
          password: this.password.value as string,
          rememberMe: this.rememberMe
        }),
      ])
    }
  }
  ngOnInit(): void {}
}
