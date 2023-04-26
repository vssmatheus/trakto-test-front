import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesign } from 'src/app/shared/models/design.model';

@Component({
  selector: 'app-ver-todas-aulas',
  templateUrl: './ver-todas-aulas.component.html',
  styleUrls: ['./ver-todas-aulas.component.scss'],
})
export class VerTodasAulasComponent {
  @Input()
  public materiaisDidaticos!: Observable<IDesign[]>;
}
