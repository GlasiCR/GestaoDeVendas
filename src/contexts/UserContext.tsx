import { createContext} from "react"; 

export type UserType = {
    email: string,
    senha: string,
    name?: string,
    token?: string,
}
type UserContextType = {
    user: UserType | null,
    login: (email: string, senha: string) => Promise<boolean>,
    logout: () => void,
}
export const UserContext = createContext<UserContextType>({
    user: {email: "", senha: ""}, 
    login: async () => {
        return false
    },
    logout: () => void {},
})
