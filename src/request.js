import parserRss from './parserRss.js';
import render from './view.js';

// http://lorem-rss.herokuapp.com/feed
// https://ru.hexlet.io/lessons.rss
// http://feeds.bbci.co.uk/news/world/rss.xml

const request = (url, state, i18nextInstance) => {
  const watchedState = render(state, i18nextInstance);

  if (state.rssForm.feeds.includes(state.rssForm.url)) {
    watchedState.rssForm.state = 'exists';
    return;
  }

  watchedState.stateBtnAdd = 'disabled';
  fetch(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(url)}`)
    .catch(() => {
      watchedState.rssForm.state = 'network error';
    })
    .then((response) => {
      if (state.rssForm.state === 'network error') {
        throw new Error('network error');
      }
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      try {
        const result = parserRss(data, url, state);
        watchedState.feeds.unshift(result.feed);
        watchedState.posts.unshift(result.posts);
        watchedState.rssForm.state = 'added';
        watchedState.rssForm.feeds.push(state.rssForm.url);
      } catch {
        watchedState.rssForm.state = 'invalid RSS';
      }
      watchedState.stateBtnAdd = 'enabled';
    })
    .catch((e) => {
      console.log(e);
      watchedState.stateBtnAdd = 'enabled';
    });
};

export default request;
