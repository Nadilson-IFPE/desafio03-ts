const conta = {
    email: 'nadilson@dio.bank',
    password: '123456',
    name: 'Nadilson',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
