import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiliceComponent } from './silice.component';

describe('SiliceComponent', () => {
  let component: SiliceComponent;
  let fixture: ComponentFixture<SiliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
