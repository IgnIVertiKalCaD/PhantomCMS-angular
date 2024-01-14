import {Component} from '@angular/core';
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
export class PreviewComponent {
    constructor(
      protected modalService: ModalService
    ) {
    }


    protected readonly phantomIcons = phantomIcons;
}
