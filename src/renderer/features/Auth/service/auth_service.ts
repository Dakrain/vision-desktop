import BaseService from '@/shared/network/base.service';
import { User } from '@/shared/types';
import { LoginRequest } from './request';

class AuthService extends BaseService {
  async login(request: LoginRequest): Promise<User> {
    return this.post('/user/login', request);
  }
}

export default AuthService;
