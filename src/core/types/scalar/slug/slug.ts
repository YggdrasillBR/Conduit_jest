import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'


type SlugBrand {
    readonly Slug: unique symbol
}

export const slugCodec = withMessage(
    t.brand(
        t.string,
        (value): value is t.Branded<t.string, SlugBrand> => isSlug (value),
        "Slug",
    ),
    () => 'Invalid Slug'
)

export type Slug = t.TypeOf<typeof slugCodec>

function isSlug (value){
    return  /^\w[\w\d -]+?$?/.test(value)
}