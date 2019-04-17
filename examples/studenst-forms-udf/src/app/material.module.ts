import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ScrollingModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ScrollingModule
  ]
})
export class AppMaterialModule { }
