import api, { endpoints } from ".";

export async function getPosts(offset) {
  const { get } = await api
  return get(endpoints.posts(offset))
}