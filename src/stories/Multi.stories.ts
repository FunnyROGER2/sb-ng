// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {MultiSelectModule} from 'primeng/multiselect';
import { MultiComponent } from '../app/multi/multi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// export default {
//   title: 'Example/MultiComponent',
//   component: MultiComponent,
// } as Meta;

// const Template: Story<MultiComponent> = (args: MultiComponent) => ({
//   component: MultiComponent,
//   props: args,
// });

// export const Base = Template.bind({});
// Base.args = {

// };

export default {
  title: 'Example/MultiComponent',
  component: MultiComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, ReactiveFormsModule, CommonModule, MultiSelectModule],
    }),
  ],
};

const Template = (args: MultiComponent) => ({
  component :MultiComponent,
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {};
