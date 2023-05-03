import axios from 'axios';

export const post = (url, body, config) => {
  return axios.post(url, { ...body }, { ...config });
};

export const get = (url, config) => {
  console.log({ ...config });
  return axios.get(url, { ...config });
};
