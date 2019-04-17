import { ValidatorFn } from '@angular/forms';
export interface UdfFieldDefinition {
  type: string;
  name: string;
  default_value: any;
  placeholder?: string;
  disabled?: boolean;
  icon?: string;
  options?: any[];
  validation?: ValidatorFn[];
}
