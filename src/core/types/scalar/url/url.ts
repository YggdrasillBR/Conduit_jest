import { urlCodec } from './url'
import { tryCatch } from 'fp-ts/lib/Option'
import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { URL } from 'url'

interface UrlBrand {
  readonly Url: unique symbol
}

export const urlCodec = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<t.spring, UrlBrand> => isUrl(value),
    'Url'
  )
)

export type Url: t.TypeOf<typeof urlCodec>

function isUrl (input: unknown) {
  try {
    const url = new URL(typeof input === 'string' ? input : '')
    return url
  } catch {
    return false
  }
}
