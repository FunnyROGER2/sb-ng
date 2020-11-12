import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  template: `<ul class="menu">
    <li *ngFor="let item of items.slice(0, num)" class="menu__item">
      <app-menu-item
        name={{item.name}}
        [active]=item.active
        [disabled]=item.disabled
        >
      </app-menu-item>
    </li>
  </ul>`,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /**
   * Число пунктов меню
   */
  @Input()
  num: number = 2;

  @Input()
  items;
}
