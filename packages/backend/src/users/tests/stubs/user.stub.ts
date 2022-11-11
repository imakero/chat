import { User } from '../../../typeorm/entities/User';

export const userStub = (): User => ({
  id: 1,
  username: 'testo',
  email: 'testo@gmail.com',
  password: 'testo',
  messages: [],
});
