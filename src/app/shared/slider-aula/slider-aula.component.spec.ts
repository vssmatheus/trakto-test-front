import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAulaComponent } from './slider-aula.component';

describe('SliderAulaComponent', () => {
  let component: SliderAulaComponent;
  let fixture: ComponentFixture<SliderAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
