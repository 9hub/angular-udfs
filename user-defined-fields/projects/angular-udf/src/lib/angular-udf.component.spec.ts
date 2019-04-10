import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUdfComponent } from './angular-udf.component';

describe('AngularUdfComponent', () => {
  let component: AngularUdfComponent;
  let fixture: ComponentFixture<AngularUdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularUdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
