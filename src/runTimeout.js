import requestUpdate from './requestUpdate';

/*
http://lorem-rss.herokuapp.com/feed?unit=second&interval=4
*/

const runTimeout = (watchedState) => {
  if (watchedState.rssForm.feeds.length !== 0) {
    watchedState.feeds.forEach((feed) => {
      requestUpdate(feed, watchedState);
    });
  }
  setTimeout(runTimeout, 5000, watchedState);
};

export default runTimeout;
