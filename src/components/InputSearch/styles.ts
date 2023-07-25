import styled from "styled-components";

export const ContainerInputFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    border: 1.5px solid #E0E0E0;
    background: #FFF;
    width: 400px;
    padding: 15px;
`
export const ButtonFilter = styled.button`
    border: none;
    background: transparent;
    &:hover{
      cursor: pointer;
    }
`
export const InputFilter = styled.input`
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    color: #757575;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
`
