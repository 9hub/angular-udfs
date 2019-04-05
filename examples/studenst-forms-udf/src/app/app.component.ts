import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UdfDefinition} from 'angular-udf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public udfFormGroup = this.fb.group({});
  // TODO: Revove this example data
  public udfData = {
    data: [
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
          type: 'TEXT',
          name: 'First name',
          index: 3,
          default_value: null,
          options: null
        }
      },
      {
        tenant_id: '123456XSDFAS',
        table_name: 'participante',
        custom_field: {
          type: 'TEXT',
          name: 'Father last name',
          index: 3,
          default_value: null,
          options: null
        }
      },
      {
        tenant_id: '123456XSDFAS',
        table_name: 'participante',
        custom_field: {
          type: 'TEXT',
          name: 'Mother last name',
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
          name: 'Test date',
          index: 6,
          default_value: null,
          options: null
        }
      },
      {
        tenant_id: '123456XSDFAS',
        table_name: 'participante',
        custom_field: {
          type: 'YES_OR_NO',
          name: 'Test check',
          index: 7,
          default_value: null,
          options: null
        }
      }
    ] as UdfDefinition[]
  };
  
  constructor(
    private fb: FormBuilder
    ) { }



}
