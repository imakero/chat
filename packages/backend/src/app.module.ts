import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: 'chat',
        entities: [User],
        synchronize: true,
      }),
    }),
    UsersModule,
    AuthModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
