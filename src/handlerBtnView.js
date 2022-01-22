const handlerBtnView = (watchedState) => (event) => {
  const elem = event.target;
  const elemId = elem.dataset.id;
  const postFlat = watchedState.posts.flat();
  const activePost = postFlat.filter((post) => post.id === elemId);
  watchedState.modal = {
    title: activePost[0].title,
    description: activePost[0].description,
    link: activePost[0].link,
    id: elemId,
  };
  watchedState.viewedPosts.push(elemId);
};

export default handlerBtnView;
