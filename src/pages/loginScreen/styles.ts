import styled from "styled-components";
import {color} from "../../theme/constants"
export const MainLogin = styled.main`
    display: flex;
    justify-content: space-between;
`
export const ImgLogin = styled.img`
    width: 40rem;
`
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const SectionLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`
export const TextWelcome = styled.h4`
    color: #424242;
    text-align: start;  
`
export const TextCallAction = styled.h6`
    color: #212121;
    font-size: 36px;
    font-family: 'Sora', sans-serif;
    font-weight: 700;
    line-height: 140%;
    text-align: start; 
`
export const Fieldset = styled.fieldset`
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    overflow: hidden; 
    width: 400px;
    &:focus-within {
        border-color: ${color.success};
        color: ${color.success};
    }
`
export const Input = styled.input`
    outline: none;
    border: none;
    width: 370px;
    height: 25px;
`
export const Legend = styled.legend`
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
`
export const BtnLogin = styled.button`
    border: none;
    background-color: transparent;
`
export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 40px;
    margin-bottom: 30px;
`
export const TextRememberPassword = styled.h5`
    font-weight: 400;
    color: #616161;
`
export const DivBelowForm = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`
export const LabelCheckBox = styled.label`
    color: #212121;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
`
export const DivCheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`