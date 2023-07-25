import { MouseEventHandler } from 'react'
import * as S from './styles'
import Iarrowleft from "../../images/iconsPagesLoged/iarrowleft.png"

type Props = {
    titleReturn: string,
    onClickReturn?: MouseEventHandler<HTMLButtonElement>, 
}

export default function BtnCallbackPage({onClickReturn, titleReturn}: Props){
    return(
       <S.ContainerReturn>
            <S.BtnRerturn onClick={onClickReturn}>
                <img src={Iarrowleft} alt="Retorno para página anterior"/>
            </S.BtnRerturn>
            <S.TextReturn>{titleReturn}</S.TextReturn>
       </S.ContainerReturn> 
    )
}