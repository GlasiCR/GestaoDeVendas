import * as S from "./styles"
import ButtonDefault from "../../components/buttonDefault"
import Hands from '../../images/templateImages/hands.png'

export default function CardHelpMenu(){
  return(
    <S.ContainerCard>
      <S.ImgHands src={Hands} />
      <S.Card>
        <S.ParagraphTalkUs>Precisando de <b>ajuda ou suporte </b>em algo?</S.ParagraphTalkUs>
        <ButtonDefault
          textButton="Fale Conosco"
          width="92%"
          padding="10px 5px"
        />
      </S.Card>
    </S.ContainerCard>
  )
}