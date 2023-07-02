import * as S from './styled'
type Props = {
    textButton: string
}
export default function Btn ({textButton}: Props){
    return(
        <S.Btn>{textButton}
        </S.Btn>
    )
}