import * as S from './styles'
type Props = {
    titleKpi: string,
    directionKpi: string,
    numberKpi: number,
    percentageKpi: number,    
}

export default function KpiCard({titleKpi, directionKpi, numberKpi, percentageKpi}: Props){
    return(
        <S.ContainerKpi>
            <div style={{width: "60px", height: "60px", background: "white"}}></div>
            <S.DatasKpi>
                <S.TitleKpi>Total <b>{titleKpi}</b> em {directionKpi}</S.TitleKpi>
                <>
                    <S.ContainerNumbers>
                        <h2>{numberKpi}</h2>
                        <div>
                            <S.Percentage style={{ backgroundColor: percentageKpi < 0 ? '#F33' : '#00C247' }}> {percentageKpi}%</S.Percentage>
                        </div>
                    </S.ContainerNumbers>
                </>
            </S.DatasKpi>
        </S.ContainerKpi>
    )
}