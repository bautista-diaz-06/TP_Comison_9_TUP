import { post} from './api';

export async function loginUser(email, password) {
 
const user = await post('/auth/login', { email, password });
  return user;

}
