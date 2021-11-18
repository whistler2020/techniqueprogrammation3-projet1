import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitcompletComponent } from './forfaitcomplet.component';

describe('ForfaitcompletComponent', () => {
  let component: ForfaitcompletComponent;
  let fixture: ComponentFixture<ForfaitcompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitcompletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitcompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
