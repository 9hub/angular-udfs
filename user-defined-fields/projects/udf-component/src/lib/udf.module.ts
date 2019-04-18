import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule  } from './material.module';
import { UdfFieldDirective } from './udf.field.directive';
import { UdfsComponent } from './udf.component';
import { UdfComponent } from './udf.field.component';

import { FormTextComponent } from './components/field.text';
import { FormSelectComponent } from './components/field.select';
import { FormAnyTextComponent } from './components/field.anytext';
import { FormNumberComponent } from './components/field.number';
import { FormDateComponent } from './components/field.date';
import { FormYesOrNoComponent } from './components/field.yesorno';
import { MultiSelectComponent } from './components/multi-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
  ],
  declarations: [
    UdfFieldDirective,
    UdfComponent,
    UdfsComponent,
    FormTextComponent,
    FormSelectComponent,
    FormAnyTextComponent,
    FormNumberComponent,
    FormDateComponent,
    FormYesOrNoComponent,
    MultiSelectComponent
  ],
  exports: [
    UdfsComponent,
    UdfComponent
  ],
  entryComponents: [
    FormTextComponent,
    FormSelectComponent,
    FormAnyTextComponent,
    FormNumberComponent,
    FormDateComponent,
    FormYesOrNoComponent,
    MultiSelectComponent
  ]
})
export class UdfModule {}
