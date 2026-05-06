import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCarrito } from './pagina-carrito';

describe('PaginaCarrito', () => {
  let component: PaginaCarrito;
  let fixture: ComponentFixture<PaginaCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCarrito],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaCarrito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
