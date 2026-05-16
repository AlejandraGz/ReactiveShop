import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCarrito } from './sidebar-carrito';

describe('SidebarCarrito', () => {
  let component: SidebarCarrito;
  let fixture: ComponentFixture<SidebarCarrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarCarrito],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarCarrito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
