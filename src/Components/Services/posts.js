import api, { endpoints } from './index'

export async function getPosts() {
    const { get } = await api
    return get(endpoints.posts)
}