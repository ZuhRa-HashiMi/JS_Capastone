import ReservationsCounter from './counter.js';

const reservationBtn = document.querySelector('.reservation-btn');
const modal = document.querySelector('.modal');

const hideModalOnLoad = () => {
  window.addEventListener('DOMContentLoaded', () => {
    modal.style.display = 'none';
  });
};

const updateReservationsList = async () => {
  const reservations = document.querySelector('.reservations');
  const itemID = 7005;
  const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qwFEh0Dwu7LrqmgqtV9u/reservations/?item_id=${itemID}`;

  const data = await fetch(endpoint);
  const items = await data.json();

  reservations.innerHTML = '';
  const counts = document.querySelector('.counts');

  const countReservations = new ReservationsCounter(items);

  counts.innerText = countReservations.getLength();

  items.forEach((item) => {
    const content = `
    <p>${item.date_start} - ${item.date_end} by ${item.username}</p>
    `;
    reservations.innerHTML += content;
  });
};

const displayReservationModal = () => {
  reservationBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    updateReservationsList();
  });
};

const closeModal = () => {
  const closeBtn = document.querySelector('#closeBtn');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

const recoredReservation = async (id, username, startDate, endDate) => {
  const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qwFEh0Dwu7LrqmgqtV9u/reservations';

  await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username,
      date_start: startDate,
      date_end: endDate,
    }),
  });
};

const addReservation = () => {
  const form = document.querySelector('.reservation-form');
  const username = document.querySelector('.name');
  const startDate = document.querySelector('.start-date');
  const endDate = document.querySelector('.end-date');
  const reserveBtn = document.querySelector('.reserve-btn');

  reserveBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    await recoredReservation(7005, username.value, startDate.value, endDate.value);

    await updateReservationsList();

    form.reset();
  });
};

export {
  displayReservationModal,
  closeModal,
  addReservation,
  hideModalOnLoad,
  updateReservationsList,
};