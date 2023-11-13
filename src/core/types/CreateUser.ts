import { createUserCodec } from './CreateUser';
import * as t from 'io-ts'
import { emailCodec } from './scalar/email/email';

export const createUserCodec = t.type({
  username: t.string;
  email = emailCodec;
  password: t.string;
}) 

export type CreateUser = t.TypeOf <typeof createUserCodec>