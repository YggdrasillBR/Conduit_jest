import { emailCodec } from './scalar/email/email';
import * as t from 'io-ts'
import { urlCodec } from './scalar/url/url';

export const userCodec = {
  email: emailCodec
  token: t.string
  username: t.string
  bio: t.string
  image: urlCodec 
}

export type User = t.TypeOf < typeof userCodec >    
