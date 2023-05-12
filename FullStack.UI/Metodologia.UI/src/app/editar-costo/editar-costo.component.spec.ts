import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCostoComponent } from './editar-costo.component';

describe('EditarCostoComponent', () => {
  let component: EditarCostoComponent;
  let fixture: ComponentFixture<EditarCostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCostoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
