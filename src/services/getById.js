import api, { endpoints } from ".";

export async function getTagById(id) {
  const { get } = api
  return get(endpoints.tag(id))
}

export async function getAuthorById(id) {
  const { get } = api
  return get(endpoints.author(id))
}

export async function getCategoriesById(id) {
  const { get } = api
  return get(endpoints.categories(id))
}