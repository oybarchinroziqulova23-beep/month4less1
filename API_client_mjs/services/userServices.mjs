import { API_URL } from "../config.mjs";
import { fetchData } from "../utils/fetcher.mjs";
import { validateId } from "../utils/validator.mjs";

export async function getUsers() {
  return await fetchData(`${API_URL}/users`);
}

export async function getUserById(id) {
  try {
    validateId(id);
    return await fetchData(`${API_URL}/users/${id}`);
  } catch (err) {
    console.error("UserService error:", err.message);
  }
}

export default {
  getUsers,
  getUserById,
};
