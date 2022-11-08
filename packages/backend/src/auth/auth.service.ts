import { Injectable } from '@nestjs/common';
import { comparePassword } from 'src/utils/bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && comparePassword(inputPassword, user.password)) {
      delete user.password;
      return user;
    }
    return null;
  }
}
