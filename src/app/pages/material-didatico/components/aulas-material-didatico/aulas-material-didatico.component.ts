import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesign } from 'src/app/shared/models/design.model';

@Component({
  selector: 'app-aulas-material-didatico',
  templateUrl: './aulas-material-didatico.component.html',
  styleUrls: ['./aulas-material-didatico.component.scss'],
})
export class AulasMaterialDidaticoComponent {
  @Input()
  public materiaisDidaticos!: Observable<IDesign[]>;
}
