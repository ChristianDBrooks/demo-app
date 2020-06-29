import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[navLink]'
})
export class NavLinkDirective {

  constructor(private hostElement: ElementRef) { }

  @HostListener('click') onClick() {
    this.hostElement.nativeElement.parentElement.querySelectorAll("a").forEach(element => { // Remove all active classes on any anchor tag in the nav.
      element.classList.remove('active');
    });
    this.hostElement.nativeElement.classList.add("active");
  }
}
