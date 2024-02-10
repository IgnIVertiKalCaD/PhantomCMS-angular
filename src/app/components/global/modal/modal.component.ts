import {Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalService} from "@/services/modal.service";
import {Location, NgIf} from "@angular/common";
import {fadeScaleAnimation} from "@/animations/fadeScale.animation";
import {RouterLink} from "@angular/router";
import {SafePipe} from "@/pipes/safe.pipe";
import {phantomIcons} from "@/common/icons/phantomIcons";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
    animations: [
    fadeScaleAnimation
  ],
    imports: [
        NgIf,
        RouterLink,
        SafePipe
    ],
  standalone: true
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(
    private readonly location: Location,
    private readonly modalService: ModalService,
    private readonly el: ElementRef) {
      this.element = el.nativeElement;
  }

  @Input()
  id?: string;

  @Input()
  rollback?: boolean = false;

  @Input()
  showExitButton: boolean = true;

  @ViewChild('modal')
  modal: ElementRef<HTMLDivElement>

  isOpen: boolean = false;

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.LogicClosingWindow()
  }

  private readonly element: any;

  LogicClosingWindow() {
    if (!this.rollback) {
      this.close();
    } else {
      this.location.back();
    }
  }

  ngOnInit() {
    this.modalService.add(this);

    document.body.appendChild(this.element);

    this.element.addEventListener('click', (el: any) => {
      if (el.target.classList[0] === 'modal') {

        this.LogicClosingWindow()
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

  protected readonly phantomIcons = phantomIcons;
}
