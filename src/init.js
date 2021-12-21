import validate from './validate';

const runApp = () => {
  const state = {
    rssForm: {
      state: 'valid',
      url: '',
      feeds: [],
      errors: '',
    },
  };

  const rssForm = document.querySelector('.rss-form');

  rssForm.addEventListener('submit', validate(state));
};

export default runApp;
