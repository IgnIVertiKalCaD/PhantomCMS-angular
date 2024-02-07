import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "@/services/modal.service";
import {Location, NgIf} from "@angular/common";
import {fadeScaleAnimation} from "@/animations/fadeScale.animation";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
    animations: [
    fadeScaleAnimation
  ],
  imports: [
    NgIf
  ],
  standalone: true
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  id?: string;

  @Input()
  rollback?: boolean = false;

  isOpen: boolean = false;

  @ViewChild('modal')
  modal: ElementRef<HTMLDivElement>

  private readonly element: any;

  constructor(
    private readonly location: Location,
    private modalService: ModalService,
    private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.modalService.add(this);

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: any) => {
      if (el.target.classList[0] === 'modal') {

        if (this.rollback) {
          this.location.back()
        }

        this.close();
      }
    });
  }

  ngOnDestroy() {
    this.modalService.remove(this);
    this.element.remove();
  }

  open() {
    document.body.style.overflowY = 'hidden'

    document.body.classList.add('modal-open');
    this.isOpen = true;
  }

  close() {
    document.body.classList.remove('modal-open');
    this.isOpen = false;

    document.body.style.overflowY = 'scroll'
  }
}
