import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
import { URL } from 'url'

type UrlBrand = {
    readonly Url: unique symbol
}

