import { AfterViewInit, Component, Input } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IDesign } from 'src/app/shared/models/design.model';

@Component({
  selector: 'app-ver-todos-list',
  templateUrl: './ver-todos-list.component.html',
  styleUrls: ['./ver-todos-list.component.scss'],
})
export class VerTodosListComponent implements AfterViewInit {
  @Input()
  public materiaisDidaticos: Observable<IDesign[]> = new Observable();
  items: any[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.materiaisDidaticos
      .pipe(take(1))
      .subscribe((res) => (this.items = res));
  }

  ngOnInit(): void {}
}
