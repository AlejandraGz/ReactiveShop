import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPagado } from './carrito-pagado';

describe('CarritoPagado', () => {
  let component: CarritoPagado;
  let fixture: ComponentFixture<CarritoPagado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPagado],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPagado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
