import * as S from "./styled"
import Btn from "../button"
import Hands from '../../images/templateImages/hands.png'

export default function CardHelpMenu(){
  return(
    <S.ContainerCard>
      <S.ImgHands src={Hands} />
      <S.Card>
        <S.ParagraphTalkUs>Precisando de <b>ajuda ou suporte </b>em algo?</S.ParagraphTalkUs>
        <Btn 
          textButton="Fale Conosco"
        />
      </S.Card>
    </S.ContainerCard>
  )
}