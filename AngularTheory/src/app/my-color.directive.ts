import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[MyColor], my-color, .my-color'
})

export class MyColor {
  @HostListener('mouseenter') onMouseEnter() {

  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, "color", "red")
  }

}
