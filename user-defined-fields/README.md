
| INSTALL:                    |
| --------------------------- |
```batch
npm i @9hub/udf-component --save
```


| You need to import the following dependencies:|
| --------------------------------------------------------------------- |

```batch
npm install --save @angular/material @angular/cdk @angular/animations
ng add @angular/material
```


| It is very important that you copy the following code in your main styles.css file:|
| ----------------------------------------------------------------- |
```css
@import "~@angular/material/prebuilt-themes/deeppurple-amber.css"
```

| API:                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------- |
For your use you need to import the library in the following way
```typescript
import { UdfModule } from '@9hub/udf-component'
```
For its use you need to paste the tag, in udf Data you receive the array of the interface definition, in udfFormGroup you receive a FormGroup object
```html
<lib-angular-udf [udfData]="input-array-definition-interface" [udfFormGroup]="object-FormGrup" >  </lib-angular-udf>
```
