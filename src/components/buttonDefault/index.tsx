import { MouseEventHandler } from 'react'
import * as S from './styles'

type Props = {
    textButton: string,
    width?: string,
    borderRadius?: string,
    padding?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    children?: React.ReactNode,
    backgroundColor?: string,
}

export default function ButtonDefault ({textButton, width, borderRadius, padding, onClick, disabled, children, backgroundColor}: Props){
    return(
        <S.Btn onClick={onClick} width={width} backgroundColor={backgroundColor} borderRadius={borderRadius} padding={padding} disabled={disabled}>
            {textButton}
            {children}
        </S.Btn>
    )
}