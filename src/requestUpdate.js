import parserRss from './parserRss';

const requestUpdate = (feed, watchedState) => {
  const postsFlat = watchedState.posts.flat();

  const postLinks = postsFlat.map((elem) => elem.link);
  fetch(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(feed.url)}`)
    .catch()
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      const result = parserRss(data, feed, watchedState);
      const newPosts = result.posts
        .filter((elem) => !postLinks.includes(elem.link));
      if (newPosts.length !== 0) {
        watchedState.posts.unshift(newPosts);
      }
    })
    .catch();
};

export default requestUpdate;
