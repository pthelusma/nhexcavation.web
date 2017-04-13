import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkmulchComponent } from './barkmulch.component';

describe('BarkmulchComponent', () => {
  let component: BarkmulchComponent;
  let fixture: ComponentFixture<BarkmulchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarkmulchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarkmulchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
