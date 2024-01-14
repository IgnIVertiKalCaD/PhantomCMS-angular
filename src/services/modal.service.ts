import { Injectable } from '@angular/core';
import {ModalComponent} from "@/app/components/global/modal/modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: ModalComponent[] = []

  add(modal: ModalComponent) {
    if (!modal.id || this.modals.find(i => i.id === modal.id)) {
      throw new Error('modal must have a unique id attribute')
    }

    this.modals.push(modal);
  }

  remove(modal: ModalComponent) {
      this.modals = this.modals.filter(i => i === modal)
  }

  open(id: string) {
    const modal = this.modals.find(i => i.id === id);

    if (!modal) {
      throw  new Error(`modal  ${id} not found`)
    }

    modal.open()
  }

  close() {
    const modal = this.modals.find(i => i.isOpen)
    modal?.close()
  }
}
