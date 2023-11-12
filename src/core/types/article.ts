import { tagCodec} from './tag'
import { profileCodec } from './profile'
import * as t from "io-ts"

export const articuleCodec = t.type({
  slug: t.string
  title: t.string
  description: t.string
  body: string
  taglist: t.array(tagCodec)
  createdAt: t.string
  updatedAt: t.string
  favorited: t.boolean
  favoritedNumber: t.number
  author: profileCodec
})

export type Article = t.TypeOf<typeof articuleCodec>

export const articlesCodec = t.type({
  article: t.array(articlesCodec)
  articlesCount: t.number
})

export type Articles = t.TypeOf<typeof articlesCodec>

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
