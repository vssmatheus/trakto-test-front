import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-video',
  templateUrl: './slider-video.component.html',
  styleUrls: ['./slider-video.component.scss'],
})
export class SliderVideoComponent {
  videos = [
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      thumb:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      video:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfmzhJFZvWhtLtBiKNstLv1D2ds3MHx-61w&usqp=CAU',
      description: 'Aula 1: Fono-ortografia',
    },
  ];
  videoPosition = 0;
  draggingPosition = 0;

  @ViewChild('slider', { static: true }) slider!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.slider.nativeElement = '';
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.draggingPosition = event.clientX;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.draggingPosition) {
      const dragDistance = event.clientX - this.draggingPosition;
      this.videoPosition += dragDistance;
      this.draggingPosition = event.clientX;
      if (this.videoPosition < this.videos.length * -178) {
        this.draggingPosition = 0;
        this.videoPosition = this.videos.length * -178;
      }
    }
    if (this.videoPosition > this.videos.length + 1) {
      this.draggingPosition = 0;
      this.videoPosition = 0;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (event.button === 0) {
      this.draggingPosition = 0;
    }
  }
}
