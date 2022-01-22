const addStylesForViewedPosts = (watchedState) => {
  watchedState.viewedPosts.forEach((postId) => {
    const titleLink = document.querySelector(`[data-id="${postId}"]`);
    titleLink.classList.remove('fw-bold');
    titleLink.classList.add('fw-normal', 'link-secondary');
  });
};

export default addStylesForViewedPosts;
