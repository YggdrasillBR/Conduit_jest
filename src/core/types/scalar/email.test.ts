import { CreateUser } from './../CreateUser';
import { pipe } from 'fp-ts/lib/function';
import { emailCodec } from './email';
import * as E from 'fp-ts/Either';


it('Validação do E-mail', () => {
    pipe (
        email.emailCodec
        emailCodec.decode
    )
    if CreateUser.email = true (
        E.map(result => expect(result).toBe(CreateUser.email))
    )
    else (
        E.mapLeft (error => expect(error[0].message).toBe("invalid email"))
    )
})