import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-navigator-abertura',
  templateUrl: './button-navigator-abertura.component.html',
  styleUrls: ['./button-navigator-abertura.component.scss'],
})
export class ButtonNavigatorAberturaComponent {
  @Input() name?: string;
  @Input() image?: string;
  @Input() route?: string;
  @Input() color?: string;
}
