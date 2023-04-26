import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTodosListComponent } from './ver-todos-list.component';

describe('VerTodosListComponent', () => {
  let component: VerTodosListComponent;
  let fixture: ComponentFixture<VerTodosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTodosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
