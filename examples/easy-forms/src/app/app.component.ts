import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UdfDefinition } from '@9hub/udf-component';
import { UdfValue } from '@9hub/udf-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public udfFormGroup = this.fb.group({});
  public data: UdfDefinition[] = [
    {
      tenant_id: '123456XSDFAS',
      table_name: 'participante',
      custom_field: {
        type: 'LIST_OF_VALUES',
        name: 'Municipio',
        index: 1,
        default_value: null,
        options: [ 'Vinto', 'Colcapirhua', 'Quillacollo' ]
      }
    },
    {
      tenant_id: '123456XSDFAS',
      table_name: 'participante',
      custom_field: {
        type: 'NUMBER',
        name: 'Test Numero',
        index: 2,
        default_value: null,
        options: null
      }
    },
    {
      tenant_id: '123456XSDFAS',
      table_name: 'participante',
      custom_field: {
        type: 'TEXT',
        name: 'Test Texto',
        index: 3,
        default_value: null,
        options: null
      }
    },
    {
      tenant_id: '123456XSDFAS',
      table_name: 'participante',
      custom_field: {
        type: 'DATE',
        name: 'Test Calendar',
        index: 4,
        default_value: null,
        options: null
      }
    }
  ];

  constructor( private fb: FormBuilder ) { }

}
