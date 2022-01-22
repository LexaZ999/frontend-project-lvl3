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

  if (path === 'rssForm.state') {
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
  }
  if (path === 'rssForm.feeds') {
    document.querySelector('.rss-form').reset();
    urlInput.focus();
  }
  if (path === 'feeds') {
    const feeds = createFeeds(state, i18nextInstance);
    divFeeds.innerHTML = feeds.outerHTML;
  }
  if (path === 'posts') {
    const posts = createPosts(state, i18nextInstance);
    divPosts.innerHTML = posts.outerHTML;
  }
  if (path === 'isFormBlocked') {
    if (value) {
      submitButton.disabled = true;
      urlInput.setAttribute('readonly', 'readonly');
    } else {
      submitButton.disabled = false;
      urlInput.removeAttribute('readonly');
    }
  }

  if (path === 'modal') {
    modalTitle.textContent = state.modal.title;
    modalBody.textContent = state.modal.description;
    modalLink.setAttribute('href', state.modal.link);
  }

  if (path === 'viewedPosts') {
    addStylesForViewedPosts(state);
  }
};

export default render;
