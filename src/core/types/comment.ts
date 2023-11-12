import { profileCodec } from './profile'
import * as t from 'io-ts'


export const commentCodec = t.type({
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: profileCodec
})
export type Comment = t.TypeOf<typeof commentCodec>
  
}
