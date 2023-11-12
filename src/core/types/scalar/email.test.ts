import { CreateUser } from './../CreateUser';
import { pipe } from 'fp-ts/lib/function';
import { Email } from './email';
import * as E from 'fp-ts/Either';


it('Validação do E-mail', () => {
    pipe (
        CreateUser.email
        Email.decode
    )
    if CreateUser.email = true (
        E.map(result => expect(result).toBe(CreateUser.email))
    )
    else (
        E.mapLeft (error => expect(error[0].message).toBe("invalid email"))
    )
})