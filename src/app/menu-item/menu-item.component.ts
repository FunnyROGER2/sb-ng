import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <a
      href="javascript:void(0);"
      [ngClass]="classes"
      >
      {{ name }}
    </a>
  `,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  /**
   * Название
   * 
   * @required
   */
  @Input()
  name: string = 'Пункт меню';

  /**
   * Активность
   */
  @Input()
  active = false;

  /**
   * Доступность
   */
  @Input()
  disabled = false;
  
  public get classes(): string[] {
    const active = this.active ? 'menu-item--active' : '';
    const disabled = this.disabled ? 'menu-item--disabled' : '';

    return ['menu-item', active, disabled];
  }
}
