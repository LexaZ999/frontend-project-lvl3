const AddNewPosts = (watchedState, data) => {
  const postsFlat = watchedState.posts.flat();

  const postLinks = postsFlat.map((elem) => elem.link);

  const newPosts = data.posts
    .filter((elem) => !postLinks.includes(elem.link));
  if (newPosts.length !== 0) {
    watchedState.posts.unshift(newPosts);
  }
};

export default AddNewPosts;
