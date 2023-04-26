import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasMaterialDidaticoComponent } from './aulas-material-didatico.component';

describe('AulasMaterialDidaticoComponent', () => {
  let component: AulasMaterialDidaticoComponent;
  let fixture: ComponentFixture<AulasMaterialDidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulasMaterialDidaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulasMaterialDidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
