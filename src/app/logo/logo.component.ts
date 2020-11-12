import { Component, Input, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: ` <picture>
    <source [srcset]=' "./assets/images/" + name + ".webp" ' />
    <img [src]=' "./assets/images/" + name + "." + ".jpg" ' [alt]=' name '  [style]=' "width: " + width + "px" ' />
  </picture>`,
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  /**
   * Выбираем название картинки
   */
  @Input()
  name: 'pic' | 'photo' = 'photo';

  /**
   * Ширина
   */
  @Input()
  width: number;
}
