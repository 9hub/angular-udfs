import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UdfFieldDefinition } from '@9hub/udf-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild(DynamicFormComponent) udf: UdfComponent;
  // here is will get the data generate by the udf form
  udfFormGroup: FormGroup = this.fb.group({});
  udfFieldFormGroup: FormGroup = this.fb.group({});
  // moks schemes where you can assign to generate udf
  public udfData: UdfFieldDefinition[] = [
    {
      type: 'LIST_OF_VALUES',
      name: 'Municipio',
      placeholder: 'Municipio',
      default_value: null,
      options: [ 'Vinto', 'Colcapirhua', 'Quillacollo' ],
      validation: [Validators.required]
    },
    {
      type: 'TEXT',
      name: 'FirstName',
      placeholder: 'First Name',
      default_value: null,
      options: null,
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'NUMBER',
      name: 'Ege',
      placeholder: 'ege',
      default_value: 18,
      options: null
    },
    {
      type: 'ANY_TEXT',
      name: 'Description',
      placeholder: 'Some description',
      default_value: null,
      options: null
    },
    {
      type: 'DATE',
      name: 'Testdate',
      placeholder: 'Final Date',
      default_value: new Date(),
      options: null

    },
    {
        type: 'YES_OR_NO',
        name: 'TestCheck',
        placeholder: 'Do you agree?',
        default_value: true,
        options: null
    }
  ];
  public AddressLine1: UdfFieldDefinition = {
    type: 'TEXT',
    name: 'AddressLine1',
    placeholder: 'Address Line 1',
    default_value: null,
    options: null,
    validation: [Validators.required]
  };
  public AddressLine2: UdfFieldDefinition = {
    type: 'TEXT',
    name: 'AddressLine2',
    placeholder: 'Address Line 2',
    default_value: null,
    options: null
  };
  public City: UdfFieldDefinition = {
    type: 'LIST_OF_VALUES',
    name: 'City',
    placeholder: 'City',
    default_value: null,
    options: [ 'Cochabamba', 'La Paz', 'Sucrre' ],
    validation: [Validators.required]
  };
  public State: UdfFieldDefinition = {
    type: 'TEXT',
    name: 'State',
    placeholder: 'State',
    default_value: 'Cochabamba',
    options: null
  };
  public Country: UdfFieldDefinition = {
    type: 'TEXT',
    name: 'Country',
    placeholder: 'Country',
    default_value: null,
    options: null
  };
  public PostCode: UdfFieldDefinition = {
    type: 'NUMBER',
    name: 'PostCode',
    placeholder: 'Post code',
    default_value: 18,
    options: null
  };
  constructor(
    private fb: FormBuilder,
  ) {}
}
