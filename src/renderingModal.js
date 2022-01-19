import onChange from 'on-change';
import addStylesForViewedPosts from './addStylesForViewedPosts';

const renderingModal = (state) => {
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  const modalLink = document.querySelector('.full-article');

  const watchedStateModal = onChange(state, () => {
    modalTitle.textContent = state.modal.title;
    modalBody.textContent = state.modal.description;
    modalLink.setAttribute('href', state.modal.link);

    addStylesForViewedPosts(state);
  });
  return watchedStateModal;
};

export default renderingModal;
