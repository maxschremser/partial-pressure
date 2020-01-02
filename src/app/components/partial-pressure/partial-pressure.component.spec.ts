import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialPressureComponent } from './partial-pressure.component';

describe('PartialPressureComponent', () => {
  let component: PartialPressureComponent;
  let fixture: ComponentFixture<PartialPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
