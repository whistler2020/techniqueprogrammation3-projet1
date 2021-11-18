import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesearcheComponent } from './formulairesearche.component';

describe('FormulairesearcheComponent', () => {
  let component: FormulairesearcheComponent;
  let fixture: ComponentFixture<FormulairesearcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairesearcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairesearcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
