import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UdfFieldDefinition } from './models/udf-definition.interface';

@Component({
  selector: 'udf-md',
  template:
  `<div class="container">
    <ng-container
      *ngFor="let fieldConfig of udfData;"
      udfField
      [config]="fieldConfig"
      [group]="udfFormGroup">
    </ng-container>
  </div>`,
  styleUrls: ['./style.css']
})
export class UdfsComponent implements OnChanges, OnInit {
  @Input()
  udfData: UdfFieldDefinition[];

  @Input()
  udfFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  get controls(): UdfFieldDefinition[] {
    return this.udfData.filter(({type}) => type !== 'button');
  }

  ngOnInit(): void {
    this.addControlsToGroup();
  }

  ngOnChanges(): void {
    if (!this.udfFormGroup) {
      throw new Error(`FormGroup should be defined`);
    }
  }

  private addControlsToGroup(): void {
    this.controls.forEach(control => this.udfFormGroup.addControl(control.name, this.createControl(control)));
  }

  private createControl(config: UdfFieldDefinition): FormControl {
    const { disabled, validation, default_value } = config;
    return this.fb.control({ disabled, value: default_value }, validation);
  }
}
