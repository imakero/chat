import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SseModule } from '../sse/sse.module';
import { User } from '../typeorm/entities/User';
import { UsersService } from '../users/users.service';
import { Message } from '../typeorm/entities/Message';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User]), SseModule],
  controllers: [MessagesController],
  providers: [MessagesService, UsersService],
})
export class MessagesModule {}
