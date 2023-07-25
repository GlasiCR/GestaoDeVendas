import * as S from "./styles"
import IPerson from "../../images/iconsPagesLoged/iperson.png"
import IArrowRight from "../../images/iconsPagesLoged/iarrowright.png"
import { Link } from "react-router-dom"
type Props = {
    nameCustomer: string,
    statusCustomer: string,
    route: string,
    key?: number,
    nameProduct: string,
    dateLastBuy: string,
    children: React.ReactNode,
    color?: string,
}

export default function PredictionsCard({nameCustomer, statusCustomer, route, key, children, color}: Props){
    return(
        <S.ContainerCardP key={key}>
            <S.HeadCardP>
                <S.DivLeftCard>
                    <S.ImagePerson src={IPerson} alt="Ícone de usuário que representa a ficha do cliente"/>
                    <div>
                        <S.H4custom>{nameCustomer}</S.H4custom>
                        <S.Status color={color}>{statusCustomer}</S.Status>
                    </div>
                </S.DivLeftCard>
                <Link to={route}>
                    <S.ButtonCardP>
                        <img src={IArrowRight} alt="Seta para direita. Botão que acessar informações do card."/>
                    </S.ButtonCardP>
                </Link>
            </S.HeadCardP>
            {children}
        </S.ContainerCardP>
    )
}