// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {MultiSelectModule} from 'primeng/multiselect';
import { MultiComponent } from '../app/multi/multi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Example/MultiComponent',
  component: MultiComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MultiSelectModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<MultiComponent> = (args: MultiComponent) => ({
  component: MultiComponent,
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {
  cities: [
    { label: 'New York', value: {id:1, name: 'New York', code: 'NY'} },
    { label: 'Rome', value: {id:2, name: 'Rome', code: 'RM'} },
    { label: 'London', value: {id:3, name: 'London', code: 'LDN'} },
    { label: 'Istanbul', value: {id:4, name: 'Istanbul', code: 'IST'} },
    { label: 'Paris', value: {id:5, name: 'Paris', code: 'PRS'} }
  ],
};
