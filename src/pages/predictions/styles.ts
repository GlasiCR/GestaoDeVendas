import styled from "styled-components";
import { Link } from 'react-router-dom';
import { color } from "../../theme/constants"

export const UnderlinedLink = styled(Link)`
    text-decoration: none;
`
export const ContainerInfPredictions = styled.div`
    display: flex;
    flex-wrap:wrap-reverse;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    overflow-y: auto;
`
export const ContainerInformations = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 15px;
`
export const ContainerForFilter = styled.div`
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.20);
    margin-left: 30px;
    padding: 30px 35px;
`
export const BtnRightTable = styled.button`
    background-color: transparent;
    border: none;
`
export const Ttable = styled.table`
    border-radius: 16px;
    background-color: rgba(238, 238, 238, 0.5);
    padding: 15px;   
`
export const TitleColumn = styled.thead`
    color: ${color.third};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    & tr {
        th: nth-child(1){
            text-align: left;
        }
    }
`
export const BodyTable = styled.tbody`
    color: #424242;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    text-align: center;
    & tr {
        td:nth-child(1){
            text-align: left;
        }
    }   
`
export const TdNextBuy = styled.td`
    font-weight: 600;
`
