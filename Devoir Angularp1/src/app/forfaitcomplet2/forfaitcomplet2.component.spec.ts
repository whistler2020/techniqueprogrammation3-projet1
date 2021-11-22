import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forfaitcomplet2Component } from './forfaitcomplet2.component';

describe('Forfaitcomplet2Component', () => {
  let component: Forfaitcomplet2Component;
  let fixture: ComponentFixture<Forfaitcomplet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forfaitcomplet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forfaitcomplet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
