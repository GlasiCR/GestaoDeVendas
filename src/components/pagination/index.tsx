import * as S from './styles'
import IPaginationLeft from "../../images/iconsPagesLoged/paginationLeft.png"
import IPaginationRight from "../../images/iconsPagesLoged/PaginationRight.png"
import { MouseEventHandler } from 'react'

type Props = {
    quantityInPage: number,
    lengthList: number,
    backPage: MouseEventHandler,
    nextPage: MouseEventHandler,
    funcaoRequisicao?: MouseEventHandler,
    children: React.ReactNode,
    disabledToBack?:boolean,
}

export default function Pagination({children, quantityInPage, lengthList, backPage, nextPage, disabledToBack}: Props){
    return(
        <S.MainPagination>
            <S.DetailsShowItems>
                {quantityInPage} de {lengthList} itens
            </S.DetailsShowItems>
            <S.Pages>
                <S.Button onClick={backPage} disabled={disabledToBack}>
                    <img src={IPaginationLeft} alt="Página anterior"></img>
                </S.Button>
                    {children}
                <S.Button onClick={nextPage} disabled={disabledToBack}>
                    <img src={IPaginationRight} alt="Próxima página"></img>
                </S.Button>
            </S.Pages>
        </S.MainPagination>
    )
}