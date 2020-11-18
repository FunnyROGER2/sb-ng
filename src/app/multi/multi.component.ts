import { Component, Input } from '@angular/core';
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

  @Input() cities: SelectItem[]

  selectedCities: City[];

  constructor() {}

}
