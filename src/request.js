import parserRss from './parserRss.js';
import render from './view.js';

// http://lorem-rss.herokuapp.com/feed
// https://ru.hexlet.io/lessons.rss
// http://feeds.bbci.co.uk/news/world/rss.xml

const request = (url, state, i18nextInstance) => {
  const watchedState = render(state, i18nextInstance);

  if (state.rssForm.feeds.includes(state.rssForm.url)) {
    watchedState.rssForm.state = 'exists';
    console.log(state);
    return;
  }

  fetch(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(url)}`)
    .catch((e) => console.log(e))
    .then((response) => {
      if (response === undefined) {
        watchedState.rssForm.state = 'network error';
      }
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      try {
        const result = parserRss(data, url, state);
        watchedState.feeds.push(result.feed);
        watchedState.posts.push(result.posts);
        watchedState.rssForm.state = 'added';
        watchedState.rssForm.feeds.push(state.rssForm.url);
        console.log(state);
      } catch {
        watchedState.rssForm.state = 'invalid RSS';
        console.log(state);
      }
    })
    .catch((e) => {
      console.log(e);
      console.log(state);
    });
};

export default request;
