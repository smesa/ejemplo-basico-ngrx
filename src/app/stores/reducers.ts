import { ActionReducerMap } from '@ngrx/store';
import { asistentesReducer, AsistentesState } from './asistentes.reducer';

export interface AppState {
  asistentes: AsistentesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  asistentes: asistentesReducer,
};
