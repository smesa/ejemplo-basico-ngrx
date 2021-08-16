import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/reducers';
import * as actions from 'src/app/stores/asistentes.actions';
import { AsistentesSelectors } from '../stores/asistentes.selectors';

@Injectable()
export class AsistentesFacade {

  listas$ = this.store.select(AsistentesSelectors.lista);

  constructor(
    private store: Store<AppState>,
  ) { }

  addAsistente(data: string): void {
    this.store.dispatch(actions.addAsistentes({ data}));
  }

  removeAsistente(index: number): void {
    this.store.dispatch(actions.removeAsistente({index}));
  }


}
