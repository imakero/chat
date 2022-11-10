import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/typeorm/entities/Message';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';
import { CreateMessageParams } from './types';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.messageRepository.find({ relations: ['user'] });
  }

  async create(userId: number, message: CreateMessageParams) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new HttpException(
        'User not found, cannot create message.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newMessage = await this.messageRepository.create({
      ...message,
      postedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      user,
    });
    return this.messageRepository.save(newMessage);
  }
}
