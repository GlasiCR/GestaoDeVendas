import styled from "styled-components";
import { color } from "../../theme/constants";
import { PropsStyle } from "../../types/StyleType";


export const ContainerHeaderPage = styled.div<PropsStyle>`
    border-radius: 24px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : color.primary)};
    display: flex;
    flex-direction: column;
    padding: 30px 35px;
    margin-top: 40px;
    margin-bottom: 35px;
`
export const ContainerChildren = styled.div`
    display: flex;
    margin-top: 10px;
`
export const H2 = styled.h2<PropsStyle>`
    color: ${(props) => (props.color ? props.color : '#FFF')};
`