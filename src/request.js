import axios from 'axios';

const request = (url) => axios.get(`https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${encodeURIComponent(url)}`)
  .then((response) => response.data)
  .catch(() => {
    throw new Error('network error');
  });

export default request;
