import parserRss from './parserRss';
import render from './view';

const requestUpdate = (feed, state, i18nextInstance) => {
  const watchedState = render(state, i18nextInstance);

  const postsFlat = state.posts.flat();

  const postLinks = postsFlat.map((elem) => elem.link);
  fetch(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(feed.url)}`)
    .catch()
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      const result = parserRss(data, feed, state);
      const newPosts = result.posts
        .filter((elem) => !postLinks.includes(elem.link));
      if (newPosts.length !== 0) {
        watchedState.posts.unshift(newPosts);
      }
    })
    .catch();
};

export default requestUpdate;
