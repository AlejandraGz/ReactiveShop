import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProducto } from './info-producto';

describe('InfoProducto', () => {
  let component: InfoProducto;
  let fixture: ComponentFixture<InfoProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProducto],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
