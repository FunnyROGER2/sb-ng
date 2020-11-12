// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MenuItemComponent } from '../app/menu-item/menu-item.component';

export default {
  title: 'Example/MenuItem',
  component: MenuItemComponent,
} as Meta;

const Template: Story<MenuItemComponent> = function(args: MenuItemComponent) {
  return {
    component: MenuItemComponent,
    props: args,
    moduleMetadata: {
      declarations: [MenuItemComponent],
    },
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
