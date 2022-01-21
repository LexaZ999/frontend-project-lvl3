import runTimeout from './runTimeout.js';

const updateRss = (watchedState) => {
  setTimeout(runTimeout, 5000, watchedState);
};

export default updateRss;
