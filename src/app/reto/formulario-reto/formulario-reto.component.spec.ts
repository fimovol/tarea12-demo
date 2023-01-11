import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRetoComponent } from './formulario-reto.component';

describe('FormularioRetoComponent', () => {
  let component: FormularioRetoComponent;
  let fixture: ComponentFixture<FormularioRetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRetoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
