import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-slider-aula',
  templateUrl: './slider-aula.component.html',
  styleUrls: ['./slider-aula.component.scss'],
})
export class SliderAulaComponent {
  items = [
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
    {
      image:
        'https://noticiasconcursos.com.br/wp-content/uploads/2021/08/noticiasconcursos.com.br-trakto-anuncia-vagas-presenciais-e-remotas-banner-thumb-post-trakto.jpg',
      description: 'Aula 1: Fono-ortografia',
    },
  ];
  imagePosition = 0;
  startDraggingPosition = 0;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.startDraggingPosition = event.clientX;
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.startDraggingPosition) {
      const dragDistance = event.clientX - this.startDraggingPosition;
      this.imagePosition += dragDistance;
      this.startDraggingPosition = event.clientX;
      if (this.imagePosition < this.items.length * -178) {
        this.startDraggingPosition = 0;
        this.imagePosition = this.items.length * -178;
      }
    }
    if (this.imagePosition > this.items.length + 1) {
      this.startDraggingPosition = 0;
      this.imagePosition = 0;
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (event.button === 0) {
      this.startDraggingPosition = 0;
    }
  }
}
