import * as yup from 'yup';

const validateUrl = (watchedState, e) => {
  const schema = yup.object().shape({
    url: yup.string().url('invalid'),
  });

  const formData = new FormData(e.target);
  const value = formData.get('url');
  watchedState.rssForm.url = value;

  return schema.validate(watchedState.rssForm)
    .then(() => {
      watchedState.rssForm.state = 'valid';
    })
    .then(() => {
      if (value === '') throw new Error('empty');
      if (watchedState.rssForm.feeds.includes(value)) {
        throw new Error('exists');
      }
    })
    .catch((error) => {
      switch (error.message) {
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
          throw new Error('Unknown state!');
      }
    });
};

export default validateUrl;
