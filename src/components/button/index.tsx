import * as S from './styles'
type Props = {
    textButton: string
}
export default function Btn ({textButton}: Props){
    return(
        <S.Btn>{textButton}
        </S.Btn>
    )
}