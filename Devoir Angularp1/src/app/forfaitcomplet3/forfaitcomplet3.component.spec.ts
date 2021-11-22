import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfaitcomplet3Component } from './forfaitcomplet3.component';

describe('Forfaitcomplet3Component', () => {
  let component: Forfaitcomplet3Component;
  let fixture: ComponentFixture<Forfaitcomplet3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forfaitcomplet3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfaitcomplet3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
