import { API_URL } from "../config.mjs";
import { fetchData } from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getComments() {
  return await fetchData(`${API_URL}/comments`);
}

export async function getCommentById(id) {
  try {
    validateId(id);
    return await fetchData(`${API_URL}/comments/${id}`);
  } catch (err) {
    console.error("CommentService error:", err.message);
  }
}

export default {
  getComments,
  getCommentById,
};
