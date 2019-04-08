
| INSTALL:                    |
| --------------------------- |
| npm i angular-udf           |


| You need to import the following dependencies:|
| --------------------------------------------------------------------- |
| npm install --save @angular/material @angular/cdk @angular/animations |
| ng add @angular/material                                              |
|                                                                       |


| It is very important that you copy the following code in your main styles.css file:|
| ----------------------------------------------------------------- |
| @import "~@angular/material/prebuilt-themes/deeppurple-amber.css";|


| API:                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------- |
| import { AngularUdfModule } from 'angular-udf'                                                                        |
| <lib-angular-udf [udfData]="input-array-definition-interface" [udfFormGroup]="object-FormGrup" >  </ lib-angular-udf> |
