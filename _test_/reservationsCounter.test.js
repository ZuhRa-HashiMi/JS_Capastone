import ReservationsCounter from '../src/module/reservationsCounter.js';

describe('Check reservations count', () => {
  test('return number of items in array', () => {
    const reservations = ['reservation1', 'reservation2', 'reservation3', 'reservation4'];

    const countReservations = new ReservationsCounter(reservations);
    expect(countReservations.getLength()).toEqual(4);
  });
});