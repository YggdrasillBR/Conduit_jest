import { Tag } from './tag'
import { Profile } from './profile'

export interface Article {
  slug: string
  title: string
  description: string
  body: string
  taglist: Tag[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritedNumber: number
  author: Profile
}
export type Articles = {
  article: Article[]
  articlesCount: number
}
