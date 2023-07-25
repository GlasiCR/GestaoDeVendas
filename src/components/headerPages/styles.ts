import styled from "styled-components";
import { color } from "../../theme/constants";
import { PropsStyle } from "../../types/StyleType";

export const ContainerHeaderPage = styled.div<PropsStyle>`
    border-radius: 24px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : color.primary)};
    display: flex;
    flex-direction: column;
    padding: 50px 35px;
    margin-top: 40px;
`
export const ContainerChildren = styled.div`
    display: flex;
    margin-top: 10px;
`
export const H2 = styled.h2<PropsStyle>`
    color: ${(props) => (props.color ? props.color : '#FFF')};
`
export const DivTitle = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 15px;
    margin-bottom: 10px;   
`