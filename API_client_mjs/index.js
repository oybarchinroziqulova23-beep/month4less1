import config, { API_URL } from "./config.mjs";
import { fetchData } from "./utils/fetcher.mjs";

console.log("API Client ishga tushdi:", API_URL);

const { default: userService } = await import("./services/userService.mjs");
const { default: postService } = await import("./services/postService.mjs");
const { getComments } = await import("./services/commentService.mjs");

try {
  const users = await userService.getUsers();
  console.log("Foydalanuvchilar soni:", users.length);

  const post = await postService.getPostById(1);
  console.log("Post sarlavhasi:", post.title);

  const comments = await getComments();
  console.log("Izohlar soni:", comments.length);

} catch (err) {
  console.error("Umumiy xato:", err.message);
}

console.log("Config:", config);
