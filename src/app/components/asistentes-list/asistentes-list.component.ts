import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsistentesFacade } from 'src/app/facades/asistentes.facade';
import { AsistentesSelectors } from 'src/app/stores/asistentes.selectors';
import { AppState } from 'src/app/stores/reducers';

@Component({
  selector: 'app-asistentes-list',
  templateUrl: './asistentes-list.component.html',
  styleUrls: ['./asistentes-list.component.scss']
})
export class AsistentesListComponent implements OnInit {

  name: string;
  listas$ = this.asistentesFacade.listas$;

  constructor(
    private asistentesFacade: AsistentesFacade,
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.asistentesFacade.addAsistente(this.name);
    this.name = '';
  }

  remove(index: number): void {
    console.log(index);
    this.asistentesFacade.removeAsistente(index);
  }

}
