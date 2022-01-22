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
      if (value === '') throw new Error('empty');
      if (watchedState.rssForm.feeds.includes(value)) {
        throw new Error('exists');
      }
    });
};

export default validateUrl;
