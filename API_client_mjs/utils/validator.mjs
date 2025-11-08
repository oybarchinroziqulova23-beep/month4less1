export function validateId(id) {
  if (typeof id !== "number" || id <= 0) {
    throw new Error("ID must be a positive number");
  }
  return true;
}

export default {
  validateId,
};
