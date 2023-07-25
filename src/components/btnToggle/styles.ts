import styled from "styled-components";
import { PropsStyle } from "../../types/StyleType";

export const ContainerButton = styled.div`
    background-color:#F5F5F5;
    border-radius: 8px;
    border: 0.8px solid #E0E0E0;
    padding: 3px;
`
export const Button = styled.button<PropsStyle>`
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    color: ${(props) => (props.color ? props.color : '#9E9E9E')};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    border: none;
    border-radius: 8px;
    padding: 10px 35px;
    &:hover{
      cursor: pointer;
    }
`