import styled from "styled-components";
import { PropsStyle } from "../../types/StyleType";

export const ContainerTable = styled.div`
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
    display: inline-block;
    flex: 1;
`
export const HeaderContainerTable = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px;
`
export const TitleTable = styled.h3<PropsStyle>`
    color: ${(props) => (props.color ? props.color : '#212121')};
`
export const BgImage = styled.img<PropsStyle>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#C5CFFF')};
    border-radius: 8px;
    padding: 12px;
    &:hover{
        cursor: pointer;
    }
`
export const DivTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`