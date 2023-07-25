import * as S from './styles'
type Props ={
    title: string,
    children?: React.ReactNode,
    colorTitle?: string,
    bgColor?: string,
    filterPeriod?: React.ReactNode,
}
export default function HeaderPages({title, children, colorTitle, bgColor, filterPeriod}:Props){
    return(
        <S.ContainerHeaderPage backgroundColor={bgColor}>
            <S.DivTitle>
                <S.H2 color={colorTitle}>{title}</S.H2>
                {filterPeriod}
            </S.DivTitle>
            <S.ContainerChildren>
                {children}
            </S.ContainerChildren>
        </S.ContainerHeaderPage>
    )
}