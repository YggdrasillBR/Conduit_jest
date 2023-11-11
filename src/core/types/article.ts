import { type Tag } from './tag'
import { type Profile } from './profile'

export type Article {
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
