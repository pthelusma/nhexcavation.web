import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushedstoneComponent } from './crushedstone.component';

describe('CrushedstoneComponent', () => {
  let component: CrushedstoneComponent;
  let fixture: ComponentFixture<CrushedstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrushedstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrushedstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
