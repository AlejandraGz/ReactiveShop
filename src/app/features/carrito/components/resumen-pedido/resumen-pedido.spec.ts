import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPedido } from './resumen-pedido';

describe('ResumenPedido', () => {
  let component: ResumenPedido;
  let fixture: ComponentFixture<ResumenPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenPedido],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenPedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
