import {useContext} from "react"
import { UserContext } from "./UserContext"
import LoginScreen from "../pages/loginScreen"

//It's in this component that valid if there is a user logged. If not, direct it to the login screen

type Props = {
    children: React.ReactNode
}
export default function PrivatePage ({children}: Props){
    const userAuth = useContext (UserContext)
    if(!userAuth.user){
        return <LoginScreen />
    }
    return children
}