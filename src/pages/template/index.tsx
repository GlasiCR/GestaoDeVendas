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

export default function HeaderTemplate() {
    const itemsMenu = [
        { name: "Dashboard", image: IDash },
        { name: "Predições", image: IPredic },
        { name: "Produtos", image: IProd },
    ]

    return (
        <S.ContainerTemplate>
            <S.NavSide>
                <img src={Logo} />
                <S.ContainerBtnMenu>
                    {itemsMenu.map((item, index) => (
                        <BtnMenu
                            key={index}
                            titleItemMenu={item.name}
                            imageItemMenu={item.image}
                        />
                    ))}
                </S.ContainerBtnMenu>
                <CardHelpMenu />
            </S.NavSide>

            <S.ContainerRightTemplate>
                <S.ContainerUserLogin>
                    <S.ImgUserAvatar src={User} />
                    <MenuLoginUser />
                </S.ContainerUserLogin>
                <Outlet />
            </S.ContainerRightTemplate>
        </S.ContainerTemplate>
    )
}