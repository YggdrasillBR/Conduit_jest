import { CreateUser } from '../../CreateUser';
import { pipe } from 'fp-ts/lib/function';
import { emailCodec, Email } from './email';
import * as E from 'fp-ts/Either';


it('Validação do E-mail', () => {
    pipe (
        Email
    )
    if emailCodec = true (
        E.map(result => expect(result).toBe(CreateUser.email))
    )
    else (
        E.mapLeft (error => expect(error[0].message).toBe("invalid email"))
    )
})