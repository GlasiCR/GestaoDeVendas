import * as S from './styled'

type Props = {
    imageItemMenu: string,
    titleItemMenu: string,
}

export default function BtnMenu({imageItemMenu, titleItemMenu}: Props){
    return(
        <S.BtnSidebar>
            <img src={imageItemMenu} />
            {titleItemMenu}
        </S.BtnSidebar>
    )
}