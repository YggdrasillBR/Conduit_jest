import { type Profile } from './profile'

export interface comment {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Profile
}
