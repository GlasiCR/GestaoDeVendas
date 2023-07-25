import { Outlet } from 'react-router-dom'
import CardHelpMenu from './CardHelpMenu'
import * as S from './styles'
import Logo from '../../images/templateImages/Logo.png'
import User from '../../images/templateImages/User.png'
import IDash from '../../images/templateImages/idash.png'
import IPredic from '../../images/templateImages/ipredic.png'
import IProd from '../../images/templateImages/iprod.png'
import MenuLoginUser from './MenuLoginUser'
import BtnMenu from './BtnMenu'
import { UnderlinedLink } from "./styles";
import { useLoginApi } from '../../hookCustom/useLoginApi'
import { useEffect, useState } from 'react'
import { UserLoggedType } from '../../types/UserType'


export default function HeaderTemplate() {
    const itemsMenu = [
        { name: "Dashboard", image: IDash, route:"" },
        { name: "Predições", image: IPredic, route:"predicoes" },
        { name: "Produtos", image: IProd, route:"produtos"},
    ]
    const [infoUserLogged, setInfoUserLogged] = useState<UserLoggedType>()
    const userLogged = useLoginApi()
    useEffect(() => {
        const loadData = async () => {
            const infoUser = await userLogged.loggedInUser()
            setInfoUserLogged(infoUser)
        };
        loadData()
    },[])
    return (
        <S.ContainerTemplate>
            <S.NavSide>
                <img src={Logo} />
                <S.ContainerBtnMenu>
                    {itemsMenu.map((item, index) => (
                        <UnderlinedLink to={item.route} key={index}>    
                            <BtnMenu
                                titleItemMenu={item.name}
                                imageItemMenu={item.image}
                            />
                        </UnderlinedLink> 
                    ))}
                </S.ContainerBtnMenu>
                <CardHelpMenu />
            </S.NavSide>

            <S.ContainerRightTemplate>
                <S.ContainerUserLogin>
                    <S.ImgUserAvatar src={User} />
                    <MenuLoginUser 
                        email={infoUserLogged?.email}
                        nome={infoUserLogged?.nome}
                    />
                </S.ContainerUserLogin>
                <Outlet />
            </S.ContainerRightTemplate>
        </S.ContainerTemplate>
    )
}