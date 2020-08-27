import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauxComponent } from './chaux.component';

describe('ChauxComponent', () => {
  let component: ChauxComponent;
  let fixture: ComponentFixture<ChauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
