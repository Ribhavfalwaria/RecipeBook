import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
