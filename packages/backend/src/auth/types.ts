import { Request } from 'express';

export type JwtPayload = {
  sub: string;
  username: string;
};

export interface JwtRequest extends Request {
  user: {
    id: number;
    username: string;
  };
}
