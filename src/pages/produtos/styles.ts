import styled from "styled-components";
import { PropsStyle } from "../../types/StyleType";
import { color } from "../../theme/constants"
import { Link } from 'react-router-dom';

export const UnderlinedLink = styled(Link)`
    text-decoration: none;
`
export const ContainerInformations = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 15px;
`
export const PageActul = styled.button<PropsStyle & {isActive?: boolean}>`
    background-color: ${({isActive}) => isActive ? color.primary : "transparent"};
    color: ${({isActive}) => isActive ? '#FFF' : "#9E9E9E"};
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: ${({isActive}) => isActive ? '600' : '400'};       ;
    line-height: 140%;
    letter-spacing: 0.2px;
    border-radius: ${({isActive}) => isActive ? '4px' : '0px'};
    padding: 10px 15px;
    border: none;
    &:hover{
        cursor: pointer;
    }
`
export const UlPagination = styled.ul`
    display: flex;
    & li{
        text-decoration: none;
    }  
`
export const SpanTd = styled.span<PropsStyle>` 
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#FFF')};        
    color: ${(props) => (props.color ? props.color : '#FFF')};
    padding: 10px 23px;
    border-radius: 8px;
`