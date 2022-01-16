import onChange from 'on-change';
import createFeeds from './createFeeds.js';
import createPosts from './createPosts.js';

const render = (state, i18nextInstance) => {
  const urlInput = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');
  const divFeeds = document.querySelector('.feeds');
  const divPosts = document.querySelector('.posts');

  const watchedState = onChange(state, (path, value) => {
    if (path === 'rssForm.state') {
      if (value === 'invalid') {
        urlInput.classList.add('is-invalid');
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        feedback.textContent = i18nextInstance.t('feedback.invalid');
      }
      if (value === 'added') {
        urlInput.classList.remove('is-invalid');
        feedback.classList.remove('text-danger');
        feedback.classList.add('text-success');
        feedback.textContent = i18nextInstance.t('feedback.added');
      }
      if (value === 'exists') {
        urlInput.classList.add('is-invalid');
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        feedback.textContent = i18nextInstance.t('feedback.exists');
      }
      if (value === 'network error') {
        urlInput.classList.add('is-invalid');
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        feedback.textContent = i18nextInstance.t('feedback.network error');
      }
      if (value === 'invalid RSS') {
        urlInput.classList.add('is-invalid');
        feedback.classList.remove('text-success');
        feedback.classList.add('text-danger');
        feedback.textContent = i18nextInstance.t('feedback.invalid RSS');
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
  });
  return watchedState;
};

export default render;
