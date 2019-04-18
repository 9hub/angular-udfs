import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';

import { UdfField } from '../models/udf.interface';
import { UdfFieldDefinition } from '../models/udf.definition.interface';


@Component({
  selector: 'udf-mselect',
  styleUrls: [ './udf-item.component.css' ],
  template: `
    <mat-form-field class="udf-item">
      <mat-chip-list #chipList>
        <mat-chip
          *ngFor="let option of selectedOptions"
          [selectable]="selectable"
          [removable]="removable"
          (removed)="remove(option)">
          {{option}}
          <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
        </mat-chip>
        <input
          [placeholder]="config.placeholder"
          #optionInput
          [formControl]="inputTextCtrl"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="add($event)"
          autocomplete="none">
      </mat-chip-list>
      <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{option}}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
  `
})
export class MultiSelectComponent implements UdfField, AfterViewInit, OnInit {
  config: UdfFieldDefinition;
  group: FormGroup;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  multiSelectControl: FormControl;
  inputTextCtrl: FormControl;
  filteredOptions: Observable<string[]>;
  selectedOptions: string[];
  allOptions: string[];

  @ViewChild('optionInput') optionInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {}

  ngOnInit(): void {
    this.selectedOptions = Object.assign([], this.config.default_value);
    this.inputTextCtrl = new FormControl();
  }

  ngAfterViewInit(): void {
    this.allOptions = this.config.options;
    this.multiSelectControl = this.group.get(this.config.name) as FormControl;
    this.multiSelectControl.setValue(this.selectedOptions);
    this.filteredOptions = this.inputTextCtrl.valueChanges.pipe(
      startWith(null),
      delay(0),
      map((option: string | null) => option ? this._filter(option) : this.allOptions.slice())
    );
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        this.selectedOptions.push(value.trim());
      }
      if (input) {
        input.value = '';
      }
      this.inputTextCtrl.setValue(null);
    }
  }

  remove(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push(event.option.viewValue);
    this.optionInput.nativeElement.value = '';
    this.inputTextCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
