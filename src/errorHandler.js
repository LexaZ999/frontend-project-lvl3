const errorHandler = (watchedState) => (error) => {
  switch (error.message) {
    case 'network error':
      watchedState.rssForm.state = 'network error';
      break;

    case 'invalid RSS':
      watchedState.rssForm.state = 'invalid RSS';
      break;

    case 'empty':
      watchedState.rssForm.state = 'empty';
      break;

    case 'invalid':
      watchedState.rssForm.state = 'invalid';
      break;

    case 'exists':
      watchedState.rssForm.state = 'exists';
      break;

    default:
      throw new Error(`Unknown error: '${error.message}'!`);
  }
  watchedState.stateBtnAdd = 'enabled';
};

export default errorHandler;
