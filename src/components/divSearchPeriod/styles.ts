import styled from "styled-components";
import {color} from "../../theme/constants"
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 15px;
    background-color: #FFF;
    border-radius: 8px;
    width: 220px;
    margin-right: 28px;
    
`
export const Label = styled.h5`
    color: #424242;
    font-weight: 400;
`
export const Option = styled.h5`
    color: ${color.primary};
    font-weight: 600;
`