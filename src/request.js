import parserRss from './parserRss.js';

// http://lorem-rss.herokuapp.com/feed
// https://ru.hexlet.io/lessons.rss
// http://feeds.bbci.co.uk/news/world/rss.xml

const request = (watchedState) => {
  const { url } = watchedState.rssForm;

  watchedState.stateBtnAdd = 'disabled';
  fetch(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(url)}`)
    .catch(() => {
      watchedState.rssForm.state = 'network error';
    })
    .then((response) => {
      if (watchedState.rssForm.state === 'network error') {
        throw new Error('network error');
      }
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      try {
        const result = parserRss(data, url, watchedState);
        watchedState.feeds.unshift(result.feed);
        watchedState.posts.unshift(result.posts);
        watchedState.rssForm.state = 'added';
        watchedState.rssForm.feeds.push(watchedState.rssForm.url);
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
