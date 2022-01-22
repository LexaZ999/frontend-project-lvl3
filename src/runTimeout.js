import errorHandler from './errorHandler';
import AddNewPosts from './AddNewPosts';
import parserRss from './parserRss';
import request from './request';

const runTimeout = (watchedState) => {
  if (watchedState.rssForm.feeds.length !== 0) {
    watchedState.feeds.forEach((feed) => {
      request(feed.url)
        .then((response) => parserRss(response, feed))
        .then((data) => AddNewPosts(watchedState, data))
        .catch(errorHandler(watchedState));
    });
  }
  setTimeout(runTimeout, 5000, watchedState);
};

export default runTimeout;
