import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMaterialDidaticoComponent } from './videos-material-didatico.component';

describe('VideosMaterialDidaticoComponent', () => {
  let component: VideosMaterialDidaticoComponent;
  let fixture: ComponentFixture<VideosMaterialDidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosMaterialDidaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosMaterialDidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
