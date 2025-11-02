const API_URL = "http://localhost:3001/usuarios";

export const getUsers = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createUser = async (user) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
};
