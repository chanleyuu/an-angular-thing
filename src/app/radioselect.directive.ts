import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appRadioselect]'
})
export class RadioselectDirective implements OnInit {

   @Input() isselected: string;

   constructor(
      private renderer: Renderer2,
      private elementRef: ElementRef
   ) { }

  ngOnInit() {

  }

  @HostListener('click') onClick() {
    if (this.isselected == 'false'){
      this.renderer.setAttribute(this.elementRef.nativeElement, 'selected', 'true');
    }
    else if (this.isselected == 'true') {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'selected', 'false');
    }
  }
}
