import styled from "styled-components";
import { color } from "../../theme/constants";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background: transparent;  
`
export const NavSide = styled.nav`
    background: ${color.primary};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    width: 274px;
    height: 1208px;
    letter-spacing: 0.2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 45px;
`
export const ContainerCard = styled.div`
    width: 223px;
    height: 201px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 450px;
`
export const Card = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: ${color.third};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    padding-bottom: 13px;
`
export const ImgHands = styled.img`
    position: absolute;
    width: 194px;
    height: 194px;
    top: -100px;
    text-align: center;
`
export const ParagraphTalkUs = styled.p`
    padding: 10px 15px;  
`

export const ContainerUserLogin = styled.div`
   display: flex;
   padding: 38px;
   gap: 5px;
`
export const ImgUserAvatar = styled.img`
    border-radius: 50px;
    background: ${color.primary};
    width: 46px;
    height: 46px;
    padding: 10px;
`
export const ContainerBtnMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`
export const BtnSidebar = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;
    padding: 25px;
    font-size: 16px;
    border-radius: 8px;
    margin: 0 13px;

    &:active {
        background-color: rgba(118, 130, 193, 0.30000001192092896);
        font-size: 16px;
        font-weight: 600;
    } 
`