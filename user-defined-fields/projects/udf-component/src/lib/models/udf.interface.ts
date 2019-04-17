import { FormGroup } from '@angular/forms';
import { UdfFieldDefinition } from './udf.definition.interface';

export interface UdfField {
  config: UdfFieldDefinition;
  group: FormGroup;
}
