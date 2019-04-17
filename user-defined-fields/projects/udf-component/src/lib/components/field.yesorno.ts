import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf.definition.interface';

@Component({
  selector: 'udf-yes-or-no',
  styleUrls: ['./udf-item.component.css'],
  template: `
  <div [formGroup]="group" class="udf-item">
    <mat-slide-toggle color="primary" [formControlName]="config.name">
      {{config.placeholder}}
    </mat-slide-toggle>
  </div>
  `
})
export class FormYesOrNoComponent implements UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
