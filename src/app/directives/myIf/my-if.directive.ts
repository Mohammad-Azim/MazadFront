import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]',
})
export class MyIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appMyIf(condition: number) {
    if (condition === 1) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition === 2) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.clear();
      const element = document.createElement('p');
      element.innerText = 'I got in last else';
      this.viewContainer.element.nativeElement.appendChild(element);
    }
  }
}
