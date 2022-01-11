import i18next from 'i18next';
import validate from './validate';
import ru from '../locales/ru.json';

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
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  }).then(() => {
    rssForm.addEventListener('submit', validate(state, i18nextInstance));
  });
};

export default runApp;
