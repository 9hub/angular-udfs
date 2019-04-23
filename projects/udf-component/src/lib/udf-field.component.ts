import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UdfFieldDefinition } from './models/udf-definition.interface';

@Component({
  selector: 'udf-field-md',
  template:
  `<div class="container"
    udfField
    [config]="fieldConfig"
    [group]="udfFormGroup">
  </div>`,
  styleUrls: ['./style.css']
})
export class UdfComponent implements OnChanges, OnInit {
  @Input()
  fieldConfig: UdfFieldDefinition;

  @Input()
  udfFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  get controls(): UdfFieldDefinition[]  {
    return [ this.fieldConfig ];
  }

  ngOnInit(): void {
    this.addControlToGroup();
  }

  ngOnChanges(): void {
    if (!this.udfFormGroup) {
      throw new Error(`FormGroup should be defined`);
    }
  }

  private addControlToGroup(): void {
    this.controls.forEach(control => this.udfFormGroup.addControl(control.name, this.createControl(control)));
  }

  private createControl(config: UdfFieldDefinition): FormControl {
    const { disabled, validation, default_value } = config;
    return this.fb.control({ disabled, value: default_value }, validation);
  }
}
