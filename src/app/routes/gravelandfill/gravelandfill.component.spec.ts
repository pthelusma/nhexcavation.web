import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravelandfillComponent } from './gravelandfill.component';

describe('GravelandfillComponent', () => {
  let component: GravelandfillComponent;
  let fixture: ComponentFixture<GravelandfillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravelandfillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravelandfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
