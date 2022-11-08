import { Injectable } from '@nestjs/common';
import { comparePassword } from 'src/utils/bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      try {
        const passwordMatches = await comparePassword(
          inputPassword,
          user.password,
        );
        if (passwordMatches) {
          delete user.password;
          return user;
        }
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
