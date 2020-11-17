import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MultiComponent }   from './multi.component';

import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    BrowserModule,
		MultiSelectModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ MultiComponent ],
  bootstrap:    [ MultiComponent ]
})

export class MultiModule { }
