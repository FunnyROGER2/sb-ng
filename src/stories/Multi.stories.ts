// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MultiComponent } from '../app/multi/multi.component';

export default {
  title: 'Example/MultiComponent',
  component: MultiComponent,
} as Meta;

const Template: Story<MultiComponent> = (args: MultiComponent) => ({
  component: MultiComponent,
  props: args,
});

export const Base = Template.bind({});
Base.args = {

};