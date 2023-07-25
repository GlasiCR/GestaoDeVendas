import * as S from "./styles"

type Props = {
    numberPercentageKPI?: number,
    backgroundColor: string | undefined,
}
export default function DivPercentCardKpi({numberPercentageKPI, backgroundColor}: Props) {
    return (

        <S.BgColor backgroundColor={backgroundColor}>
            <p> {numberPercentageKPI}%</p>
        </S.BgColor>
    )
}

