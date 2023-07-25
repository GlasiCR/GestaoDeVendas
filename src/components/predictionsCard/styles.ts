import styled from "styled-components";
import {PropsStyle} from "../../types/StyleType"

export const ContainerCardP = styled.div`
    box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.20);
    border-radius: 24px;
    background-color: #FFF;
    width: 18%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 30px;
    padding: 20px;
   
`
export const HeadCardP = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    margin-bottom: 10px;
   
`
export const DivLeftCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
export const ButtonCardP = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
      cursor: pointer;
    }
`
export const ImagePerson = styled.img`
    background-color: #C5CFFF;
    border-radius: 50px;
    padding: 15px;
`
export const H4custom = styled.h4`
    font-size: 18px;
    margin-bottom: 8px;
    
`
export const Status = styled.li<PropsStyle>`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    color: ${(props) => (props.color ? props.color : '#424242')};
`