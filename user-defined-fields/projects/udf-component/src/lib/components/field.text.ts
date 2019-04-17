import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf.definition.interface';

@Component({
  selector: 'udf-text',
  styleUrls: ['./udf-item.component.css'],
  template: `
  <mat-form-field class="udf-item" [formGroup]="group">
    <input
      type="text"
      matInput
      [formControlName]="config.name"
      [placeholder]="config.placeholder">
  </mat-form-field>
  `
})
export class FormTextComponent implements UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
