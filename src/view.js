import onChange from 'on-change';

const render = (state, i18nextInstance) => {
  const urlInput = document.querySelector('#url-input');
  const feedback = document.querySelector('.feedback');

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
    }
    if (path === 'rssForm.feeds') {
      document.querySelector('.rss-form').reset();
      urlInput.focus();
    }
  });
  return watchedState;
};

export default render;
