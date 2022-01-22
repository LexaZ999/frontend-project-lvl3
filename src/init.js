import i18next from 'i18next';
import onChange from 'on-change';
import validateUrl from './validateUrl';
import ru from '../locales/ru.json';
import request from './request';
import updateRss from './updateRss';
import render from './render';
import parserRss from './parserRss';
import addDataToState from './addDataToState';
import errorHandler from './errorHandler';

const runApp = () => {
  const i18nextInstance = i18next.createInstance();
  i18nextInstance.init({
    lng: 'ru',
    debug: true,
    resources: {
      ru,
    },
  });

  const state = {
    rssForm: {
      state: '',
      url: '',
      feeds: [],
      errors: '',
    },
    feeds: [],
    posts: [],
    modal: {
      title: '',
      description: '',
      link: '',
      id: '',
    },
    viewedPosts: [],
    stateBtnAdd: 'enabled',
  };

  const rssForm = document.querySelector('.rss-form');

  const watchedState = onChange(state, render(state, i18nextInstance));

  rssForm.addEventListener('submit', (e) => {
    e.preventDefault();
    watchedState.stateBtnAdd = 'disabled';
    validateUrl(watchedState, e)
      .then(() => request(watchedState.rssForm.url))
      .then((response) => parserRss(response, watchedState.rssForm.url))
      .then((data) => {
        addDataToState(watchedState, data);
        watchedState.stateBtnAdd = 'enabled';
      })
      .catch(errorHandler(watchedState));
  });
  updateRss(watchedState);
};

export default runApp;
