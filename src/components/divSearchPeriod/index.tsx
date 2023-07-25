import Calendar from "../../images/iconsPagesLoged/calendar.png"
import BtnMoreOptions from "../../images/iconsPagesLoged/down.png"
import * as S from "./styles"

export default function DivSearchPeriod(){
    return(
        <S.Container>
            <img src={Calendar} alt="Ícone calendário" />
            <S.Label>Mostrar</S.Label>
            <S.Option>Esse mês</S.Option>
            <img src={BtnMoreOptions} alt="Botão, escolher outras opções de visualização por período" />
        </S.Container>
    )
}