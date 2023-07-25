export type UserType = {
    email: string,
    senha: string,
    nome?: string,
    token?: string,
}

export type UserLoggedType = Omit<UserType, 'senha' | 'token'>