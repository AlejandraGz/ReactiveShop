import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenProducto } from './imagen-producto';

describe('ImagenProducto', () => {
  let component: ImagenProducto;
  let fixture: ComponentFixture<ImagenProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenProducto],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
