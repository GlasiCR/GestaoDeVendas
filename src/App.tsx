import { useState } from "react"
import RRoutes from "./RRoutes"
import { UserContext } from "./contexts/UserContext"
import { UserType } from "./types/UserType"
import { useLoginApi } from "./hookCustom/useLoginApi";

function App() {
  
  const [user, setUser] = useState<UserType | null>(null)
  const loginApi = useLoginApi()

  
  const login = async(email: string, senha: string) => {
    const dataLogin = await loginApi.login(email, senha) 
    if (dataLogin.user && dataLogin.token){
      setUser(dataLogin.user)
      localStorage.setItem('token', dataLogin.token)
      return true;
    }
    return false;
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  
  return (
    <>
      <UserContext.Provider value={{user, login, logout}}>
        <RRoutes />
      </UserContext.Provider>
    </>
  )
}

export default App
