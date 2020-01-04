import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaximumOperatingDepthComponent } from './maximum-operating-depth.component';

describe('MaximumOperatingDepthComponent', () => {
  let component: MaximumOperatingDepthComponent;
  let fixture: ComponentFixture<MaximumOperatingDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaximumOperatingDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaximumOperatingDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
