import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-multi',
  template: `
    <p-multiSelect ></p-multiSelect>
  `,
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

interface City {
  name: string,
  code: string
}

export class MyModel {

  cities1: SelectItem[];

  selectedCities1: City[];

  constructor() {
      //SelectItem API with label-value pairs
      this.cities1 = [
          {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
          {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
          {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
          {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
          {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];
  }

}