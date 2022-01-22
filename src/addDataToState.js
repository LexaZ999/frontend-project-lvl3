const addDataToState = (watchedState, data) => {
  watchedState.feeds.unshift(data.feed);
  watchedState.posts.unshift(data.posts);
  watchedState.rssForm.state = 'added';
  watchedState.rssForm.feeds.push(watchedState.rssForm.url);
};

export default addDataToState;
