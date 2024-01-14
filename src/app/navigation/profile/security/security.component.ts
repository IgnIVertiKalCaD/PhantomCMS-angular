import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {NgxOtpInputComponent} from "ngx-otp-input";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SecurityComponent implements OnInit {

  @ViewChild('otp', {static: true})
  otp: NgxOtpInputComponent;

  @ViewChild('otp2', {static: true})
  otp2: NgxOtpInputComponent;



  handleFillEvent(value: string): void {
    console.log(value);
  }

  ngOnInit() {

  }

  protected readonly phantomIcons = phantomIcons;
}
