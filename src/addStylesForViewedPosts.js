import addClass from './addClass';

const addStylesForViewedPosts = (state) => {
  state.viewedPosts.forEach((postId) => {
    const titleLink = document.querySelector(`[data-id="${postId}"]`);
    titleLink.classList.remove('fw-bold');
    addClass(titleLink, 'fw-normal', 'link-secondary');
  });
};

export default addStylesForViewedPosts;
