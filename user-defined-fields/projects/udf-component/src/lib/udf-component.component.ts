import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UdfDefinition } from './interfaces/udf-definition';
import { UdfValue } from './interfaces/udf-value';

@Component({
  selector: 'udf-md',
  template:
  `
    <div [formGroup]="udfFormGroup" class="container">
      <div formArrayName="udfFormArray">
        <div *ngFor="let group of udfFormArray.controls; let i=index" [formGroupName]="i" [ngSwitch]="udfData[i].custom_field.type">

          <mat-form-field *ngSwitchCase="'TEXT'" class="item-udf">
            <input type="text" matInput formControlName="value" placeholder="{{group.value.name}}">
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'NUMBER'" class="item-udf">
            <input type="number" matInput formControlName="value" placeholder="{{group.value.name}}">
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'ANY_TEXT'" class="item-udf">
            <textarea matInput formControlName="value" placeholder="{{group.value.name}}"></textarea>
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'LIST_OF_VALUES'" class="item-udf">
            <mat-select formControlName="value" placeholder="{{group.value.name}}">
              <mat-option *ngFor="let option of udfData[i].custom_field.options" [value]="option" for="option">
                {{option}}
              </mat-option>
            </mat-select>
          </mat-form-field>

          <mat-slide-toggle *ngSwitchCase="'YES_OR_NO'" color="primary" formControlName="value" class="item-udf">
            {{group.value.name}}
          </mat-slide-toggle>

          <mat-form-field *ngSwitchCase="'DATE'" appearance="outline" class="item-udf">
            <input matInput [matDatepicker]="picker" placeholder="{{group.value.name}}" formControlName="value"  autocomplete="off">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker touchUi #picker></mat-datepicker>
          </mat-form-field>

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./style.css']
})
export class UdfComponent implements OnInit {
  public udfFormArray = this.fb.array([]);
  @Input() public udfData: UdfDefinition[];
  @Input() public udfFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.udfFormGroup.addControl('udfFormArray', this.udfFormArray);
    this.udfData.forEach((data) => {
      this.udfFormArray.push(this.fb.group(
        {
          name: data.custom_field.name,
          value: data.custom_field.default_value
        } as UdfValue
      ));
    });
  }
}