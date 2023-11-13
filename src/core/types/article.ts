import { Article } from './article';
import { tagCodec} from './tag'
import { profileCodec } from './profile'
import * as t from "io-ts"
import { slugCodec } from './scalar/slug/slug';

export const articuleCodec = t.type({
  slug: slugCodec
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
  articles: t.array(Article)
  articlesCount: t.number
})

export type Articles = t.TypeOf<typeof articlesCodec>
