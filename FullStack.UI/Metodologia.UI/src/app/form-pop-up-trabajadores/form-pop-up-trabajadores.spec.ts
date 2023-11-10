import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPopUpTrabajadoresComponent } from './form-pop-up-trabajadores.component';

describe('FormPopUpComponent', () => {
  let component: FormPopUpTrabajadoresComponent;
  let fixture: ComponentFixture<FormPopUpTrabajadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPopUpTrabajadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPopUpTrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
