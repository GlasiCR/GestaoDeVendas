import styled from "styled-components";
import {color} from "../../theme/constants"
export const ContainerTable = styled.table`
    border-radius: 16px;
    margin: 25px;
    width: 95%;
`
export const Thead = styled.thead`
    background-color: ${color.primary};
    tr{
        color: #C5CFFF;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: 0.2px;
        text-align: center
    }   
`
export const Tbody = styled.tbody`
    background-color: #FAFAFA;
    
    tr{
        color: var(--cinza-900, #212121);
        text-align: center;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.2px;
    }   
`
export const BtnRightTable = styled.button`
    background-color: transparent;
    border: none;
`