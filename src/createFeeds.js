const createFeeds = (state, i18nextInstance) => {
  const feedsCard = document.createElement('div');
  const feedsCardBody = document.createElement('div');
  const feedsCardTitle = document.createElement('h2');
  const feedsList = document.createElement('ul');
  feedsCard.append(feedsCardBody);
  feedsCard.append(feedsList);
  feedsCardTitle.textContent = i18nextInstance.t('feeds');
  feedsCardBody.append(feedsCardTitle);

  feedsCard.classList.add('card', 'border-0');
  feedsCardBody.classList.add('card-body');
  feedsCardTitle.classList.add('card-title', 'h4');
  feedsList.classList.add('list-group', 'border-0', 'rounded-0');

  state.feeds.forEach((feed) => {
    const { title } = feed;
    const { description } = feed;
    const feedItem = document.createElement('li');
    const feedTitle = document.createElement('h3');
    const feedDescription = document.createElement('p');

    feedItem.classList.add('list-group-item', 'border-0', 'border-end-0');
    feedTitle.classList.add('h6', 'm-0');
    feedDescription.classList.add('m-0', 'small', 'text-black-50');

    feedTitle.textContent = title;
    feedDescription.textContent = description;
    feedItem.append(feedTitle);
    feedItem.append(feedDescription);
    feedsList.append(feedItem);
  });
  return feedsCard;
};

export default createFeeds;
