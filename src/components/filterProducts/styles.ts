import styled from "styled-components";

export const MainFilter = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.40);
    width: 300px;
    padding: 15px;
    
`
export const Title = styled.h5`
    font-weight: 600;
    width: 83%;
    margin: 10px
`
export const Subtitle = styled.h5`
    font-weight: 400;
    width: 83%;
    border-top: 2px solid #E0E0E0;
    padding-top: 10px;
`
export const DivFilter = styled.div`
    width: 95%;
`
export const DivCheckBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    margin: 15px 10px;
`