import * as S from './styles'
type Props = {
    directionKpi?: string,
    numberKpi?: number,
    percentageKpi?: number,
    width?: string,   
    bgColor?: string,
    colorTitle?: string,
    colorNumberKpi?: string,
    children?:React.ReactNode,
    firstPieceOfTitle?: string,
    titleKpiBold?: string,
    secondPieceOfTitle?: string,
    graphic?: React.ReactNode,
}

export default function KpiCard({graphic, firstPieceOfTitle, titleKpiBold, numberKpi, children, width, bgColor, colorTitle, colorNumberKpi, secondPieceOfTitle}: Props){
    return(
        <S.ContainerKpi width={width} backgroundColor={bgColor}>
            {graphic}
            <S.DatasKpi>
                <S.TitleKpi color={colorTitle}>{firstPieceOfTitle} <b>{titleKpiBold}</b> {secondPieceOfTitle}</S.TitleKpi>
                <>
                    <S.ContainerNumbers>
                        <S.NumberKPI color={colorNumberKpi}>{numberKpi}</S.NumberKPI>
                        {children}
                    </S.ContainerNumbers>
                </>
            </S.DatasKpi>
        </S.ContainerKpi>
    )
}