import axios from "axios";

const api = axios.create({baseURL: 'https://www.ahnegao.com.br/wp-json/wp/v2'})

export const endpoints = {
  posts: (offset) => `/posts?per_page=5&offset=${offset -1}`,
  tag: (id) => `/tags?post=${id}`,
  author: (id) => `/users/${id}`,
  categories: (id) => `/categries?posts=${id}`,
}

export default api