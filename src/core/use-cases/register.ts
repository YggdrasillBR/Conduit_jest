import { type outsideRegister } from './register';
import { CreateUser } from '../types/CreateUser';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either'


export type outsideRegister = (data: CreateUser) => Promise<A>

export type Register = <A> (outsideRegister: outsideRegister) => (data: CreateUser) => TE.TaskEither<Error, A>

export const register: Register = (outsideRegister) => (data) => {
    TE.tryCatch(
        () => outsideRegister(data),
        E.toError,
    );
}