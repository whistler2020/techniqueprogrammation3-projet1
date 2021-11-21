import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miniforfait5Component } from './miniforfait5.component';

describe('Miniforfait5Component', () => {
  let component: Miniforfait5Component;
  let fixture: ComponentFixture<Miniforfait5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Miniforfait5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Miniforfait5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
