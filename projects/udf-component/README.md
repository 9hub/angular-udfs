
User Defined Fields are for capturing your custom data. These can then be added at the project, task and some business object on our technology solution.

## getting started
| Install:                    |
| --------------------------- |
```batch
npm i @9hub/udf-component --save
```
## requirements

| Peer Dependencies:|
| --------------------------------------------------------------------- |

```batch
npm install --save @angular/material @angular/cdk @angular/animations
ng add @angular/material
```

| API:                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------- |
```typescript
import { UdfModule } from '@9hub/udf-component'
```

Use *udf-md* to show a list of custom fields, in udf Data you receive the array of custom fields according interface *UdfFieldDefinition*, in udfFormGroup you receive a FormGroup object.
```html
<udf-md [udfData]="input-array-definition-interface" [udfFormGroup]="object-FormGrup" >  </udf-md>
```
Use *udf-field-md* to handling the layout of custom fields, in field config you receive the udf configuration according the interface *UdfFieldDefinition*, in udfFormGroup you receive a FormGroup object.
```html
<!-- ADDRESS SECTION -->
  <mat-card class="card-form" fxFlex="auto">
    <div class="header-text">Address</div>
    <mat-card-content fxLayout="column">
      <!-- LINE 1 INPUT -->
      <udf-field-md [fieldConfig]="AddressLine1" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
      <!-- LINE 2 INPUT -->
      <udf-field-md [fieldConfig]="AddressLine2" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
      <div fxLayout="row wrap">
        <!-- CITY INPUT -->
        <div fxFlex="50%">
          <udf-field-md [fieldConfig]="City" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
        </div>
        <!-- STATE INPUT -->
        <div fxFlex="50%">
          <udf-field-md [fieldConfig]="State" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
        </div>
      </div>
      <div fxLayout="row wrap">
         <!-- COUNTRY INPUT -->
         <div fxFlex="50%">
           <udf-field-md [fieldConfig]="Country" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
         </div>
        <!-- POSTCODE INPUT -->
        <div fxFlex="50%">
          <udf-field-md [fieldConfig]="PostCode" [udfFormGroup]="udfFieldFormGroup" ></udf-field-md>
        </div>
      </div>
    </mat-card-content>
  </mat-card>
```
