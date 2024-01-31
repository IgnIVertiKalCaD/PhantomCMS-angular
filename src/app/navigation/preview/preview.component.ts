import {Component, OnInit} from '@angular/core';
import {phantomIcons} from "@/common/icons/phantomIcons";
import {ModalService} from "@/services/modal.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  host: {
    'class': 'd-flex'
  }
})
export class PreviewComponent implements OnInit {
  constructor(protected readonly modalService: ModalService) {}



  ngOnInit() {
  }

  protected readonly phantomIcons = phantomIcons;
}
