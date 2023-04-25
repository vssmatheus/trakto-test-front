import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodasAulasComponent } from './ver-todas-aulas.component';

describe('VerTodasAulasComponent', () => {
  let component: VerTodasAulasComponent;
  let fixture: ComponentFixture<VerTodasAulasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTodasAulasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTodasAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
