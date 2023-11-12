import { pipe } from 'fp-ts/function';
import { CreateUser } from "../../types/CreateUser";
import { outsideRegister, register } from './register';
import * as TE from "fp-ts/TaskEither";

const data: CreateUser{
    username: 'jhon',
    email: 'jhon@doe.com',
    password: 'jhon123!'
}

export const registerOk: outsideRegister<string> = async(data) => {
    return 'Usuario ${data.username} cadastrado com sucesso'
}

it('Deveria Cadastrar um usuario corretamente',async () => {
    return pipe (
        data,
        register(registerOk);
        TE.map(result =>expect(result).toBe('Usuario ${data.username} cadastrado com sucesso'))()
    )()
})
