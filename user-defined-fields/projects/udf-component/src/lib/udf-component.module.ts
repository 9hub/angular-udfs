import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatSlideToggleModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

import { UdfComponent } from './udf-component.component';

@NgModule({
  declarations: [UdfComponent],
  imports: [
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  exports: [UdfComponent]
})
export class UdfModule { }
