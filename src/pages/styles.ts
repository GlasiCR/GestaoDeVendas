import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerInformations = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`
export const UnderlinedLink = styled(Link)`
    text-decoration: none;
`