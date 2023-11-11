import { type Profile } from './profile'

export type comment = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Profile
}
