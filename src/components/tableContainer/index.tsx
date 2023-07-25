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
    buttons?: React.ReactNode,
    inputFilter?: React.ReactNode,
    onClickImg?: MouseEventHandler,
}

export default function TableContainer({onClickImg, iconTable, titleTable, buttons, inputFilter, children, descriptionImage, backgroundColor, colorTitle}: Props){
    return (
        <S.ContainerTable>
            <S.HeaderContainerTable>
                <S.DivTitle>
                    {inputFilter}
                    <S.BgImage onClick={onClickImg} src={iconTable} alt={descriptionImage} backgroundColor={backgroundColor} />
                    <S.TitleTable color={colorTitle}>{titleTable}</S.TitleTable>  
                </S.DivTitle>
                {buttons}
            </S.HeaderContainerTable>
            <div>
                {children}
            </div>
        </S.ContainerTable>
    )
}