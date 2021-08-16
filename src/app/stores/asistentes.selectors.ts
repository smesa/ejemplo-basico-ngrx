import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { AsistentesState } from './asistentes.reducer';

const selectAsistentes = createFeatureSelector<AsistentesState>('asistentes');

const lista = createSelector(
  selectAsistentes,
  (state: AsistentesState) => state.lista
);


export const AsistentesSelectors = {
  lista
};
