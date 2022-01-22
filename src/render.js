import addStylesForViewedPosts from './addStylesForViewedPosts.js';
import createFeeds from './createFeeds.js';
import createPosts from './createPosts.js';

const render = (state, i18nextInstance) => (path, value) => {
  const urlInput = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  const divFeeds = document.querySelector('.feeds');
  const divPosts = document.querySelector('.posts');
  const submitButton = document.querySelector('.rss-form [type="submit"]');
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  const modalLink = document.querySelector('.full-article');

  switch (path) {
    case 'rssForm.state':
      feedback.textContent = i18nextInstance.t(`feedback.${value}`);
      if (value === 'added') {
        urlInput.classList.remove('is-invalid');
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');
      } else {
        urlInput.classList.add('is-invalid');
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
      }
      break;

    case 'rssForm.feeds':
      document.querySelector('.rss-form').reset();
      urlInput.focus();
      break;

    case 'feeds':
      divFeeds.innerHTML = createFeeds(state, i18nextInstance).outerHTML;
      break;

    case 'posts':
      divPosts.innerHTML = createPosts(state, i18nextInstance).outerHTML;
      break;

    case 'isFormBlocked':
      if (value) {
        submitButton.disabled = true;
        urlInput.setAttribute('readonly', 'readonly');
      } else {
        submitButton.disabled = false;
        urlInput.removeAttribute('readonly');
      }
      break;

    case 'modal':
      modalTitle.textContent = state.modal.title;
      modalBody.textContent = state.modal.description;
      modalLink.setAttribute('href', state.modal.link);
      break;

    case 'viewedPosts':
      addStylesForViewedPosts(state);
      break;

    default:
      break;
  }
};

export default render;
