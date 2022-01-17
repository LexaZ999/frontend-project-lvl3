import runTimeout from './runTimeout.js';

const updateRss = (state, i18nextInstance) => {
  setTimeout(runTimeout, 5000, state, i18nextInstance);
};

export default updateRss;
