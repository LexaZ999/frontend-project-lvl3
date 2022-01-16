import addClass from './addClass.js';

const createFeeds = (state, i18nextInstance) => {
  const feedsCard = document.createElement('div');
  const feedsCardBody = document.createElement('div');
  const feedsCardTitle = document.createElement('h2');
  const feedsList = document.createElement('ul');
  feedsCard.append(feedsCardBody);
  feedsCard.append(feedsList);
  feedsCardTitle.textContent = i18nextInstance.t('feeds');
  feedsCardBody.append(feedsCardTitle);

  addClass(feedsCard, 'card', 'border-0');
  addClass(feedsCardBody, 'card-body');
  addClass(feedsCardTitle, 'card-title', 'h4');
  addClass(feedsList, 'list-group', 'border-0', 'rounded-0');

  state.feeds.forEach((feed) => {
    const { title } = feed;
    const { description } = feed;
    const feedItem = document.createElement('li');
    const feedTitle = document.createElement('h3');
    const feedDescription = document.createElement('p');

    addClass(feedItem, 'list-group-item', 'border-0', 'border-end-0');
    addClass(feedTitle, 'h6', 'm-0');
    addClass(feedDescription, 'm-0', 'small', 'text-black-50');

    feedTitle.textContent = title;
    feedDescription.textContent = description;
    feedItem.append(feedTitle);
    feedItem.append(feedDescription);
    feedsList.append(feedItem);
  });
  return feedsCard;
};

export default createFeeds;
