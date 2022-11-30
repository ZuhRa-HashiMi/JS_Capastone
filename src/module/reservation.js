const reservationBtn = document.querySelector('.reservation-btn');
const modal = document.querySelector('.modal');

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

export { displayReservationModal, closeModal };