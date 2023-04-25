import { Component } from '@angular/core';

@Component({
  selector: 'page-abertura',
  templateUrl: './abertura.component.html',
  styleUrls: ['./abertura.component.scss'],
})
export class AberturaComponent {
  buttons = [
    {
      name: 'Material didático',
      image: '../../../assets/abertuta/material-didatico.svg',
      route: '/material-didatico',
      color: '#4173CD',
    },
    {
      name: 'Quiz',
      image: '../../../assets/abertuta/quiz.svg',
      route: '/#',
      color: '#1DC763',
    },
    {
      name: 'Desenho',
      image: '../../../assets/abertuta/desenho.svg',
      route: '/#',
      color: '#F6B5FF',
    },
    {
      name: 'Youtube',
      image: '../../../assets/abertuta/youtube.svg',
      route: '/#',
      color: '#FF0000',
    },
  ];
}
