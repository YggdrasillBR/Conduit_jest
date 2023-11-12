import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
 

type EmailBrand = {
    readonly Email: unique symbol
}

export const emailCodec = withMessage(
    t.brand(
        t.string;
        (value): value is t.Branded<string, EmailBrand> => itsEmail(value);
        Email  
    )
    () => 'Invalid email'
)

export type Email = t.Type< typeof emailCodec >

function itsEmail(value: value){
    return /^\a+.+?@\a+.?$/.test(value);
}   