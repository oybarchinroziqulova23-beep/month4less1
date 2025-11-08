export async function fetchData(endpoint) {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err.message);
    return null;
  }
}

export default {
  fetchData,
};
