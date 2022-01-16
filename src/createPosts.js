import addClass from './addClass.js';

const createPosts = (state, i18nextInstance) => {
  const postsCard = document.createElement('div');
  const postsCardBody = document.createElement('div');
  const postsCardTitle = document.createElement('h2');
  const postsList = document.createElement('ul');
  postsCard.append(postsCardBody);
  postsCard.append(postsList);
  postsCardTitle.textContent = i18nextInstance.t('posts');
  postsCardBody.append(postsCardTitle);

  addClass(postsCard, 'card', 'border-0');
  addClass(postsCardBody, 'card-body');
  addClass(postsCardTitle, 'card-title', 'h4');
  addClass(postsList, 'list-group', 'border-0', 'rounded-0');

  const postsFlat = state.posts.flat();

  postsFlat.forEach((post) => {
    const { title, link, id } = post;

    const postItem = document.createElement('li');
    const postLink = document.createElement('a');
    const button = document.createElement('button');

    addClass(postItem, 'list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
    addClass(postLink, 'fw-bold');
    addClass(button, 'btn', 'btn-outline-primary', 'btn-sm');

    postLink.setAttribute('href', link);
    postLink.setAttribute('data-id', id);
    postLink.setAttribute('target', '_blank');
    postLink.setAttribute('rel', 'noopener noreferrer');
    button.setAttribute('type', 'button');
    button.setAttribute('data-id', id);
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modal');

    postLink.textContent = title;
    button.textContent = i18nextInstance.t('preview');

    postItem.append(postLink);
    postItem.append(button);
    postsList.append(postItem);
  });
  return postsCard;
};

export default createPosts;
