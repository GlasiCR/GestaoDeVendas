import styled from "styled-components";
import { color } from "../../theme/constants";

export const MainPagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 55px;
`
export const DetailsShowItems = styled.div`
    color: #9E9E9E;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
`
export const PageActul = styled.p`
    background-color: ${color.primary};
    color: #FFF;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.2px;
    border-radius: 4px;
    padding: 10px 15px;
`
export const NextPage = styled.p`
    color: #9E9E9E;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    padding: 10px 15px;
`
export const Pages = styled.div`
    display: flex;
    gap: 5px;
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    && hover{
      cursor: pointer;
    }
`