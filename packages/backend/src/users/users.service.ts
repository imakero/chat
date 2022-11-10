import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from '../utils/bcrypt';
import { Repository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { CreateUserParams } from './types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userDetails: CreateUserParams): Promise<User> {
    const password = await hashPassword(userDetails.password);
    const user = this.userRepository.create({
      ...userDetails,
      password,
    });
    return this.userRepository.save(user);
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username });
  }
}
