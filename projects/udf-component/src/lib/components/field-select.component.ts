import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf-definition.interface';

@Component({
  selector: 'udf-select',
  styleUrls: ['./udf-item.component.css'],
  template: `
  <mat-form-field class="udf-item" [formGroup]="group">
    <mat-select
      [formControlName]="config.name"
      [placeholder]="config.placeholder">
        <mat-option *ngFor="let option of config.options" [value]="option" for="option">
          {{option}}
        </mat-option>
    </mat-select>
  </mat-form-field>
  `
})
export class FormSelectComponent implements UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
