import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UdfFieldDefinition } from '@9hub/udf-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public udfFormGroup = this.fb.group({});
  public data: UdfFieldDefinition[] = [
  {
    type: 'LIST_OF_VALUES',
    name: 'Municipio',
    default_value: null,
    options: [ 'Vinto', 'Colcapirhua', 'Quillacollo' ]
  },
  {
    type: 'NUMBER',
    name: 'Test Numero',
    default_value: null,
    options: null
  },
  {
    type: 'TEXT',
    name: 'Test Texto',
    default_value: null,
    options: null
  },
  {
    type: 'DATE',
    name: 'Test Calendar',
    default_value: null,
    options: null
  }];

  constructor( private fb: FormBuilder ) { }

}
