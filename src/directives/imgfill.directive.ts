import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appImgFill]',
  standalone: true
})
export class ImgFillDirective {

  constructor(private readonly el: ElementRef<HTMLImageElement>) {
    el.nativeElement.style.width = 'auto'
    el.nativeElement.style.height = 'auto'
    el.nativeElement.style.inset = 'auto'
  }

}
