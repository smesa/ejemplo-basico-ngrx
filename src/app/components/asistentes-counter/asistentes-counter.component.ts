import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsistentesFacade } from 'src/app/facades/asistentes.facade';
import { AsistentesSelectors } from 'src/app/stores/asistentes.selectors';
import { AppState } from 'src/app/stores/reducers';

@Component({
  selector: 'app-asistentes-counter',
  templateUrl: './asistentes-counter.component.html',
  styleUrls: ['./asistentes-counter.component.scss']
})
export class AsistentesCounterComponent implements OnInit {

  listas$ = this.asistentesFacade.listas$;

  constructor(
    private asistentesFacade: AsistentesFacade,
  ) { }

  ngOnInit() {}

}
