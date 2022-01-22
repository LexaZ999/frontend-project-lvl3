const createPosts = (state, i18nextInstance) => {
  const postsCard = document.createElement('div');
  const postsCardBody = document.createElement('div');
  const postsCardTitle = document.createElement('h2');
  const postsList = document.createElement('ul');
  postsCard.append(postsCardBody);
  postsCard.append(postsList);
  postsCardTitle.textContent = i18nextInstance.t('posts');
  postsCardBody.append(postsCardTitle);

  postsCard.classList.add('card', 'border-0');
  postsCardBody.classList.add('card-body');
  postsCardTitle.classList.add('card-title', 'h4');
  postsList.classList.add('list-group', 'border-0', 'rounded-0');

  const postsFlat = state.posts.flat();

  postsFlat.forEach((post) => {
    const { title, link, id } = post;

    const postItem = document.createElement('li');
    const postLink = document.createElement('a');
    const button = document.createElement('button');

    postItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
    postLink.classList.add('fw-bold');
    button.classList.add('btn', 'btn-outline-primary', 'btn-sm');

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
