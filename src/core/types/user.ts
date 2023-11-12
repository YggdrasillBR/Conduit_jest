import { emailCodec } from './scalar/email';
import * as t from 'io-ts'

export const userCodec = {
  email: emailCodec
  token: t.string
  username: t.string
  bio: t.string
  image: t.string 
}

export type User = t.TypeOf < typeof userCodec >    
