import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroPlanillasComponent } from './centro-planillas.component';

describe('CentroPlanillasComponent', () => {
  let component: CentroPlanillasComponent;
  let fixture: ComponentFixture<CentroPlanillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroPlanillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentroPlanillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
