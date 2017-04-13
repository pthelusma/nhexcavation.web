import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardscapesComponent } from './hardscapes.component';

describe('HardscapesComponent', () => {
  let component: HardscapesComponent;
  let fixture: ComponentFixture<HardscapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardscapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
