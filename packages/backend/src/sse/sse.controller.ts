import { Controller, Sse, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SseService } from './sse.service';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @UseGuards(JwtAuthGuard)
  @Sse()
  doTheSse() {
    return this.sseService.sendEvents();
  }
}
