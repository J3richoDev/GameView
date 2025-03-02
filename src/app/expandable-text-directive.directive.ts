import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appExpandableTextDirective]'
})
export class ExpandableTextDirectiveDirective {
  @Input() text: string = '';
  @Input() limit: number = 500;
  @Input() showMore: boolean = false;

  @HostBinding('innerHTML')
  get formattedText(): string {
    return this.showMore ? this.text : this.text.slice(0, this.limit) + (this.text.length > this.limit ? '...' : '');
  }
}
