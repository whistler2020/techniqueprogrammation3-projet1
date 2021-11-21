import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait4Component } from './miniforfait4.component';

describe('Miniforfait4Component', () => {
  let component: Miniforfait4Component;
  let fixture: ComponentFixture<Miniforfait4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
