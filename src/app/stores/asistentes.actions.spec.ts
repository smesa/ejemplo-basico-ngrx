import * as fromAsistentes from './asistentes.actions';

describe('loadAsistentess', () => {
  it('should return an action', () => {
    expect(fromAsistentes.loadAsistentess().type).toBe('[Asistentes] Load Asistentess');
  });
});
