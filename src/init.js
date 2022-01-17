import i18next from 'i18next';
import validate from './validate';
import ru from '../locales/ru.json';
import request from './request';
import updateRss from './updateRss';

const runApp = () => {
  const state = {
    rssForm: {
      state: '',
      url: '',
      feeds: [],
      errors: '',
    },
    feeds: [],
    posts: [],
  };

  const rssForm = document.querySelector('.rss-form');
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  }).then(() => {
    rssForm.addEventListener('submit', validate(state, i18nextInstance));
  }).then(() => {
    rssForm.addEventListener('submit', () => {
      if (state.rssForm.state === 'valid') {
        request(state.rssForm.url, state, i18nextInstance);
      }
    });
  });
  updateRss(state, i18nextInstance);
};

export default runApp;
