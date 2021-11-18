import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairegestionComponent } from './formulairegestion.component';

describe('FormulairegestionComponent', () => {
  let component: FormulairegestionComponent;
  let fixture: ComponentFixture<FormulairegestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairegestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairegestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
