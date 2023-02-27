import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nadilson@dio.bank'
    const mockPassword = '123456'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email ou senha sejam inválidos', async () => {
        const response = await login('email@invalido.com', "12345")
        expect(response).toBeFalsy()
    })
})