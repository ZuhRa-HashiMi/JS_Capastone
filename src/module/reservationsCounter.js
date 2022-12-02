export default class ReservationsCounter {
  constructor(reservations) {
    this.reservations = reservations;
  }

  getLength() {
    return this.reservations.length;
  }
}
