import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait6Component } from './miniforfait6.component';

describe('Miniforfait6Component', () => {
  let component: Miniforfait6Component;
  let fixture: ComponentFixture<Miniforfait6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
