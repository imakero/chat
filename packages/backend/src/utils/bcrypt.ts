import * as bcrypt from 'bcrypt';

export async function hashPassword(rawPassword: string) {
  return bcrypt.hash(rawPassword, parseInt(process.env.SALT_ROUNDS));
}
