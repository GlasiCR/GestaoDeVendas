import { MouseEventHandler } from 'react'
import ButtonDefault from '../buttonDefault'
import CheckboxInput from '../checkboxInput'
import * as S from './styles'

type Props = {
    onClick: MouseEventHandler,
    children: React.ReactNode,
    button: React.ReactNode,
}

export default function FilterProducts({ onClick, children, button}: Props) {
    return (
        <S.MainFilter>
            <S.Title>Filtrar por:</S.Title>
            <S.Subtitle>Status</S.Subtitle>
            
            <S.DivFilter>
                <S.DivCheckBox>
                    {children}
                </S.DivCheckBox>
            </S.DivFilter>
            {/* <ButtonDefault
                borderRadius='16px'
                textButton='Aplicar'
                width='95%'
                padding='10px 60px'
                onClick={onClick}
            /> */}
            {button}
        </S.MainFilter>
    )
}