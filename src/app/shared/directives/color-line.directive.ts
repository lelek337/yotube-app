import { Directive, ElementRef, Input, Renderer2, AfterContentInit } from '@angular/core';

import { Item } from 'src/app/shared/models/search-item.model';

@Directive({
  selector: '[appColorLine]',
})
export class ColorLineDirective implements  AfterContentInit {
  @Input() item!: Item;

  style = '';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  date = new Date;

  ngAfterContentInit() {
    const el = this.renderer.createElement('div');
    el.classList.add('botton-band');
    const itemYear = this.item.snippet.publishedAt.slice(0, 4);
    const dateYear = this.date.getFullYear();

    if (dateYear - +itemYear < 2) {
      el.style.backgroundColor = 'green';
    } else if (dateYear - +itemYear > 4) {
      el.style.backgroundColor = 'red';
    } else  {
      el.style.backgroundColor = 'blue';
    }
    this.renderer.appendChild(this.element.nativeElement, el);
  }
}
