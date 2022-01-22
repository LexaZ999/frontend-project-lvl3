import handlerBtnView from './handlerBtnView';

const addEventViewButtons = (watchedState) => {
  const buttonsView = document.querySelectorAll('[data-bs-toggle="modal"]');

  buttonsView.forEach((btn) => {
    btn.addEventListener('click', handlerBtnView(watchedState));
  });
};

export default addEventViewButtons;
