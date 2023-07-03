import { MouseEventHandler } from "react";
import * as S from "./styles";

type Props = {
    iconTable?: string,
    titleTable?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode,
    descriptionImage?: string,
    backgroundColor?: string,
    colorTitle?: string,
}

export default function TableContainer({iconTable, titleTable, onClick, children, descriptionImage, backgroundColor, colorTitle}: Props){
    return (
        <S.ContainerTable>
            <S.HeaderContainerTable>
                <S.DivTitle>
                    <S.BgImage src={iconTable} alt={descriptionImage} backgroundColor={backgroundColor} />
                    <S.TitleTable color={colorTitle}>{titleTable}</S.TitleTable>  
                </S.DivTitle>
                <div>
                    <button onClick={onClick}>Toglet()</button>    
                    <button onClick={onClick}>Toglet()</button>  
                </div>                 
            </S.HeaderContainerTable>
            <div>
                {children}
            </div>
        </S.ContainerTable>
    )
}