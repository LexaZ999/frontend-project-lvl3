import onChange from 'on-change';
import createFeeds from './createFeeds.js';
import createPosts from './createPosts.js';
import addEventViewButtons from './addEventViewButtons.js';
import addStylesForViewedPosts from './addStylesForViewedPosts.js';

const render = (state, i18nextInstance) => {
  const urlInput = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  const divFeeds = document.querySelector('.feeds');
  const divPosts = document.querySelector('.posts');
  const submitButton = document.querySelector('.rss-form [type="submit"]');

  const watchedState = onChange(state, (path, value) => {
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
      addEventViewButtons(state);
      addStylesForViewedPosts(state);
    }

    if (path === 'stateBtnAdd') {
      if (value === 'disabled') {
        submitButton.disabled = true;
      } else {
        submitButton.disabled = false;
      }
    }
  });
  return watchedState;
};

export default render;
