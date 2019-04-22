import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf-definition.interface';

@Component({
  selector: 'udf-date',
  styleUrls: ['./udf-item.component.css'],
  template: `
  <mat-form-field appearance="outline" class="udf-item" [formGroup]="group">
    <input
      matInput
      [matDatepicker]="picker"
      [placeholder]="config.placeholder"
      [formControlName]="config.name"
      autocomplete="off">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker touchUi #picker></mat-datepicker>
  </mat-form-field>
  `
})
export class FormDateComponent implements UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
