import onChange from 'on-change';

const render = (state) => {
  const urlInput = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');

  const watchedState = onChange(state, (path, value) => {
    if (path === 'rssForm.state') {
      if (value === 'invalid') {
        urlInput.classList.add('is-invalid');
      }
      if (value === 'valid') {
        urlInput.classList.remove('is-invalid');
      }
    }

    if (path === 'rssForm.errors') {
      feedback.textContent = state.rssForm.errors;
    }

    if (path === 'rssForm.feeds') {
      document.querySelector('.rss-form').reset();
      urlInput.focus();
    }
  });
  return watchedState;
};

export default render;
