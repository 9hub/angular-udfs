import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf-definition.interface';

@Component({
  selector: 'udf-any-text',
  styleUrls: ['./udf-item.component.css'],
  template: `
  <mat-form-field class="udf-item" [formGroup]="group">
    <textarea
      matInput
      [formControlName]="config.name"
      [placeholder]="config.placeholder">
    </textarea>
  </mat-form-field>
  `
})
export class FormAnyTextComponent implements UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
