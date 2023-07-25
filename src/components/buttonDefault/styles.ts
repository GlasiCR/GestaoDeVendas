import styled from "styled-components";
import { color } from "../../theme/constants";
import { PropsStyle } from "../../types/StyleType";

export const Btn = styled.button<PropsStyle>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : color.primary)};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "100px")};
    padding: ${(props) => (props.padding ? props.padding : "12px 60px")};
    justify-content: center;
    align-items: center;
    color: #FFF;
    border: none;
    margin-bottom: 3px;
    width: ${(props) => (props.width ? props.width : "100%")};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 1px;
    &:hover{
        cursor: pointer;
    }
`