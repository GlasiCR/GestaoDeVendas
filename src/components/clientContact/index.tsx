import * as S from "./styles"
import IMail from "../../images/iconsPagesLoged/imail.png"
import IPhone from "../../images/iconsPagesLoged/iphone.png"

type Props ={
    phoneNumber: string,
    emailAddress: string,
}
export default function ClientContact({phoneNumber, emailAddress}: Props){
    return(
        <S.MainContacts>
            <>
                <img src={IPhone} alt="Telefone do cliente"></img>
                <S.Contacts>{phoneNumber}</S.Contacts>
            </>
            <S.ContainerEmail>
                <img src={IMail} alt="E-mail do cliente"></img>
                <S.Contacts>{emailAddress}</S.Contacts>
            </S.ContainerEmail>
        </S.MainContacts>
    )

}