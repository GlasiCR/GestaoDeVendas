import styled from "styled-components";
import { PropsStyle } from "../../types/StyleType";

export const BgColor = styled.div<PropsStyle>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#FFF')};
    color: #FFF;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    border-radius: 50px;
    height: auto;
    margin-left: 15px;
    padding: 4px 17px;
`