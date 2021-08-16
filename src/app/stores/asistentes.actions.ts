import { createAction, props } from '@ngrx/store';

export const loadAsistentes = createAction(
  '[Asistentes] Load Asistentes'
);

export const addAsistentes = createAction(
  '[Asistentes] Add Asistente',
  props<{ data: string }>()
);

export const removeAsistente = createAction(
  '[Asistentes] Remove Asistent',
  props<{ index: number }>()
);



