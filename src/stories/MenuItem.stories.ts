// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../app/menu-item/menu-item.component';

export default {
  title: 'Example/MenuItem',
  component: MenuItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuItemComponent],
      imports: [CommonModule],
    }),
    (storyFunc, context) => {
      const story = storyFunc();
      return {
        ...story,
        template: `<div class='theme theme--dark'>${story.template}</div>`,
      };
    },
  ],
} as Meta;

const Template: Story<MenuItemComponent> = function(args: MenuItemComponent) {
  return {
    component: MenuItemComponent,
    props: args,
    template: `<app-menu-item
      [name]='name'
      [active]='active'
      [disabled]='disabled'
    >
    </app-menu-item>`,
  }
};

export const Base = Template.bind({});
Base.args = {
  name: 'Пункт меню',
  active: false,
  disabled: false
};

export const Active = Template.bind({});
Active.args = {
  ...Base.args,
  name: 'Активный пункт меню',
  active: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Base.args,
  name: 'Недоступный пункт меню',
  disabled: true
};

export const SecondDisabled = Template.bind({});
SecondDisabled.args = {
  ...Disabled.args,
  name: 'Ещё один недоступный пункт меню'
};
