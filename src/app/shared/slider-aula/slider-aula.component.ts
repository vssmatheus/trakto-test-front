import { AfterViewInit, Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { IDesign } from '../models/design.model';

@Component({
  selector: 'app-slider-aula',
  templateUrl: './slider-aula.component.html',
  styleUrls: ['./slider-aula.component.scss'],
})
export class SliderAulaComponent implements AfterViewInit {
  @Input()
  public materiaisDidaticos: Observable<IDesign[]> = new Observable();

  items: any[] = [];
  imagePosition = 0;
  startDraggingPosition = 0;

  startClickX = 0;
  endClickX = 0;

  constructor(private readonly _router: Router) {}

  ngAfterViewInit(): void {
    this.materiaisDidaticos
      .pipe(take(1))
      .subscribe((res) => (this.items = res));
  }

  ngOnInit(): void {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.startClickX = event.clientX;

    if (event.button === 0) {
      this.startDraggingPosition = event.clientX;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    event.preventDefault();

    if (this.startDraggingPosition) {
      const dragDistance = event.clientX - this.startDraggingPosition;
      this.imagePosition += dragDistance;
      this.startDraggingPosition = event.clientX;
      if (this.imagePosition < this.items.length * -220) {
        this.startDraggingPosition = 0;
        this.imagePosition = this.items.length * -220;
      }
    }
    if (this.imagePosition > this.items.length + 1) {
      this.startDraggingPosition = 0;
      this.imagePosition = 0;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    event.preventDefault();
    this.endClickX = event.clientX;

    if (event.button === 0) {
      this.startDraggingPosition = 0;
    }
  }

  editDesign(desginId: string) {
    if (this.startClickX === this.endClickX) {
      window.open(`https://editor.trakto.io/editor/${desginId}`);
    }
  }
}
