import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistentesListComponent } from './asistentes-list.component';

describe('AsistentesListComponent', () => {
  let component: AsistentesListComponent;
  let fixture: ComponentFixture<AsistentesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistentesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistentesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
