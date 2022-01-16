import uniqueId from 'lodash/uniqueId.js';

const parserRss = (data, url) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data.contents, 'application/xml');
  const feedTitle = xmlDoc.querySelector('channel > title').childNodes[0].nodeValue;
  const feedDescription = xmlDoc.querySelector('channel > description').childNodes[0].nodeValue;
  const nodeListPosts = xmlDoc.querySelectorAll('item');
  const feed = {
    id: uniqueId(),
    url,
    title: feedTitle,
    description: feedDescription,
  };
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
