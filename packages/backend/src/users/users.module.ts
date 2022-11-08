import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from '../typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
})
export class UsersModule {}
