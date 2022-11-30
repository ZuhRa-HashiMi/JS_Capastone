import { ContextExclusionPlugin } from "webpack";

const reservationBtn = document.querySelector('.reservation-btn');
const modal = document.querySelector('.modal');
const apiId = 'qwFEh0Dwu7LrqmgqtV9u'

const displayReservationModal = () => {
  reservationBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
};

const closeModal = () => {
  const closeBtn = document.querySelector('#closeBtn');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};


const recoredReservation = async ( name, startDate, endDate,) => {
    
  let endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qwFEh0Dwu7LrqmgqtV9u/reservations`

  await fetch(endpoint, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      item_id: id,
      username: name,
      date_start: startDate,
      date_end: endDate
    })
  })
  .then((res) => console.log(res))
  // .then((data) => conslole.log(data.json()))
}

const addReservation = () => {
    const form = document.querySelector('form');
    const name = document.querySelector('.name');
    const startDate = document.querySelector('.start-date');
    const endDate = document.querySelector('.end-date');
    const reserveBtn = document.querySelector('.reserve-btn');

    reserveBtn.addEventListener('click', (e) => {
        e.preventDefault();

        recoredReservation( name.value, startDate.value, endDate.value)
    })

    form.reset()

}

export { displayReservationModal, closeModal, addReservation };