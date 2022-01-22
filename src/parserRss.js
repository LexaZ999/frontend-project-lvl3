import uniqueId from 'lodash/uniqueId.js';

const parserRss = (data, feedIn) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data.contents, 'application/xml');

  const seachError = xmlDoc.querySelector('parsererror');
  if (seachError) throw new Error('invalid RSS');

  const nodeListPosts = xmlDoc.querySelectorAll('item');

  const feedTitle = xmlDoc.querySelector('channel > title').childNodes[0].nodeValue;
  const feedDescription = xmlDoc.querySelector('channel > description').childNodes[0].nodeValue;

  const feedObj = {
    id: uniqueId(),
    url: feedIn,
    title: feedTitle,
    description: feedDescription,
  };

  const feed = (typeof feedIn === 'string') ? feedObj : feedIn;

  const posts = [];
  nodeListPosts.forEach((item) => {
    const title = item.querySelector('title').textContent;
    const link = item.querySelector('link').textContent;
    const description = item.querySelector('description').textContent;
    const post = {
      id: uniqueId(),
      feedId: feed.id,
      title,
      description,
      link,
    };
    posts.push(post);
  });
  return {
    feed,
    posts,
  };
};

export default parserRss;
