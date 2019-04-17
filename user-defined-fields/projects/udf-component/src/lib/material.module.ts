import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker'
import {
  MatNativeDateModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ]
})
export class MaterialModule { }
