import axios from 'axios'; //导入axios模块

export const getArticles = params => {
  return axios.get(`/list`, {
    params: params
  });
};