# Angular UDF

Angular library to use UDF(User Defined Fields). UDF are for capturing your custom data, these can then be added at the project, task and some business object on our technology solution.

### Prerequisites

To use this library you need to have installed **angular-material**.

Using NPM:

```batch
npm i @angular/material @angular/cdk
```

Using Yarn:

```batch
yarn add @angular/material @angular/cdk
```
If you have **angular-cli** installed:

```batch
ng add @angular/material
```
If you have any issue with **angular-material** installation, please refer to [getting-started](https://material.angular.io/guide/getting-started).

### Installing

Using NPM:

```batch
npm i @9hub/udf-component
```

Using Yarn:

```batch
yarn add @9hub/udf-component
```

### Usage

You need import our module and add to your Angular's main module.

```typescript
import { UdfModule } from '@9hub/udf-component'

@NgModule({
  imports: [
    ...
    UdfModule
    ...
  ]
})
```
Use **udf-md** to show a list of custom fields, in udf Data you receive the array of custom fields according interface **UdfFieldDefinition**, in **udfFormGroup** you receive a **FormGroup** object.

```html
<udf-md [udfData]="input-array-definition-interface" [udfFormGroup]="object-FormGrup"></udf-md>
```

Use **udf-field-md** to handling the layout of custom fields, in field config you receive the udf configuration according the interface **UdfFieldDefinition**, in **udfFormGroup** you receive a **FormGroup** object.

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

## Built With

* [Angular](https://angular.io/docs) - The web framework used
* [Angular Material](https://material.angular.io) - Material design components

## Contributors
<a href="CONTRIBUTORS.md">
  <img alt="Erik Romero" width="100" height="100" src="https://avatars.githubusercontent.com/u/12468239">

  <img alt="Edwin Encinas" width="100" height="100" src="https://avatars.githubusercontent.com/u/6945588">

  <img alt="Edwin Paye" width="100" height="100" src="https://avatars.githubusercontent.com/u/36751445">

  <img alt="Jesus Paye" width="100" height="100" src="https://avatars.githubusercontent.com/u/32722003">
</a>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
