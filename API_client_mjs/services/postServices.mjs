import { API_URL } from "../config.mjs";
import { fetchData } from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getPosts() {
  return await fetchData(`${API_URL}/posts`);
}

export async function getPostById(id) {
  try {
    validateId(id);
    return await fetchData(`${API_URL}/posts/${id}`);
  } catch (err) {
    console.error("PostService error:", err.message);
  }
}

export default {
  getPosts,
  getPostById,
};
