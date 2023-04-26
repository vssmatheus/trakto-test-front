import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-router',
  templateUrl: './button-router.component.html',
  styleUrls: ['./button-router.component.scss'],
})
export class ButtonRouterComponent {
  @Input() name?: string;
  @Input() path?: string;
  @Input() pathImage?: string;
  @Input() colorBase?: string;
  @Input() hasIcon?: any;
}
