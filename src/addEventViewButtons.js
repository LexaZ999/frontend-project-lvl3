import handlerBtnView from './handlerBtnView';

const addEventViewButtons = (state) => {
  const buttonsView = document.querySelectorAll('[data-bs-toggle="modal"]');

  buttonsView.forEach((btn) => {
    btn.addEventListener('click', handlerBtnView(state));
  });
};

export default addEventViewButtons;
