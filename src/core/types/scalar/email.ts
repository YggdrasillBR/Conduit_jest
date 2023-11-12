import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'
 

type EmailBrand = {
    readonly Email: unique symbol
}

export const Email = withMessage(
    t.brand(
        t.string;
        (value): value is t.Branded<string, EmailBrand> => itsEmail(value);
        Email  
    )
    () => 'Invalid email'
)

function itsEmail(value: value){
    return /^\a+.+?@\a+.?$/.test(value);
}   