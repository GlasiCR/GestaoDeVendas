import { ChangeEventHandler, MouseEventHandler } from "react"
import ISearsh from "../../images/iconsPagesLoged/isearch.png"
import * as S from "./styles"

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    onChange: ChangeEventHandler<HTMLInputElement>,
}
export default function InputSearch({onClick, onChange}: Props){
    return(
        <S.ContainerInputFilter>
            <S.InputFilter onChange={onChange} placeholder="Pesquise uma palavra-chave"/>
            <S.ButtonFilter onClick={onClick}>
                <img src={ISearsh} alt="Botão Pesquisar"/>
            </S.ButtonFilter>
        </S.ContainerInputFilter>
    )
}