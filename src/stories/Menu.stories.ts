import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { Meta } from '@storybook/angular/types-6-0';

import { MenuItemComponent } from '../app/menu-item/menu-item.component';
import { MenuComponent } from '../app/menu/menu.component';

import * as MenuItemStories from './MenuItem.stories';

export default {
  title: 'Example/Menu',
  component: MenuComponent,
} as Meta;

const Template = function(args: MenuComponent) {
  return {
    component: MenuComponent,
    props: args,
    moduleMetadata: {
      declarations: [MenuItemComponent],
    },
    template: `<app-menu
      [items]='items'
      [num]='num'
    >
    </app-menu>`,
  }
};

let items = [];
for (const key in MenuItemStories) {
  if (MenuItemStories[key].args) items.push(MenuItemStories[key].args);    
}

export const Base = Template.bind({});
Base.args = {
  items
};

export const Static = Template.bind({});
Static.args = {
  items: [MenuItemStories.Base.args, MenuItemStories.Disabled.args]
};