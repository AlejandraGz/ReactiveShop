import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCheckout } from './formulario-checkout';

describe('FormularioCheckout', () => {
  let component: FormularioCheckout;
  let fixture: ComponentFixture<FormularioCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCheckout],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCheckout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
