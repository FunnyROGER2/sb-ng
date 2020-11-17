import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-multi',
  templateUrl: './multi.template.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent {

  cities1: SelectItem[];

  cities2: City[];

  selectedCities1: City[];

  selectedCities2: City[];

  constructor() {
      this.cities1 = [
          {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
          {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
          {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
          {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
          {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];

      this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }

}
