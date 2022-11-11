import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtRequest } from '../auth/types';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.messagesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: JwtRequest,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    const message = await this.messagesService.create(
      req.user.id,
      createMessageDto,
    );
    return message;
  }
}
