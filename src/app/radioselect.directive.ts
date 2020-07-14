import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRadioselect]'
})
export class RadioselectDirective {




  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

}
