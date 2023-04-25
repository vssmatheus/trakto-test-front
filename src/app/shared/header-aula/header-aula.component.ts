import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-aula',
  templateUrl: './header-aula.component.html',
  styleUrls: ['./header-aula.component.scss'],
})
export class HeaderAulaComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() date?: string;
  @Input() nameButton?: string;
  @Input() pathButton?: string;
  @Input() colorButton?: string;
  @Input() iconButton?: string;
  @Input() hasIconButton?: string;
}
