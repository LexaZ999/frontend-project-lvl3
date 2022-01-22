import errorHandler from './errorHandler';
import AddNewPosts from './AddNewPosts';
import parserRss from './parserRss';
import request from './request';
import addEventViewButtons from './addEventViewButtons';
import addStylesForViewedPosts from './addStylesForViewedPosts';

const runTimeout = (watchedState) => {
  if (watchedState.rssForm.feeds.length !== 0) {
    watchedState.feeds.forEach((feed) => {
      request(feed.url)
        .then((response) => parserRss(response, feed))
        .then((data) => AddNewPosts(watchedState, data))
        .then(() => {
          addEventViewButtons(watchedState);
          addStylesForViewedPosts(watchedState);
        })
        .catch(errorHandler(watchedState));
    });
  }
  setTimeout(runTimeout, 5000, watchedState);
};

export default runTimeout;
