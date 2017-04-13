import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorativestoneComponent } from './decorativestone.component';

describe('DecorativestoneComponent', () => {
  let component: DecorativestoneComponent;
  let fixture: ComponentFixture<DecorativestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorativestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorativestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
