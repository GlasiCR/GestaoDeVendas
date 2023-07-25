import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerInformations = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 15px;
`
export const UnderlinedLink = styled(Link)`
    text-decoration: none;
`
export const BtnRightTable = styled.button`
    background-color: transparent;
    border: none;
    &:hover{
        cursor: pointer;
    }
`