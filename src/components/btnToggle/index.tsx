import { MouseEventHandler } from "react"
import * as S from './styles'

type Props ={
    changeView: MouseEventHandler<HTMLButtonElement>,
    bgButtonUp: string,
    colorTextButtonUp: string,
    bgButtonDown: string,
    colorTextButtonDown: string,
}
export default function BtnToggle({changeView, bgButtonUp, colorTextButtonUp, bgButtonDown, colorTextButtonDown }: Props) {
    return (
        <S.ContainerButton>
            <S.Button backgroundColor={bgButtonUp} color={colorTextButtonUp} onClick={changeView}>Em alta</S.Button>
            <S.Button backgroundColor={bgButtonDown} color={colorTextButtonDown} onClick={changeView}>Em baixa</S.Button>
        </S.ContainerButton>
    )
}