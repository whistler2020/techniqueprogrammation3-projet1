import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreEtoileComponent } from './nombre-etoile.component';

describe('NombreEtoileComponent', () => {
  let component: NombreEtoileComponent;
  let fixture: ComponentFixture<NombreEtoileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NombreEtoileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreEtoileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
