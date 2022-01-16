import * as yup from 'yup';
import render from './view';

const validate = (state, i18nextInstance) => {
  const schema = yup.object().shape({
    url: yup.string().url(),
  });

  const watchedState = render(state, i18nextInstance);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('url');

    watchedState.rssForm.url = value;

    schema
      .validate(state.rssForm)
      .then(() => {
        watchedState.rssForm.state = 'valid';
      })
      .catch(() => {
        watchedState.rssForm.state = 'invalid';
      });
  };

  return handlerSubmit;
};

export default validate;
