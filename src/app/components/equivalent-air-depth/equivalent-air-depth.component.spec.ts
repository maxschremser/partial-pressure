import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalentAirDepthComponent } from './equivalent-air-depth.component';

describe('EquivalentAirDepthComponent', () => {
  let component: EquivalentAirDepthComponent;
  let fixture: ComponentFixture<EquivalentAirDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalentAirDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalentAirDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
