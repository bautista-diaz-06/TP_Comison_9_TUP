import { post } from './api';

export async function loginUser(email, password) {
  // RUTA CORRECTA
  const user = await post('/api/auth', { email, password });
  return user;
}
