import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormTextComponent } from './components/field.text';
import { FormSelectComponent } from './components/field.select';
import { FormAnyTextComponent } from './components/field.anytext';
import { FormNumberComponent } from './components/field.number';
import { FormDateComponent } from './components/field.date';
import { FormYesOrNoComponent } from './components/field.yesorno';
import { MultiSelectComponent } from './components/multi-select.component';

import { UdfField } from './models/udf.interface';
import { UdfFieldDefinition } from './models/udf.definition.interface';


const components: {[type: string]: Type<UdfField>} = {
  TEXT: FormTextComponent,
  ANY_TEXT: FormAnyTextComponent,
  LIST_OF_VALUES: FormSelectComponent,
  NUMBER: FormNumberComponent,
  DATE: FormDateComponent,
  YES_OR_NO: FormYesOrNoComponent,
  MULTI_SELECT: MultiSelectComponent
};

@Directive({
  selector: '[udf-field]'
})
export class UdfFieldDirective implements UdfField, OnChanges, OnInit {
  @Input()
  config: UdfFieldDefinition;

  @Input()
  group: FormGroup;

  private component: ComponentRef<UdfField>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit(): void {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<UdfField>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
