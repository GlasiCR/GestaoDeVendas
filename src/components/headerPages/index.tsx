import * as S from './styles'
type Props ={
    title: string,
    children?: React.ReactNode,
    colorTitle?: string,
    bgColor?: string,
}
export default function HeaderPages({title, children, colorTitle, bgColor}:Props){
    return(
        <S.ContainerHeaderPage backgroundColor={bgColor}>
            <S.H2 color={colorTitle}>{title}</S.H2>
            <S.ContainerChildren>
                {children}
            </S.ContainerChildren>
        </S.ContainerHeaderPage>
    )
}