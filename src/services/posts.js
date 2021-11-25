import api, { endpoints } from ".";

export async function getPosts() {
  const { get } = await api
  return get(endpoints.posts)
}