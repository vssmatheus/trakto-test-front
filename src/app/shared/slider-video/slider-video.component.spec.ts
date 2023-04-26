import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderVideoComponent } from './slider-video.component';

describe('SliderVideoComponent', () => {
  let component: SliderVideoComponent;
  let fixture: ComponentFixture<SliderVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
