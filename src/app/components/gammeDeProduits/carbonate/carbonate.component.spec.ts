import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonateComponent } from './carbonate.component';

describe('CarbonateComponent', () => {
  let component: CarbonateComponent;
  let fixture: ComponentFixture<CarbonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
