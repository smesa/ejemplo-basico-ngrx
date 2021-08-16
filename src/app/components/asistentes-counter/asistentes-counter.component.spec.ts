import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistentesCounterComponent } from './asistentes-counter.component';

describe('AsistentesCounterComponent', () => {
  let component: AsistentesCounterComponent;
  let fixture: ComponentFixture<AsistentesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistentesCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistentesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
