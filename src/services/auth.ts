import axiosConfig from './config';

class AuthRequest {
  registerUser(user: object) {
    const url = '/users/register';
    return axiosConfig.post(url, user);
  }

  loginUser(user: object) {
    const url = '/users/login';
    return axiosConfig.post(url, user);
  }
}
export default new AuthRequest();
