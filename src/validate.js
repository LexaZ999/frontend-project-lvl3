import * as yup from 'yup';
import render from './view';

const validate = (state) => {
  const schema = yup.object().shape({
    url: yup.string().url(),
  });

  const watchedState = render(state);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('url');

    watchedState.rssForm.url = value;

    schema.isValid(state.rssForm).then((isValid) => {
      if (isValid) {
        watchedState.rssForm.state = 'valid';
        if (!state.rssForm.feeds.includes(value)) {
          watchedState.rssForm.feeds.push(value);
          watchedState.rssForm.errors = '';
        } else {
          watchedState.rssForm.state = 'invalid';
          watchedState.rssForm.errors = 'RSS уже существует';
        }
      } else {
        watchedState.rssForm.state = 'invalid';
        watchedState.rssForm.errors = 'Ссылка должна быть валидным URL';
      }
    });
  };

  return handlerSubmit;
};

export default validate;
