import requestUpdate from './requestUpdate';

/*
http://lorem-rss.herokuapp.com/feed?unit=second&interval=4
*/

const runTimeout = (state, i18nextInstance) => {
  if (state.rssForm.feeds.length !== 0) {
    state.feeds.forEach((feed) => {
      requestUpdate(feed, state, i18nextInstance);
    });
  }
  setTimeout(runTimeout, 5000, state, i18nextInstance);
};

export default runTimeout;
