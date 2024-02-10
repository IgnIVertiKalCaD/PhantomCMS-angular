import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SecurityComponent implements OnInit {

  ngOnInit() {

  }

  protected readonly phantomIcons = phantomIcons;
}
