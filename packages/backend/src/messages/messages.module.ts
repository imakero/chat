import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SseModule } from 'src/sse/sse.module';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from 'src/users/users.service';
import { Message } from '../typeorm/entities/Message';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User]), SseModule],
  controllers: [MessagesController],
  providers: [MessagesService, UsersService],
})
export class MessagesModule {}
