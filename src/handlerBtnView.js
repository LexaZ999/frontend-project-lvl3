import renderingModal from './renderingModal';

const handlerBtnView = (state) => {
  const watchedStateModal = renderingModal(state);

  const handler = (event) => {
    const elem = event.target;
    const elemId = elem.dataset.id;
    const postFlat = state.posts.flat();
    const activePost = postFlat.filter((post) => post.id === elemId);

    watchedStateModal.modal = {
      title: activePost[0].title,
      description: activePost[0].description,
      link: activePost[0].link,
      id: elemId,
    };
    watchedStateModal.viewedPosts.push(elemId);
  };
  return handler;
};

export default handlerBtnView;
