export interface CustomField {
  type: string;
  name: string;
  index: number;
  default_value: string;
  options: string[];
}

export interface UdfDefinition {
  tenant_id: string;
  table_name: string;
  custom_field: CustomField;
}
