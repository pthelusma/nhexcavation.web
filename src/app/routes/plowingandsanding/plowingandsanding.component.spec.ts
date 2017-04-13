import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlowingandsandingComponent } from './plowingandsanding.component';

describe('PlowingandsandingComponent', () => {
  let component: PlowingandsandingComponent;
  let fixture: ComponentFixture<PlowingandsandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlowingandsandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlowingandsandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
