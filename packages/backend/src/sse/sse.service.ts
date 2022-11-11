import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { SseMessageEvent } from './types';

@Injectable()
export class SseService {
  private events = new Subject();

  addEvent(event: SseMessageEvent) {
    this.events.next(event);
  }

  sendEvents() {
    return this.events.asObservable();
  }
}
