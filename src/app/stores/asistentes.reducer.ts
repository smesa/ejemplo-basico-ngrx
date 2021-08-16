import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './asistentes.actions';

export interface AsistentesState {
  lista: Array<string>;
}

export const AsistentesInitialState: AsistentesState = {
  lista: [],
};

const reducerDefinition = createReducer(

  AsistentesInitialState,
  on(actions.addAsistentes, (state, {data}) => ({
    ...state,
    lista: [...state.lista, data],
  })),
  on(actions.removeAsistente, (state, {index}) => ({
    ...state,
    lista: state.lista.filter((item, i) => i !== index)
  }))

);

export function asistentesReducer(state: AsistentesState, action: Action) {
  return reducerDefinition(state, action);
}
