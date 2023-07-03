import BtnCallbackPage from "../components/btnCallbackPage";
import HeaderPages from "../components/headerPages";
import {color} from "../theme/constants"
import { UnderlinedLink } from "./styles";
export default function DashboardProduct(){
    return(
        <>
            <UnderlinedLink to="/">
                <BtnCallbackPage 
                    titleReturn="Detalhamento"
                />
            </UnderlinedLink>
            <HeaderPages
                title="Nome do Produto"
                colorTitle= {color.primary}
                bgColor="transparent"
            >
            </HeaderPages> 
        </>
    )
}