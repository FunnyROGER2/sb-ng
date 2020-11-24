// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { LogoComponent } from '../app/logo/logo.component';

export default {
  title: 'Example/Logo',
  component: LogoComponent,
  argTypes: {
    width: {
      description: 'Задаём ширину',
      table: {
        type: { 
            summary: 'В пикселях', 
            detail: 'Для этого двигаем ползунок влево или вправо' 
        },
        defaultValue: { summary: '120 пикселей' },
      },
      defaultValue: 120,
      control: {
        type: 'range',
        min: 100,
        max: 200,
        step: 10
      }
    },
  }
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  component: LogoComponent,
  props: args,
  template: `<app-logo
    [name]='name'
    [width]='width'
  >
  </app-logo>`,
});

export const Pic = Template.bind({});
Pic.args = {
  name: 'pic'
};

export const Photo = Template.bind({});
Photo.args = {
  name: 'photo'
};